/*
 * @Author: Tina Huang
 * @Date: 2022-01-04 13:38:18
 * @LastEditTime: 2024-05-01 22:16:19
 * @LastEditors: HTT httishere0728@gmail.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /notion/lib/global.js?v=20240313
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

function getAllQueryParams() {
  // 创建一个URLSearchParams实例
  const urlSearchParams = new URLSearchParams(window.location.search);
  // 把键值对列表转换为一个对象
  const params = Object.fromEntries(urlSearchParams.entries());
  console.log(params)
  return params
}

// ? 设置暗色主题属性

function getDarkMode() {
  let win_dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (win_dark) {
    document.getElementsByTagName("html")[0].setAttribute("theme", "dark");
  }
}

function handleDarkMode(params = { black: false }) {
  let dd = getQueryString("dd") || (params.black?1:0);
  if (dd === 1 || dd === "1") {
    document.getElementsByTagName("html")[0].setAttribute("theme", "dark");
  }
}

// ! 加密密钥（长度必须是 16 的整数倍，此处为 32 位）
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
  const others = getAllQueryParams();
  const auth = getQueryString("auth");
  if (p) {
    let params = aesDecryptParams(CryptoJS, p);
    return {...JSON.parse(params), ...others};
  } else if (auth === 'httflowus') {
    console.log('flowus auth')
    return others
  }
  return {};
}

function getStartSunday(params) {
  let s_sunday = params.hasOwnProperty("monday") && !params.monday;
  let start_param = getQueryString("sw") || s_sunday;
  return start_param;
}

// 特殊字体数字
function getSpecialNums(
  num,
  NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
) {
  let nums = [];
  while (num) {
    let num1 = num % 10;
    num = parseInt(num / 10);
    nums.push(NUMBERS[num1]);
  }
  nums = nums.reverse().join("");
  return nums;
}

// 将hex颜色转成rgb
function hexToRgba(hex, opacity = 1) {
  if(hex.indexOf('#') < 0) hex = `#${hex}`;
  var RGBA =
    "rgba(" +
    parseInt("0x" + hex.slice(1, 3)) +
    "," +
    parseInt("0x" + hex.slice(3, 5)) +
    "," +
    parseInt("0x" + hex.slice(5, 7)) +
    "," +
    opacity +
    ")";
  return {
    red: parseInt("0x" + hex.slice(1, 3)),
    green: parseInt("0x" + hex.slice(3, 5)),
    blue: parseInt("0x" + hex.slice(5, 7)),
    rgba: RGBA,
  };
}

// 将rgb颜色转成hex
function colorRGB2Hex(color) {
  var rgb = color.split(",");
  var r = parseInt(rgb[0].split("(")[1]);
  var g = parseInt(rgb[1]);
  var b = parseInt(rgb[2].split(")")[0]);

  var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return hex;
}

// 自动添加水印

function addWatermark() {
  const name = "✨ Powered by <a href='https://httishere.github.io/widverse-site' style='color: #888F47'>Widverse·汪汪汪世界</a>";
  const watermark = document.createElement("div");
  watermark.style =
    "text-align: center; color: gray; padding-top: 10px; font-size: 10px;";
  watermark.innerHTML = `${name}`;
  document.body.append(watermark);
}

function getNoWatermark(params = { vv: false }) {
  const noWatermark = getQueryString("vv") || params.vv;
  return noWatermark || null;
}

window.addEventListener("load", function () {
  if(!getNoWatermark()) {
    addWatermark();
  }
  // getDarkMode();
});
