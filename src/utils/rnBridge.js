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
          document.removeEventListener('message', fn);
          timeout && clearTimeout(timeout);
          resolve(rtObj.data);
        }
      };
      timeout = setTimeout(()=>{
        document.removeEventListener('message', fn);
        reject('超时！');
      }, 2000);
      document.addEventListener('message', fn);
      window.postMessage(postData);
    });
  }
  export function postData(data) {
    const postData = JSON.stringify(data);
    window.postMessage(postData);
  }
  export function listenData(data) {
    const obj = {};
    obj.begin = function(cb) {
      obj.fn = (event) => {
        const eventData = event.data;
        const rtObj = JSON.parse(eventData);
        const rtType = rtObj.type;
        const rtData = rtObj.data;
        cb(rtData);
      };
      document.addEventListener('message', obj.fn);
      window.postMessage(JSON.stringify(data));
    };
    obj.end = function() {
      document.removeEventListener('message', obj.fn);
    };
    return obj;
  }