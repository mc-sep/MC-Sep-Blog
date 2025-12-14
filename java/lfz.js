// 欢迎卡片配置
window.WELCOME_CONFIG = {
    API_KEY: 'kl7y1nygTMNJcSivnTCRY5dqHU', // API密钥
    BLOG_LOCATION: {
        lng: 113.367377, // 博主经度
        lat: 22.519786   // 博主纬度
    },
    CACHE_DURATION: 1000 * 60 * 60, // 缓存时间(1小时)
    HOME_PAGE_ONLY: true, // 是否只在首页显示
    SHOW_IP: true, // 是否显示IP地址
    SHOW_DISTANCE: true // 是否显示距离
};

// 初始化欢迎卡片
const initWelcomeCard = () => {
    // 检查是否在首页
    if (WELCOME_CONFIG.HOME_PAGE_ONLY && !isHomePage()) {
        return;
    }

    // 查找欢迎卡片容器
    const welcomeContainer = findWelcomeContainer();
    if (!welcomeContainer) return;

    // 添加样式
    addWelcomeStyles();

    // 显示加载状态
    showLoadingState(welcomeContainer);

    // 获取IP信息
    fetchIpInfo(welcomeContainer);
};

// 查找欢迎卡片容器
const findWelcomeContainer = () => {
    // 查找现有的欢迎信息容器
    const welcomeInfo = document.getElementById('welcome-info');

    if (!welcomeInfo) {
        console.log('未找到欢迎信息容器');
        return null;
    }

    return welcomeInfo;
};

// 添加欢迎卡片样式
const addWelcomeStyles = () => {
    if (document.getElementById('welcome-card-styles')) return;

    const style = document.createElement('style');
    style.id = 'welcome-card-styles';
    style.textContent = `
        .card-welcome {
            border-radius: var(--radius);
            transition: all .3s;
            overflow: hidden;
            background: var(--efu-card-bg);
            box-shadow: var(--efu-shadow-black);
            border: var(--style-border);
            user-select: none;
        }
        
        .card-welcome .item-headline i {
            color: #ff4757;
        }
        
        .welcome-original {
            margin-bottom: 20px;
            line-height: 1.8;
            color: var(--efu-fontcolor);
        }

        card-widget {
          padding: 10px!important;
         }

        .welcome-original a {
            color: var(--efu-main);
            text-decoration: none;
        }
                        kbd {
            display: inline-block;
            color: #666;
            font: bold 9pt arial;
            text-decoration: none;
            text-align: center;
            padding: 2px 5px;
            margin: 0 5px;
            background: #eff0f2;
            -moz-border-radius: 4px;
            border-radius: 4px;
            border-top: 1px solid #f5f5f5;
            -webkit-box-shadow: inset 0 0 20px #e8e8e8, 0 1px 0 #c3c3c3, 0 1px 0 #c9c9c9, 0 1px 2px #333;
            -moz-box-shadow: inset 0 0 20px #e8e8e8, 0 1px 0 #c3c3c3, 0 1px 0 #c9c9c9, 0 1px 2px #333;
            -webkit-box-shadow: inset 0 0 20px #e8e8e8, 0 1px 0 #c3c3c3, 0 1px 0 #c9c9c9, 0 1px 2px #333;
            -webkit-box-shadow: inset 0 0 20px #e8e8e8, 0 1px 0 #c3c3c3, 0 1px 0 #c9c9c9, 0 1px 2px #333;
            box-shadow: inset 0 0 20px #e8e8e8, 0 1px 0 #c3c3c3, 0 1px 0 #c9c9c9, 0 1px 2px #333;
            text-shadow: 0 1px 0 #f5f5f5;
        }
        .welcome-original a:hover {
            text-decoration: underline;
        }
        
        .welcome-ip-info {
            margin-top: 15px;
        }
        
        .ip-info-container {
            background: #f0f2f5;
            border-radius: 8px;
            padding: 15px;
            text-align: center;
            line-height: 1.8;
            color: var(--efu-fontcolor);
            margin-top: 15px;
        }
        
        [data-theme=dark] .ip-info-container {
            background: #2a2d31;
        }
        
        .ip-info-container b {
            color: var(--efu-main);
            font-weight: 600;
        }
        
        .ip-info-container .location {
            font-size: 16px;
            margin-bottom: 8px;
        }
        
        .ip-info-container .distance {
            font-size: 14px;
            margin-bottom: 8px;
            opacity: 0.8;
        }
        
        .ip-info-container .ip-address {
            font-size: 14px;
            margin-bottom: 12px;
        }
        
        .ip-info-container .ip-address .ip-blur {
            filter: blur(3px);
            transition: filter 0.3s ease;
            cursor: pointer;
            color: var(--efu-main);
        }
        
        .ip-info-container .ip-address .ip-blur:hover {
            filter: blur(0);
        }
        
        .ip-info-container .time-greeting {
            font-size: 14px;
            margin-bottom: 12px;
        }
        
        .ip-info-container .greeting-tip {
            font-size: 13px;
            opacity: 0.8;
            line-height: 1.6;
        }
        
        .ip-info-container .greeting-tip .tip-content {
            color: var(--efu-main);
        }
        
        .loading-spinner {
            width: 40px;
            height: 40px;
            border: 3px solid var(--efu-card-border);
            border-radius: 50%;
            border-top: 3px solid var(--efu-main);
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .error-message {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            color: var(--efu-red);
        }
        
        .error-icon {
            font-size: 2.5rem;
            opacity: 0.7;
        }
        
        .error-text {
            font-size: 14px;
            text-align: center;
        }
        
        .retry-button {
            color: var(--efu-main);
            cursor: pointer;
            transition: transform 0.3s ease;
            font-size: 16px;
        }
        
        .retry-button:hover {
            transform: rotate(180deg);
        }
        
        .permission-dialog {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }
        
        .permission-dialog button {
            margin: 5px;
            padding: 8px 16px;
            border: none;
            border-radius: 6px;
            background: var(--efu-main);
            color: var(--efu-white);
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 14px;
        }
        
        .permission-dialog button:hover {
            opacity: 0.8;
            transform: translateY(-1px);
        }
        
        .permission-dialog button[data-action="deny"] {
            background: var(--efu-gray);
        }
    `;
    document.head.appendChild(style);
};

