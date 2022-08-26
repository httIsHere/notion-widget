/*
 * @Author: your name
 * @Date: 2022-01-04 13:38:18
 * @LastEditTime: 2022-08-26 15:41:30
 * @LastEditors: TinaHuang0183 Tina.Huang@splashtop.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /notion/lib/global.js
 */
// document.write("<script type='text/javascript' src='../lib/crypto-js.min.js'></script>");

function getQueryString(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return decodeURIComponent(r[2]);
  }
  return null;
}

// 设置暗色主题属性
function handleDarkMode(params) {
  let dd = getQueryString("dd") || params.black;
  if (dd === 1 || dd === "1") {
    document.getElementsByTagName("html")[0].setAttribute("theme", "dark");
  }
}


// 加密密钥（长度必须是 16 的整数倍，此处为 32 位）
const secretKey = "httishere9607281";

/**
 * ASE解密
 * @description 使用加密秘钥，对 需要解密的参数 进行解密
 * @param {string} encryptedWord - 需要解密的参数
 * @param {string} key - 加密密钥（长度必须是 16 的整数倍）
 * @param {string} offset - 偏移量
 */
function aesDecryptParams(CryptoJS, encryptedWord, key = secretKey) {
  const { enc, mode, AES, pad } = CryptoJS;
  key = enc.Utf8.parse(key);
  let udata = AES.decrypt(encryptedWord, key, {
    mode: mode.ECB,
    padding: pad.Pkcs7,
  });
  let decrypted = udata.toString(enc.Utf8); // 返回的是加密之前的原始数据,是字符串类型
  return decrypted;
}

function getAllParams(CryptoJS) {
  const p = getQueryString("e");
  if(p) {
    let params = aesDecryptParams(CryptoJS, p);
    return JSON.parse(params);
  }
  return {}
}