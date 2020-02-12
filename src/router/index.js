import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/Layout'

Vue.use(Router)

/*解决点击当前路由报错的问题*/
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export const constantRouterMap = [
    {
      path: '/',
      name: '',
      component: Layout,
      redirect:'/dashboard',
      iconCls: 'el-icon-date',
      hidden:true,
      children: [
        { path: 'dashboard', name: '主页' ,component: ()=>import('@/pages/index'), hidden:true},
      ]
    },{
      path:'/login',
      component:()=>import('@/pages/login/index'),
      hidden:true
    },{
      path:'/404',
      component:()=>import('@/pages/error/404'),
      hidden:true
    },{
      path:'/401',
      component:()=>import('@/pages/error/401'),
      hidden:true
    },
  {
    path:'/manager',
    component:Layout,
    name:'管理模块',
    redirect:'/manager/menu1',
    icon:'el-icon-s-order',
    meta:{ role : ['admin','edit'] },
    children:[
      { path:'menu1', name:'介绍页面', meta:{ role:['admin','edit'] }, component:()=>import('@/pages/manager/Introduce') },
      { path:'menu2', name:'组件集合', meta:{ role:['admin','edit'] }, component:()=>import('@/pages/manager/Collection') },
      { path:'menu3', name:'开源资料', meta:{ role:['admin','edit'] }, component:()=>import('@/pages/manager/Source') },
    ]
  },
  {
    path:'/article',
    component:Layout,
    name:'内容管理',
    redirect:'/article/article1',
    icon:'el-icon-edit',
    meta:{ role : ['admin','edit'] },
    children:[
      { path:'article1', name:'Markdown', meta:{ role:['admin','edit'] }, component:()=>import('@/pages/article/Markdown') },
      { path:'article2', name:'文章创建', meta:{ role:['admin','edit'] }, component:()=>import('@/pages/article/ArticleCreate') },
      { path:'article3', name:'文章列表', meta:{ role:['admin','edit'] }, component:()=>import('@/pages/article/ArticleTable') }
    ]
  },
  {
    path:'/table',
    component:Layout,
    name:'表格模块',
    redirect:'/table/table1',
    icon:'el-icon-menu',
    meta:{ role : ['admin','edit'] },
    children:[
      { path:'table1', name:'经典样式', meta:{ role:['admin','edit'] }, component:()=>import('@/pages/table/ClassicTable') },
      { path:'table2', name:'动态样式', meta:{ role:['admin','edit'] }, component:()=>import('@/pages/table/DynamicTable') },
      { path:'table3', name:'链接样式', meta:{ role:['admin','edit'] }, component:()=>import('@/pages/table/LinkTable') },
      { path:'table4', name:'可编辑样式', meta:{ role:['admin','edit'] }, component:()=>import('@/pages/table/EditableTable') }
    ]
  },
  {
    path:'/excel',
    component:Layout,
    name:'Excel模块',
    redirect:'/excel/excel1',
    icon:'el-icon-document',
    meta:{ role : ['admin','edit'] },
    children:[
      { path:'excel1', name:'Excel导出', meta:{ role:['admin','edit'] }, component:()=>import('@/pages/excel/ExcelExport') },
      { path:'excel2', name:'Excel导入', meta:{ role:['admin','edit'] }, component:()=>import('@/pages/excel/ExcelImport') }
    ]
  },
  {
    path:'/map',
    component:Layout,
    name:'地图模块',
    redirect:'/map/map1',
    icon:'el-icon-position',
    meta:{ role : ['admin','edit'] },
    children:[
      { path:'map1', name:'地图定位', meta:{ role:['admin','edit'] }, component:()=>import('@/pages/map/MapLocation') },
      { path:'map2', name:'GPS悬浮窗', meta:{ role:['admin','edit'] }, component:()=>import('@/pages/map/GpsMapInfo') },
      { path:'map3', name:'GPS轨迹', meta:{ role:['admin','edit'] }, component:()=>import('@/pages/map/GPSMapTrail') }
    ]
  },
  {
    path:'/tools',
    component:Layout,
    name:'工具模块',
    redirect:'/tools/tools1',
    icon:'el-icon-setting',
    meta:{ role : ['admin','edit'] },
    children:[
      { path:'tools1', name:'Header锁定', meta:{ role:['admin','edit'] }, component:()=>import('@/pages/tools/TopFixed') },
      { path:'tools2', name:'回到顶部', meta:{ role:['admin','edit'] }, component:()=>import('@/pages/tools/BackToTop') },
      { path:'tools3', name:'锚点跳转', meta:{ role:['admin','edit'] }, component:()=>import('@/pages/tools/ScrollView') }
    ]
  },
  {
    path:'https://www.baidu.com',
    component:Layout,
    name:'外部链接',
    icon:'el-icon-s-promotion',
    meta:{ role : ['admin','edit'] },
    linkType:true
  },
  {
    path:'/yuque',
    component:()=>import('@/pages/yuque/ArticlePage'),
    hidden:true
  },
  {
    path:'/tools-card',
    component:()=>import('@/pages/yuque/tools'),
    hidden:true
  }
  ]
  export default new Router({
    //mode: 'history',//去掉#
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
  })
  /* 用于权限管理的页面 */
  export const asyncRouterMap = [
    {
      path:'/manager',
      component:Layout,
      name:'管理模块',
      redirect:'/manager/menu1',
      icon:'nested',
      meta:{ role : ['admin','edit'] },
      children:[
        { path:'menu1', name:'管理模块-1', meta:{ role:['admin','edit'] }, component:()=>import('@/pages/manager/Manager1') },
        { path:'menu2', name:'管理模块-1', meta:{ role:['admin','edit'] }, component:()=>import('@/pages/manager/Manager2') },
      ]
    },
    {
      path:'/edit',
      component:Layout,
      name:'编辑模块',
      redirect:'/edit/menu1',
      icon:'nested',
      meta:{ role : ['admin','edit'] },
      children:[
        { path:'menu1', name:'管理模块-1', meta:{ role:['admin','edit'] }, component:()=>import('@/pages/manager/Manager1') },
        { path:'menu2', name:'管理模块-1', meta:{ role:['admin','edit'] }, component:()=>import('@/pages/manager/Manager2') },
      ]
    }
  ]
