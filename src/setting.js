/* 初始化配置文件
* 用于测试环境和正式环境的数据切换*/

module.exports = {
  title:'tan-template',
  mode:'pro',  //测试环境填dev，正式环境或其他填 pro或其他

  fixedHeader:false,
  sidebarLogo:false,

  themeColor:{
    menuText : '#bfcbd9',
    menuActiveText : '#409EFF',
    menuBg : '#304156',
    sideBarWidth : '210px'
  }


  /*dev:{  //测试环境配置
    serverAddr:'127.0.0.1',
    uploadAdd:'http://127.0.0.1:3001/',
    sql:{
      sqlServer:'',
      sqlDataBase:'zhonghong_logistic',
      localhost:'localhost',
      sqlUser:'root',
      sqlPwd:'tqhd201908'
    }
  }*/

}
