class UptimeStatus {
    constructor() {
        this.isInitialized = false;
        this.apiKey = 'ur3220585-91688fe5868046d629e37879';//你的api密钥
        this.apiUrl = 'https://api.uptimerobot.com/v2/getMonitors';
        this.config = {
            statusText: {
                normal: '正常',
                warning: '异常',
                error: '故障',
                loading: '检查中...',
                unknown: '未知',
                noApi: '未配置API',
                apiError: 'API错误',
                networkError: '网络错误',
                noService: '无监控服务'
            }
        };
        this.init();
    }

    init() {
        // 等待DOM加载完成
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initStatus());
        } else {
            this.initStatus();
        }

        // Pjax兼容
        document.addEventListener('pjax:complete', () => this.initStatus());
    }

    initStatus() {
        const uptimeCard = document.querySelector('.uptime-dashboard');
        if (!uptimeCard) return;

        this.isInitialized = true;
        this.fetchServices();

        // 设置定时刷新
        setInterval(() => {
            if (this.isInitialized) {
                this.fetchServices();
            }
        }, 30000); // 30秒刷新一次
    }

    async fetchServices() {
        try {
            // 获取服务列表和状态
            const servicesData = await this.getServicesData();
            if (servicesData && servicesData.length > 0) {
                this.renderServices(servicesData);
                this.updateSummary(servicesData);
            } else {
                console.warn('API返回的服务数据为空');
                this.renderServices(this.getDefaultServices());
                this.updateSummary([]);
            }
        } catch (error) {
            console.error('获取服务状态失败:', error);
            this.renderServices(this.getDefaultServices());
            this.updateSummary([]);
        }
    }

    async getServicesData() {
        try {
            console.log('正在调用UptimeRobot API...');

            // 使用与用户提供的代码相同的请求方式
            const requestData = {
                api_key: this.apiKey,
                format: "json",
                logs: 1
            };

            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            });

            console.log('API响应状态:', response.status);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('API返回数据:', data);

            if (data.stat !== 'ok') {
                throw new Error(`API error: ${data.error?.message || 'Unknown error'}`);
            }

            if (!data.monitors || data.monitors.length === 0) {
                console.warn('API返回的monitors数组为空');
                return [];
            }

            // 转换UptimeRobot数据格式
            const services = data.monitors.map(monitor => ({
                id: monitor.id,
                name: monitor.friendly_name,
                status: this.mapUptimeStatus(monitor.status),
                uptime: parseFloat(monitor.all_time_uptime_ratio || '0'),
                url: monitor.url
            }));

            console.log('转换后的服务数据:', services);
            return services;

        } catch (error) {
            console.error('UptimeRobot API调用失败:', error);
            throw error;
        }
    }

    mapUptimeStatus(uptimeStatus) {
        // UptimeRobot状态映射
        // 0: paused, 1: not checked yet, 2: up, 8: seems down, 9: down
        switch (uptimeStatus) {
            case 2:
                return 'normal';
            case 8:
                return 'warning';
            case 9:
                return 'error';
            case 0:
                return 'unknown';
            default:
                return 'loading';
        }
    }

    getDefaultServices() {
        return [
            {
                id: 'default',
                name: '正在获取服务状态...',
                status: 'loading',
                uptime: 0,
                url: '#'
            }
        ];
    }

    renderServices(services) {
        const container = document.getElementById('uptimeServices');
        if (!container) return;

        console.log('渲染服务数据:', services);

        container.innerHTML = services.map(service => `
            <div class="service-item" data-service="${service.id}">
                <div class="service-name">${service.name}</div>
                <div class="service-status">
                    <span class="status-indicator status-${service.status}"></span>
                    <span class="status-text">${this.getStatusText(service.status)}</span>
                </div>
            </div>
        `).join('');
    }

    updateSummary(services) {
        const summaryElement = document.getElementById('uptimeSummary');
        if (!summaryElement) return;

        if (services.length === 0) {
            summaryElement.innerHTML = '<span class="summary-text">无监控服务</span>';
            return;
        }

        const totalServices = services.length;
        const normalServices = services.filter(s => s.status === 'normal').length;
        const warningServices = services.filter(s => s.status === 'warning').length;
        const errorServices = services.filter(s => s.status === 'error').length;

        let summaryText = '';
        if (errorServices > 0) {
            summaryText = `${errorServices}个服务异常`;
        } else if (warningServices > 0) {
            summaryText = `${warningServices}个服务警告`;
        } else if (normalServices === totalServices) {
            summaryText = '所有服务正常';
        } else {
            summaryText = `${normalServices}/${totalServices}个服务正常`;
        }

        summaryElement.innerHTML = `<span class="summary-text">${summaryText}</span>`;
    }

    getStatusText(status) {
        const statusMap = this.config.statusText;
        return statusMap[status] || statusMap.unknown;
    }
}

// 初始化
new UptimeStatus(); 