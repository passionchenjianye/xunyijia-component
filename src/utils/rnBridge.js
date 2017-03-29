export function getData(data) {
    const type = data.type;
    const postData = JSON.stringify(data);
    return new Promise((resolve, reject) => {
      let timeout;
      const fn = (event) => {
        const rtData = event.data;
        const rtObj = JSON.parse(rtData);
        const rtType = rtObj.type;
        if (type === rtType) {
          document && document.removeEventListener('message', fn);
          timeout && clearTimeout(timeout);
          resolve(rtObj.data);
        }
      };
      timeout = setTimeout(()=>{
        document && document.removeEventListener('message', fn);
        reject('超时！');
      }, 2000);
      document && document.addEventListener('message', fn);
      window && window.postMessage && window.postMessage(postData);
    });
  }
  export function postData(data) {
    const postData = JSON.stringify(data);
    window && window.postMessage && window.postMessage(postData);
  }
  export function listenData(data) {
    const obj = {};
    const sendObj = JSON.parse(data);
    const sendType = sendObj.type;
    obj.begin = function(cb) {
      obj.fn = (event) => {
        const eventData = event.data;
        const rtObj = JSON.parse(eventData);
        const rtType = rtObj.type;
        const rtData = rtObj.data;
        if (rtType === sendType) {
            cb(rtData);
        }
      };
      document && document.addEventListener('message', obj.fn);
      window && window.postMessage && window.postMessage(data);
    };
    obj.end = function() {
      document && document.removeEventListener('message', obj.fn);
    };
    return obj;
  }