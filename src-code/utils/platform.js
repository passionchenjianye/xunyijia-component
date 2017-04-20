export default function() {
  const platform = {};
  platform.os = "web";

  platform.ios = false;

  platform.android = false;

  platform.iphone = false;

  platform.ipad = false;

  platform.phone = false;

  platform.osVersion = "";

  // 获取设备信息
  const ua = navigator.userAgent;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
  const ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
  const windowPhone = ua.match(/(Windows\sPhone)\s([\d_]+)/);
  platform.ios = platform.android = platform.iphone = platform.ipad = false;
  // Android
  if (android) {
    platform.os = 'android';
    platform.android = true;
  }
  // iOS
  if (ipad || iphone || ipod) {
    platform.os = 'ios';
    platform.ios = true;
  }

  if (iphone && !ipod) {
    platform.osVersion = iphone[2].replace(/_/g, '.');
    platform.iphone = true;
  }
  if (ipad) {
    platform.osVersion = ipad[2].replace(/_/g, '.');
    platform.ipad = true;
  }
  if (ipod) {
    platform.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
    platform.iphone = true;
  }
  // iOS 8+ changed UA
  if (platform.ios && platform.osVersion && ua.indexOf('Version/') >= 0) {
    if (platform.osVersion.split('.')[0] === '10') {
      platform.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
    }
  }
  // 本地开发 platform.os = web
  // platform.os = "web";
  if (platform.iphone || platform.android || windowPhone || ipad) {
    platform.phone = true;
  }
  return platform.phone;
}
