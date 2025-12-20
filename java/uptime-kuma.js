//uptime检测
class ServiceStatus {
    constructor() {
        this.isInitialized = false;
        this.apiUrl = 'https://uptime.mc-sep.top/api/status-page/heartbeat/view';
        // 在这里直接配置你的 Uptime Kuma 状态页面URL
        this.statusPageUrl = 'https://uptime.mc-sep.top/api/status-page/heartbeat/view';
        this.config = {
            statusText: {
                normal: '服务正常',
                warning: '部分异常',
                error: '服务异常',
                loading: '加载中...',
                unknown: '未知状态',
                noApi: '未配置API',
                apiError: 'API错误',
                networkError: '网络错误',
                noService: '无监控服务'
            }
        };
        
        // 直接初始化
        this.init();
        this.injectStyles();
    }

    injectStyles() {
        // 注入CSS样式
        const style = document.createElement('style');
        style.textContent = `
            .footer-service-status {
                display: inline-flex;
                align-items: center;
                gap: 4px;
                margin-left: 8px;
                color: var(--efu-fontcolor);
                font-size: 0.75rem;
                font-weight: 400;
                white-space: nowrap;
                text-decoration: none;
                transition: color 0.3s ease;
                vertical-align: middle;
            }
            
            .footer-service-status:hover {
                color: var(--efu-theme);
            }
            
            .service-status-indicator {
                width: 5px;
                height: 5px;
                border-radius: 50%;
                display: inline-block;
                transition: all 0.3s ease;
                flex-shrink: 0;
            }
            
            .service-status-indicator.status-normal {
                background: #52c41a;
                box-shadow: 0 0 4px rgba(82, 196, 26, 0.4);
            }
            
            .service-status-indicator.status-warning {
                background: #faad14;
                box-shadow: 0 0 4px rgba(250, 173, 20, 0.4);
            }
            
            .service-status-indicator.status-error {
                background: #ff4d4f;
                box-shadow: 0 0 4px rgba(255, 77, 79, 0.4);
            }
            
            .service-status-indicator.status-unknown {
                background: #d9d9d9;
                box-shadow: 0 0 4px rgba(217, 217, 217, 0.4);
            }
            
            .service-status-indicator.status-loading {
                background: #1890ff;
                box-shadow: 0 0 4px rgba(24, 144, 255, 0.4);
                animation: pulse 1.5s ease-in-out infinite;
            }
            
            @keyframes pulse {
                0% {
                    opacity: 1;
                    transform: scale(1);
                }
                50% {
                    opacity: 0.7;
                    transform: scale(1.1);
                }
                100% {
                    opacity: 1;
                    transform: scale(1);
                }
            }
            
            .service-status-text {
                font-weight: 400;
                transition: color 0.3s ease;
                font-size: 0.75rem;
            }
            
            /* 确保copyright内的元素正确对齐 */
            .copyright {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                flex-direction: row !important;
            }
            
            /* 覆盖footer-bar-left的column布局，让copyright和服务状态在同一行 */
            .footer-bar-left {
                flex-direction: row !important;
                align-items: center;
                flex-wrap: wrap;
            }
            
            @media (max-width: 768px) {
                .footer-service-status {
                    margin-left: 6px;
                }
                
                .service-status-indicator {
                    width: 4px;
                    height: 4px;
                }
                
                .service-status-text {
                    font-size: 0.7rem;
                }
                
                /* 移动端保持垂直布局 */
                .footer-bar-left {
                    flex-direction: column !important;
                    align-items: center;
                }
            }
        `;
        document.head.appendChild(style);
    }

