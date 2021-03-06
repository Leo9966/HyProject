function getServerHost() {

    const search = location.search.substr(1);
    const searchs = search.split("&");
    const params = {};
    for (const i in searchs) {
        const theParams = searchs[i].split("=");
        params[theParams[0]] = decodeURI(theParams[1]);
    }

    //  let onlineURL = "//ymymmall.swczyc.com"; // 线上地址
    //  let devURL = "//admin.swczyc.com/hyapi/ymmall"; // 后台地址
     let onlineURL = "//ymymmall.lvxingbox.cn"; // 线上地址
     let devURL = "//admin.lvxingbox.cn/hyapi/ymmall"; // 后台地址

    // let devURL = "//10.108.164.159:8080/hy_backend/ymmall"; // 后台地址

    if (/*/huiyan\.baidu\.com/.test(location.href) || */params.apitype == "online") {
        return onlineURL;
    } else {
        return devURL;
    }
}


function getServerIp() {
    return "//admin.lvxingbox.cn";
    // return "//ymymmall.swczyc.com";
}

const wxconfig = {
    appId: 'wxc636210b469ce7dc',
    appSecret: 'fc785c46f24105fa3a883e64a01fe2e9',
    redirectUri: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc636210b469ce7dc&redirect_uri=http://ymymmall.lvxingbox.cn&response_type=code&scope=snsapi_info&state=1#wechat_redirect',
    hostURL:'http://ymymmall.lvxingbox.cn/',
    adminURL:'//admin.lvxingbox.cn/hyapi',
    adminURLHttp:'http://admin.lvxingbox.cn/',
    // redirectUri: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc636210b469ce7dc&redirect_uri=http://ymymmall.swczyc.com&response_type=code&scope=snsapi_info&state=1#wechat_redirect',
    // hostURL:'http://ymymmall.swczyc.com/',
    // adminURL:'//admin.swczyc.com/hyapi',
    // adminURLHttp:'http://admin.swczyc.com/',

    
    // adminURL:'//10.108.164.159:8080/hy_backend',
};

export { getServerHost, getServerIp, wxconfig };
