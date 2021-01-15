//依當前環境取資料
let prvUrl = document.referrer;
let paraString = prvUrl.substring(prvUrl.indexOf("/")+1).split("/");
//console.log(paraString);
let nowEnv = paraString[2];

let getURL = window.document.location.hostname;
let currentUrl = window.document.location.pathname;
let currentString = currentUrl.substring(currentUrl.indexOf("/")+1).split("/");
let currentEnv = currentString[0].toString();
currentEnv = currentEnv.toLowerCase();
//console.log(currentEnv);

let timestamp = new Date().getTime();
let apiURL
if(nowEnv === "Web" || getURL === "123.123.123.123") {
  apiURL = "../json/prod.json?v=" + timestamp;
  console.log("Production Data");
} else if(nowEnv === "Test" || currentEnv === "test") {
  apiURL = "../json/test.json?v=" + timestamp;
  console.log("Staging Data");
} else {
  apiURL = "../json/dev.json?v=" + timestamp;
  console.log("Development Data");
}
//axios.get('../json/dev.json')
axios.get(apiURL)
.then(res => {
  const apInfo = res.data;
  const envPath = apInfo.envHost;
  // console.log(typeof(apInfo))

  this.setState({ apInfo, envPath })
}).catch(e => { console.error(e)});

$(function () {
  // var net = new ActiveXObject("WScript.NetWork");
  // var username = net.UserName;
  
  //如果使用IE，就執行Firefox檢查
  var userAgent = window.navigator.userAgent;
  var isIE = (userAgent.indexOf('MSIE') > 0) || (userAgent.indexOf('Trident/') > 0);
  if (isIE) {
    myActiveX();
    //console.log('這是IE，小心工作');
  } else {
    console.log('這不是IE，安心工作');
  }
});

//環境連結導向
let url = window.document.location.href;
        if(url.indexOf('?') !== -1) {
            let ary = url.split('?')[1].split('=');
            let env = ary[1].toString();
            env = env.toLowerCase();
            //console.log(env);
            switch (env) {
                case "prod":
                  console.log("正式環境");
                  break;
                case "test":
                  console.log("測試環境");
                  break;
                case "dev":
                  console.log("開發環境");
                  break;
                default:
                  return;
                  console.log("未指定");
            }
        }
        
//取網址字串參數
let getPara;
let aryStr = [];
let changeLowDate = '';
let changeHighDate = '';
let changeLot = '';
let pushUid = '';

const strUrl = location.search;
if (strUrl.indexOf("?") != -1) {
      let getSearch = strUrl.split("?");
      getPara = getSearch[1].split("&");
      
      for(i = 0; i <= getPara.length - 1; i++) {
        stringVal = getPara[i].split("=")[1];
        aryStr.push(stringVal);
        //console.log(aryStr);
      }
      changeLowDate = aryStr[0].split(",")[0];
      changeHighDate = aryStr[0].split(",")[1];
      changeLot = aryStr[1];
      pushUid = aryStr[2];
}

//當前連結環境檢查
let prvUrl = document.referrer;
let paraString = prvUrl.substring(prvUrl.indexOf("/")+1).split("/");
let nowEnv = paraString[2];
    
let getURL = window.document.location.hostname;
let currentUrl = window.document.location.pathname;
let currentString = currentUrl.substring(currentUrl.indexOf("/")+1).split("/");
let currentEnv = currentString[0].toString();
currentEnv = currentEnv.toLowerCase();
//console.log(currentEnv);

if(nowEnv === "Web" || getURL === "123.123.123.123") {
    console.log("Production Data");
} else if(nowEnv === "Test" || currentEnv === "test") {
    console.log("Staging Data");
} else {
    console.log("Development Data");
}

//取得menu物件 設定mouseEvent
function init(panelID) {
  const el = document.getElementById(panelID);
  el.onpointerleave = leaveHandler;
}
//傳送state給React 控制選單收闔
function leaveHandler(e) {
  window.changeComponentState({detailVisible: false});
};

//加入自訂的history
function pushHistory(pageName){
    var state = {
      title: pageName
    }
    window.history.pushState(state, pageName);
    console.log('push: ' + state.title);
}

//監聽瀏覽器返回鍵、後退、上一頁事件
window.onpopstate = function(e) {
    console.log("location: " + document.location + ", state: " + JSON.stringify(e.state));
    if(e.state === null) {
      concole.log('no Change');
    } else {
      console.log('go to:' + e.state.title);
    }
};

//監聽螢幕寬度
function windowResize() {
  let resizeTimer = null;

  $(window).resize(function() {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout("windowScreen()", 500);
  });
}
//判斷寬度
function windowScreen() {
    nowWidth = $(window).width();
    //console.log('目前寬度：' + nowWidth);
    if(nowWidth > PCModel) {
      console.log('PC model')
    } else if(nowWidth < PCModel && nowWidth > NBModel) {
      console.log('NB model')
    } else {
      console.log('Mobile model')
    }
}