    init() {
        // 等待DOM加载完成
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initStatus());
        } else {
            this.initStatus();
        }

        // Pjax兼容 - 页面更新时重新获取状态
        document.addEventListener('pjax:complete', () => this.initStatus());
    }

    initStatus() {
        const statusIndicator = document.getElementById('serviceStatusIndicator');
        const statusText = document.getElementById('serviceStatusText');
        
        if (!statusIndicator || !statusText) return;

        this.isInitialized = true;
        this.fetchServiceStatus();

        // 已移除定时刷新，以避免每60秒自动刷新
    }

    async fetchServiceStatus() {
        try {
            const servicesData = await this.getServicesData();
            if (servicesData && servicesData.length > 0) {
                this.updateStatus(servicesData);
            } else {
                this.updateStatus([]);
            }
        } catch (error) {
            console.error('获取服务状态失败:', error);
            // 错误时也显示加载中状态
            this.updateStatus([]);
        }
    }

    async getServicesData() {
        try {
            if (!this.statusPageUrl) {
                throw new Error('Status page URL not configured');
            }

            const response = await fetch(this.statusPageUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            // 检查heartbeatList数据结构
            if (!data.heartbeatList || Object.keys(data.heartbeatList).length === 0) {
                return [];
            }

            // 转换heartbeatList数据格式
            const services = Object.keys(data.heartbeatList).map(monitorId => {
                const heartbeats = data.heartbeatList[monitorId];
                
                // 获取最新的心跳状态
                const latestHeartbeat = heartbeats[heartbeats.length - 1];
                const status = latestHeartbeat ? latestHeartbeat.status : 0;
                const lastUpdateTime = latestHeartbeat ? latestHeartbeat.time : '';
                
                // 计算可用性（从uptimeList获取）
                const uptimeKey = `${monitorId}_24`;
                const uptime = data.uptimeList && data.uptimeList[uptimeKey] ? data.uptimeList[uptimeKey] : 0;
                
                return {
                    id: monitorId,
                    name: `服务 ${monitorId}`,
                    status: this.mapUptimeKumaStatus(status),
                    uptime: parseFloat(uptime || '0'),
                    url: `#${monitorId}`,
                    lastUpdateTime: lastUpdateTime
                };
            });

            return services;

        } catch (error) {
            console.error('获取服务数据失败:', error);
            throw error;
        }
    }

    mapUptimeKumaStatus(uptimeStatus) {
        // Uptime Kuma状态映射
        // 0: down, 1: up, 2: maintenance, 3: pending
        switch (uptimeStatus) {
            case 1:
                return 'normal';
            case 0:
                return 'error';
            case 2:
                return 'warning';
            case 3:
                return 'loading';
            default:
                return 'unknown';
        }
    }

    updateStatus(services) {
        const statusIndicator = document.getElementById('serviceStatusIndicator');
        const statusText = document.getElementById('serviceStatusText');
        const serviceStatusLink = document.querySelector('.footer-service-status');
        
        if (!statusIndicator || !statusText) {
            return;
        }

        if (services.length === 0) {
            statusIndicator.className = 'service-status-indicator status-loading';
            statusText.textContent = this.config.statusText.loading;
            if (serviceStatusLink) {
                serviceStatusLink.title = '查看项目状态';
            }
            return;
        }

        const totalServices = services.length;
        const normalServices = services.filter(s => s.status === 'normal').length;
        const warningServices = services.filter(s => s.status === 'warning').length;
        const errorServices = services.filter(s => s.status === 'error').length;

        let status = 'normal';
        let statusTextContent = '';

        if (errorServices > 0) {
            status = 'error';
            statusTextContent = `${errorServices}个服务异常`;
        } else if (warningServices > 0) {
            status = 'warning';
            statusTextContent = `${warningServices}个服务警告`;
        } else if (normalServices === totalServices) {
            status = 'normal';
            statusTextContent = '所有服务正常';
        } else {
            status = 'warning';
            statusTextContent = `${normalServices}/${totalServices}个服务正常`;
        }

        // 获取最新的更新时间
        const latestUpdateTime = this.getLatestUpdateTime(services);

        // 更新状态指示器和文本
        statusIndicator.className = `service-status-indicator status-${status}`;
        statusText.textContent = statusTextContent;
        
        // 更新title属性
        if (serviceStatusLink) {
            serviceStatusLink.title = `查看项目状态\n最后更新: ${latestUpdateTime}`;
        }
    }

    getLatestUpdateTime(services) {
        if (!services || services.length === 0) {
            return '未知';
        }

        // 获取所有服务的最新更新时间
        const updateTimes = services
            .map(service => service.lastUpdateTime)
            .filter(time => time) // 过滤掉空值
            .map(time => {
                // 解析时间并在API返回的基础上加8小时
                const apiTime = new Date(time);
                const adjustedTime = new Date(apiTime.getTime() + 8 * 60 * 60 * 1000);
                return adjustedTime;
            });

        if (updateTimes.length === 0) {
            return '未知';
        }

        // 找到最新的时间
        const latestTime = new Date(Math.max(...updateTimes));
        
        // 直接显示具体时间，不计算相对时间
        return latestTime.toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }
}

// 初始化
new ServiceStatus(); 