// 显示加载状态
const showLoadingState = (container) => {
    container.innerHTML = '<div class="loading-spinner"></div>';
};

// 获取IP信息
const fetchIpInfo = async (container) => {
    try {
        // 检查缓存
        const cachedData = getCachedIpInfo();
        if (cachedData) {
            showWelcomeInfo(container, cachedData);
            return;
        }

        // 检查位置权限
        if (!checkLocationPermission()) {
            showPermissionDialog(container);
            return;
        }

        // 请求API
        const response = await fetch(`https://api.nsmao.net/api/ipip/query?key=${WELCOME_CONFIG.API_KEY}`);
        if (!response.ok) {
            throw new Error('网络请求失败');
        }

        const data = await response.json();

        // 缓存数据
        cacheIpInfo(data);

        // 显示欢迎信息
        showWelcomeInfo(container, data);

    } catch (error) {
        console.error('获取IP信息失败:', error);
        showErrorMessage(container);
    }
};

// 显示欢迎信息
const showWelcomeInfo = (container, data) => {
    if (!data || !data.data) {
        showErrorMessage(container);
        return;
    }

    const ipData = data.data;
    const ip = data.ip;

    // 计算距离
    const distance = WELCOME_CONFIG.SHOW_DISTANCE ?
        calculateDistance(ipData.lng, ipData.lat) : 0;

    // 格式化位置信息
    const location = formatLocation(ipData.country, ipData.province, ipData.city);

    // 格式化IP地址
    const ipDisplay = WELCOME_CONFIG.SHOW_IP ? formatIpDisplay(ip) : '';

    // 获取问候语
    const greeting = getGreeting(ipData.country, ipData.province, ipData.city);
    const timeGreeting = getTimeGreeting();

    // 生成IP信息HTML，保留原来的欢迎文本
    const ipInfoHTML = `
        <div class="ip-info-container">
            <div class="location">
                欢迎来自 <b>${location}</b> 的小友 💖
            </div>
            ${distance > 0 ? `<div class="distance">当前位置距博主约 <b>${distance}</b> 公里</div>` : ''}
            ${ipDisplay ? `<div class="ip-address">${ipDisplay}</div>` : ''}
            <div class="time-greeting">${timeGreeting}</div>
            <div class="greeting-tip">Tip：<span class="tip-content">${greeting} 🍂</span></div>
        </div>
    `;

    // 将IP信息添加到容器中，而不是替换整个内容
    container.innerHTML = ipInfoHTML;
};

