import Vue from 'vue'
import Router from 'vue-router'
import User from "../components/User";
import AddMates from "../components/AddMates";
import FindAll from "../components/FindAll";
import dialog from "../components/dialog";
import MateLend from "../components/MateLend";
import UserLogin from "../components/UserLogin";
import Index from "../components/Index";
import Edit from "../components/Edit";
Vue.use(Router)

export default new Router({
  routes: [
    //默认路由
    {
      path: '/',
      redirect:'/index'
    },
    // 用户登录
    {
      path: '/UserLogin',
      component: UserLogin
    },
    //主页
    {
      path: '/index',
      component: Index,
      children:[
        //添加物料
        {
          path:'/addMates',
          component: AddMates
        },
        //查看所有物料
        {
          path:'/findAll',
          component: FindAll
        },
        //测试
        {
          path:'/dialog',
          component: dialog
        },
        // 物料借出
        {
          path: '/mateLend',
          component: MateLend
        },
        //用户管理
        {
          path: '/user',
          component: User
        },
        //编辑页
        {
          path:"/edit",
          component: Edit
        },
      ]
    },
  ]
})
