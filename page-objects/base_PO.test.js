export default class base_PO {
    open(path) {
     browser.url(path);
    }
    waitUsingFixedTimeOut(time) {
     console.log("paused for:"+time+"seconds");
     browser.pause(time);
    }
}