// 计算距离
const calculateDistance = (lng, lat) => {
    if (!lng || !lat) return 0;

    const R = 6371; // 地球半径(km)
    const rad = Math.PI / 180;
    const dLat = (lat - WELCOME_CONFIG.BLOG_LOCATION.lat) * rad;
    const dLon = (lng - WELCOME_CONFIG.BLOG_LOCATION.lng) * rad;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(WELCOME_CONFIG.BLOG_LOCATION.lat * rad) * Math.cos(lat * rad) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
};

// 格式化位置信息
const formatLocation = (country, province, city) => {
    if (!country) return '神秘地区';
    if (country === "中国") {
        if (province && city) {
            return `${province} ${city}`;
        } else if (province) {
            return province;
        } else {
            return '中国';
        }
    }
    return country;
};

// 格式化IP地址
const formatIpDisplay = (ip) => {
    if (!ip) return '';
    const ipText = ip.includes(":") ? "IPv6地址 (好复杂，咱看不懂~)" : ip;
    return `您的IP地址：<span class="ip-blur">${ipText}</span>`;
};

// 获取问候语
const getGreeting = (country, province, city) => {
    const greetings = {
        "中国": {
            "北京市": "北——京——欢迎你~~~",
            "天津市": "讲段相声吧",
            "河北省": "山势巍巍成壁垒，天下雄关铁马金戈由此向，无限江山",
            "山西省": "展开坐具长三尺，已占山河五百余",
            "内蒙古自治区": "天苍苍，野茫茫，风吹草低见牛羊",
            "辽宁省": "我想吃烤鸡架！",
            "吉林省": "状元阁就是东北烧烤之王",
            "黑龙江省": "很喜欢哈尔滨大剧院",
            "上海市": "众所周知，中国只有两个城市",
            "江苏省": {
                "南京市": "这是我挺想去的城市啦",
                "苏州市": "上有天堂，下有苏杭",
                "其他": "散装是必须要散装的"
            },
            "浙江省": {
                "杭州市": "东风渐绿西湖柳，雁已还人未南归",
                "其他": "望海楼明照曙霞,护江堤白蹋晴沙"
            },
            "河南省": {
                "郑州市": "豫州之域，天地之中",
                "信阳市": "品信阳毛尖，悟人间芳华",
                "南阳市": "臣本布衣，躬耕于南阳此南阳非彼南阳！",
                "驻马店市": "峰峰有奇石，石石挟仙气嵖岈山的花很美哦！",
                "开封市": "刚正不阿包青天",
                "洛阳市": "洛阳牡丹甲天下",
                "其他": "可否带我品尝河南烩面啦？"
            },
            "安徽省": "蚌埠住了，芜湖起飞",
            "福建省": "井邑白云间，岩城远带山",
            "江西省": "落霞与孤鹜齐飞，秋水共长天一色",
            "山东省": "遥望齐州九点烟，一泓海水杯中泻",
            "湖北省": {
                "黄冈市": "红安将军县！辈出将才！",
                "其他": "来碗热干面~"
            },
            "湖南省": "74751，长沙斯塔克",
            "广东省": {
                "广州市": "看小蛮腰，喝早茶了嘛~",
                "深圳市": "今天你逛商场了嘛~",
                "阳江市": "阳春合水！博主家乡~ 欢迎来玩~",
                "其他": "来两斤福建人~"
            },
            "广西壮族自治区": "桂林山水甲天下",
            "海南省": "朝观日出逐白浪，夕看云起收霞光",
            "四川省": "康康川妹子",
            "贵州省": "茅台，学生，再塞200",
            "云南省": "玉龙飞舞云缠绕，万仞冰川直耸天",
            "西藏自治区": "躺在茫茫草原上，仰望蓝天",
            "陕西省": "来份臊子面加馍",
            "甘肃省": "羌笛何须怨杨柳，春风不度玉门关",
            "青海省": "牛肉干和老酸奶都好好吃",
            "宁夏回族自治区": "大漠孤烟直，长河落日圆",
            "新疆维吾尔自治区": "驼铃古道丝绸路，胡马犹闻唐汉风",
            "台湾省": "我在这头，大陆在那头",
            "香港特别行政区": "永定贼有残留地鬼嚎，迎击光非岁玉",
            "澳门特别行政区": "性感荷官，在线发牌",
            "其他": "带我去你的城市逛逛吧！"
        },
        "美国": "Let us live in peace!",
        "日本": "よろしく、一緒に桜を見ませんか",
        "俄罗斯": "干了这瓶伏特加！",
        "法国": "C'est La Vie",
        "德国": "Die Zeit verging im Fluge.",
        "澳大利亚": "一起去大堡礁吧！",
        "加拿大": "拾起一片枫叶赠予你",
        "其他": "带我去你的国家逛逛吧"
    };

    if (!country) return greetings["其他"];

    const countryGreeting = greetings[country] || greetings["其他"];
    if (typeof countryGreeting === 'string') {
        return countryGreeting;
    }

    if (province) {
        const provinceGreeting = countryGreeting[province] || countryGreeting["其他"];
        if (typeof provinceGreeting === 'string') {
            return provinceGreeting;
        }

        if (city) {
            return provinceGreeting[city] || provinceGreeting["其他"] || countryGreeting["其他"];
        }
        return provinceGreeting["其他"] || countryGreeting["其他"];
    }

    return countryGreeting["其他"] || greetings["其他"];
};

