require('../css/index.css');
require('../css/animate.css');
require('../css/public.css');
/* js */
var code = GetUrlParam('code');
var local = window.location.href;
if (code == null || code === '') {
    window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + window.APPID + '&redirect_uri=' + encodeURIComponent(local) + '&response_type=code&scope=snsapi_base&state=1#wechat_redirect'
} else {
    sendCode(code) //把code传给后台获取用户信息
}
function getUrlParam(name) { //封装方法
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}
function sendCode(c){
    console.log(c);
}