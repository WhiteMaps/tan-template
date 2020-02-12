
/*MD5加密处理 需要安装：js-md5*/
export const MD5 = require('js-md5');
export  function  getMD5(str) {
  return MD5(str+'tanko')
}
/*base64加密处理*/
export  function getBase64(str) {
  return MD5.base64(str);
}


/*uuid随机数*/
export function  guid() {
  function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  }
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

//对象插入功能
export  const objInsert = (objSource,objInsert)=>{
  if(objInsert){
    let sourceArr = Object.keys(objSource);
    let insertArr = Object.keys(objInsert);

    for (let i =0 ;i <insertArr.length ; i++){
      objSource[sourceArr+i] = insertArr[i]
    }
  }
  return objSource
};

/* 上传图像审核 */
import Vue from 'vue';
export const uploadFileReview = (file)=>{
  var index = file.name.lastIndexOf(".");
  var  suffix = file.name.substr(index+1).toLowerCase();
  const isLt2M = file.size / 1024 / 1024 < 3;
  //图片上传审核
  if(suffix !== "bmp" && suffix !=="png" && suffix !== "gif" && suffix !== "jpg" && suffix !== "jpeg" &&
    suffix !== "BMP" && suffix !=="PNG" && suffix !== "GIF" && suffix !== "JPG" && suffix !== "JPEG") {
    Vue.prototype.$message.error('无法上传，文件非图像格式！');
    return false;
  }else if (!isLt2M) {
    /*文件大小审核*/
    Vue.prototype.$message.error('无法上传，文件超过3M！');
    return false;
  }else {
    return true;
  }
};

/* 对象内容置空 */
export const emptyObject = (obj)=>{
  Object.keys(obj).forEach(key => obj[key]= '');
};

//获取小数点
export const getPointNum = (num,n)=>{
  let str = String(num);
  let index = str.indexOf(".");
  let str1 = str.substring(0,index+n+1);
  return parseFloat(str1);
};