// 获取时间问候语
const getTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 11) return "🌤️ 早上好，一日之计在于晨";
    if (hour < 13) return "☀️ 中午好，记得午休喔~";
    if (hour < 17) return "🕞 下午好，饮茶先啦！";
    if (hour < 19) return "🚶‍♂️ 即将下班，记得按时吃饭~";
    return "🌙 晚上好，夜生活嗨起来！";
};

// 显示错误信息
const showErrorMessage = (container) => {
    container.innerHTML = `
        <div class="error-message">
            <div class="error-icon">😕</div>
            <div class="error-text">抱歉，无法获取信息</div>
            <div class="error-text">请<i class="retry-button solitude fas fa-arrows-rotate" onclick="retryFetchIpInfo()"></i>重试或检查网络连接</div>
        </div>
    `;
};

// 显示权限对话框
const showPermissionDialog = (container) => {
    container.innerHTML = `
        <div class="permission-dialog">
            <div class="error-icon">❓</div>
            <div class="error-text">是否允许访问您的位置信息？</div>
            <div>
                <button data-action="allow" onclick="handleLocationPermission('granted')">允许</button>
                <button data-action="deny" onclick="handleLocationPermission('denied')">拒绝</button>
            </div>
        </div>
    `;
};

// 处理位置权限
const handleLocationPermission = (permission) => {
    localStorage.setItem('locationPermission', permission);
    if (permission === 'granted') {
        const container = document.getElementById('welcome-info');
        if (container) {
            showLoadingState(container);
            fetchIpInfo(container);
        }
    } else {
        const container = document.getElementById('welcome-info');
        if (container) {
            container.innerHTML = `
                <div class="error-message">
                    <div class="error-icon">🔒</div>
                    <div class="error-text">您已拒绝访问位置信息</div>
                </div>
            `;
        }
    }
};

// 检查位置权限
const checkLocationPermission = () => {
    return localStorage.getItem('locationPermission') === 'granted';
};

// 缓存相关函数
const getCachedIpInfo = () => {
    const cached = localStorage.getItem('ip_info_cache');
    if (!cached) return null;

    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp > WELCOME_CONFIG.CACHE_DURATION) {
        localStorage.removeItem('ip_info_cache');
        return null;
    }
    return data;
};

const cacheIpInfo = (data) => {
    localStorage.setItem('ip_info_cache', JSON.stringify({
        data,
        timestamp: Date.now()
    }));
};

// 重试获取IP信息
const retryFetchIpInfo = () => {
    const container = document.getElementById('welcome-info');
    if (container) {
        showLoadingState(container);
        fetchIpInfo(container);
    }
};

// 检查是否为首页
const isHomePage = () => {
    return window.location.pathname === '/' || window.location.pathname === '/index.html';
};

// 初始化
document.addEventListener('DOMContentLoaded', initWelcomeCard);
document.addEventListener('pjax:complete', initWelcomeCard);