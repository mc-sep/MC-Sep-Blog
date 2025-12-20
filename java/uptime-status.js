class UptimeStatus {
    constructor() {
        this.isInitialized = false;
        this.apiKey = 'ur3220585-91688fe5868046d629e37879';//���api��Կ
        this.apiUrl = 'https://api.uptimerobot.com/v2/getMonitors';
        this.config = {
            statusText: {
                normal: '����',
                warning: '�쳣',
                error: '����',
                loading: '�����...',
                unknown: 'δ֪',
                noApi: 'δ����API',
                apiError: 'API����',
                networkError: '�������',
                noService: '�޼�ط���'
            }
        };
        this.init();
    }

    init() {
        // �ȴ�DOM�������
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initStatus());
        } else {
            this.initStatus();
        }

        // Pjax����
        document.addEventListener('pjax:complete', () => this.initStatus());
    }

    initStatus() {
        const uptimeCard = document.querySelector('.uptime-dashboard');
        if (!uptimeCard) return;

        this.isInitialized = true;
        this.fetchServices();

        // ���ö�ʱˢ��
        setInterval(() => {
            if (this.isInitialized) {
                this.fetchServices();
            }
        }, 30000); // 30��ˢ��һ��
    }

    async fetchServices() {
        try {
            // ��ȡ�����б���״̬
            const servicesData = await this.getServicesData();
            if (servicesData && servicesData.length > 0) {
                this.renderServices(servicesData);
                this.updateSummary(servicesData);
            } else {
                console.warn('API���صķ�������Ϊ��');
                this.renderServices(this.getDefaultServices());
                this.updateSummary([]);
            }
        } catch (error) {
            console.error('��ȡ����״̬ʧ��:', error);
            this.renderServices(this.getDefaultServices());
            this.updateSummary([]);
        }
    }

    async getServicesData() {
        try {
            console.log('���ڵ���UptimeRobot API...');

            // ʹ�����û��ṩ�Ĵ�����ͬ������ʽ
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

            console.log('API��Ӧ״̬:', response.status);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('API��������:', data);

            if (data.stat !== 'ok') {
                throw new Error(`API error: ${data.error?.message || 'Unknown error'}`);
            }

            if (!data.monitors || data.monitors.length === 0) {
                console.warn('API���ص�monitors����Ϊ��');
                return [];
            }

            // ת��UptimeRobot���ݸ�ʽ
            const services = data.monitors.map(monitor => ({
                id: monitor.id,
                name: monitor.friendly_name,
                status: this.mapUptimeStatus(monitor.status),
                uptime: parseFloat(monitor.all_time_uptime_ratio || '0'),
                url: monitor.url
            }));

            console.log('ת����ķ�������:', services);
            return services;

        } catch (error) {
            console.error('UptimeRobot API����ʧ��:', error);
            throw error;
        }
    }

    mapUptimeStatus(uptimeStatus) {
        // UptimeRobot״̬ӳ��
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
                name: '���ڻ�ȡ����״̬...',
                status: 'loading',
                uptime: 0,
                url: '#'
            }
        ];
    }

    renderServices(services) {
        const container = document.getElementById('uptimeServices');
        if (!container) return;

        console.log('��Ⱦ��������:', services);

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
            summaryElement.innerHTML = '<span class="summary-text">�޼�ط���</span>';
            return;
        }

        const totalServices = services.length;
        const normalServices = services.filter(s => s.status === 'normal').length;
        const warningServices = services.filter(s => s.status === 'warning').length;
        const errorServices = services.filter(s => s.status === 'error').length;

        let summaryText = '';
        if (errorServices > 0) {
            summaryText = `${errorServices}�������쳣`;
        } else if (warningServices > 0) {
            summaryText = `${warningServices}�����񾯸�`;
        } else if (normalServices === totalServices) {
            summaryText = '���з�������';
        } else {
            summaryText = `${normalServices}/${totalServices}����������`;
        }

        summaryElement.innerHTML = `<span class="summary-text">${summaryText}</span>`;
    }

    getStatusText(status) {
        const statusMap = this.config.statusText;
        return statusMap[status] || statusMap.unknown;
    }
}

// ��ʼ��
new UptimeStatus(); 