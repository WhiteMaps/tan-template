//获取当前时间 XXXX年XX月XX日XX：XX
export  const getTime = (timeStr)=> {
  let timeStamp = timeStr || new Date();
  let year = new Date(timeStamp).getFullYear();
  let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
  let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
  let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
  let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
  let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
  return year + "-" + month + "-" + date +" "+hh+":"+mm+":"+ss;
};

/*时间格式化1   如20190320234035 -> 2019-03-20 23:40:35*/
export const timeFormat1 = (timeStr)=>{
  if(timeStr!=null){
    /*let dateMat= new Date(parseInt(daterc.replace("/Date(", "").replace(")/", ""), 10));*/
    let dateMat= new Date(parseInt(timeStr));
    let year = dateMat.getFullYear();
    let month = dateMat.getMonth() + 1;
    let day = dateMat.getDate();
    let hh = dateMat.getHours();
    let mm = dateMat.getMinutes();
    let ss = dateMat.getSeconds();
    let timeFormat= year + "-" + month + "-" + day + " " + hh + ":" + mm + ":" + ss;
    return timeFormat;
  }else {
    console.warn("当前输入的时间为空，timeStr："+timeStr);
    return false;
  }
};
/*时间格式化2  如(DateTime)2019-03-20T14:30:12.000Z -> 2019-03-20*/
export const timeFormat2 = (timeStr)=>{
  if(timeStr!=null){
    let newtime = new Date(timeStr.replace("/Date(", "").replace(")/" , "").split( "+")[0]);
    return newtime.getFullYear() + "-" + ((newtime.getMonth() + 1) < 10 ? "0" +
      (newtime.getMonth() + 1):(newtime.getMonth() + 1))+ "-" +
      (newtime.getDate() < 10 ? "0" + newtime.getDate():newtime.getDate());
    // + " " + (newtime.getHours()<10?"0"+newtime.getHours():newtime.getHours())
    // + ":" + (newtime.getMinutes()<10?"0"+newtime.getMinutes():newtime.getMinutes())
    // + ":" + (newtime.getSeconds()<10?"0"+newtime.getSeconds():newtime.getSeconds());
  }else {
    console.warn("当前输入的时间为空，timeStr："+timeStr);
    return false;
  }
};
/*时间格式化3  如(DateTime)2019-03-20T14:30:12.000Z -> 2019-03-20 14:30:12*/
export const timeFormat3 = (timeStr)=>{
  if(timeStr!=null){
    let newtime = new Date(timeStr.replace("/Date(", "").replace(")/" , "").split( "+")[0]);
    return newtime.getFullYear() + "-" + ((newtime.getMonth() + 1) < 10 ? "0" +
      (newtime.getMonth() + 1):(newtime.getMonth() + 1))+ "-" +
      (newtime.getDate() < 10 ? "0" + newtime.getDate():newtime.getDate())+ " " +
      (newtime.getHours()<10?"0"+newtime.getHours():newtime.getHours())+ ":" +
      (newtime.getMinutes()<10?"0"+newtime.getMinutes():newtime.getMinutes())+ ":" +
      (newtime.getSeconds()<10?"0"+newtime.getSeconds():newtime.getSeconds());
  }else {
    console.warn("当前输入的时间为空，timeStr："+timeStr);
    return false;
  }
};

/*时间格式化5 标准时间：Wed Dec 13 2017 16:00:00 GMT+0800 (中国标准时间) -> 时间格式2019-05-22 08:00:00 */
export const timeFormat4 = (date)=>{
  if(date!=null){
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    var second= date.getSeconds();
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+ second;
  }else {
    return false;
  }
};

/*时间格式化5  如字符串'2019-05-22 08:00:00' -> 时间格式2019-05-22 08:00:00*/
export const timeFormat5 = (timeStr)=>{
  if(timeStr!=null){
    var date  =  new Date(Date.parse(timeStr.replace(/-/g, "/")));
    return timeFormat4(date);
  }else {
    console.warn("当前输入的时间为空，timeStr："+timeStr);
    return false;
  }
};
