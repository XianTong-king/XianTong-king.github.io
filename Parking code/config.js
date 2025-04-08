// 配置文件
const config = {
    // 车主电话号码
    phone: '15303938986',
    
    // 微信推送配置
    wxPusher: {
        appToken: 'AT_2v9emg4yhivKpvb5JotlMtMNSgeh7w7A',
        uids: ['UID_TDUzXWSZzopLG93HWEXGMZLGKJZ7'],
        apiUrl: 'https://wxpusher.zjiecode.com/api/send/message'
    },
    
    // 通知相关配置
    notification: {
        cooldown: 120000, // 通知冷却时间（毫秒）
        defaultMessage: '需要挪车，请及时处理。' // 默认通知消息
    }
};

// 导出配置
window.config = config;