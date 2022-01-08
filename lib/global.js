/*
 * @Author: your name
 * @Date: 2022-01-04 13:38:18
 * @LastEditTime: 2022-01-08 15:34:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /notion/lib/global.js
 */

function getQueryString(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return decodeURIComponent(r[2]);
  }
  return null;
}

// 设置暗色主题属性
function handleDarkMode() {
  let dd = getQueryString('dd');
  if(dd && dd === '1') {
      document.getElementsByTagName('html')[0].setAttribute('theme', 'dark')
  }
}
handleDarkMode();