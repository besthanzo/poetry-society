import type { RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/index.vue')

const routeModuleList: Array<RouteRecordRaw> = [
  {
    path: '/index',
    name: 'Index',
    redirect: '/index/index',
    component: Layout,
    meta: {
      title: '首页',
      icon: 'i-simple-icons:apachespark',
    },
    // getShowHeader:false,
    children: [
      {
        path: 'index',
        name: 'IndexPage',
        meta: {
          keepAlive: false,
        },
        component: () => import('@/views/index/index.vue'),
      },
      
    ],
  },
  {
    path: '/anthology',
    name: 'Anthology',
    redirect: '/anthology/index',
    component: Layout,
    meta: {
      title: '诗集',
      icon: 'i-simple-icons:bookstack',
    },
    // getShowHeader:false,
    children: [
      {
        path: 'index',
        name: 'Anthology',
        meta: {
          keepAlive: false,
        },
        component: () => import('@/views/anthology/index.vue'),
      },
      {
        path: '/list',
        name: 'List',
        meta: {
          title: '遍历',
          innerPage: true,
        },
        component: () => import('@/views/anthology/list.vue'),
      },
      {
        path: '/view',
        name: 'View',
        meta: {
          title: '看故事',
          innerPage: true,
        },
        component: () => import('@/views/anthology/view.vue'),
      },

      {
        path: '/caoCaoPoems',
        name: 'CaoCaoPoems',
        meta: {
          title: '曹操的诗',
          innerPage: true,
        },
        component: () => import('@/views/anthology/poems/CaoCaoPoems.vue'),
      },
    ],
  },
  
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   redirect: '/dashboard/index',
  //   component: Layout,
  //   meta: {
  //     title: '主控台',
  //     icon: 'i-simple-icons:atlassian',
  //   },
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'DashboardPage',
  //       meta: {
  //         keepAlive: false,
  //       },
  //       component: () => import('@/views/dashboard/index.vue'),
  //     },
  //   ],
  // },
  {
    path: '/poet',
    name: 'Poet',
    redirect: '/poet/index',
    component: Layout,
    meta: {
      title: 'Roll一首~',
      icon: 'i-icon-park-solid:refresh-one',
    },
    children: [
      {
        path: 'index',
        name: 'Poet',
        meta: {
          keepAlive: false,
        },
        component: () => import('@/views/poet/index.vue'),
      },
    ],
  },
  // {
  //   path: '/message',
  //   name: 'Message',
  //   redirect: '/message/index',
  //   component: Layout,
  //   meta: {
  //     title: '图表',
  //     icon: 'i-simple-icons:soundcharts',
  //   },
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'MessagePage',
  //       meta: {
  //         keepAlive: false,
  //       },
  //       component: () => import('@/views/message/index.vue'),
  //     },
  //   ],
  // },
  // {
  //   path: '/example',
  //   name: 'Example',
  //   redirect: '/example/index',
  //   component: Layout,
  //   meta: {
  //     title: '示例',
  //     icon: 'i-material-symbols:award-star',
  //   },
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'ExamplePage',
  //       meta: {
  //         keepAlive: false,
  //       },
  //       component: () => import('@/views/example/index.vue'),
  //     },
  //   ],
  // },


  
  {
    path: '/my',
    name: 'My',
    redirect: '/my/index',
    component: Layout,
    meta: {
      title: '我的',
      icon: 'i-simple-icons:docsify',
    },
    children: [
      {
        path: 'index',
        name: 'MyPage',
        meta: {
          keepAlive: false,
          hiddenHeader: true,
        },
        component: () => import('@/views/my/index.vue'),
      },
    ],
  },

  // my innerPage

  
  {
    path: '/editUserInfo',
    name: 'EditUserInfo',
    meta: {
      title: '编辑个人信息',
      innerPage: true,
    },
    component: () => import('@/views/my/EditUserInfo.vue'),
  },
  {
    path: '/editNickname',
    name: 'EditNickname',
    meta: {
      title: '修改昵称(该页面已缓存)',
      innerPage: true,
      keepAlive: true,
    },
    component: () => import('@/views/my/EditNickname.vue'),
  },
  {
    path: '/editSign',
    name: 'EditSign',
    meta: {
      title: '修改签名',
      innerPage: true,
    },
    component: () => import('@/views/my/EditSign.vue'),
  },
  {
    path: '/accountSetting',
    name: 'AccountSetting',
    meta: {
      title: '账号与安全',
      innerPage: true,
    },
    component: () => import('@/views/my/AccountSetting.vue'),
  },
  {
    path: '/changePassword',
    name: 'ChangePassword',
    meta: {
      title: '修改登录密码',
      innerPage: true,
    },
    component: () => import('@/views/my/ChangePassword.vue'),
  },
  {
    path: '/themeSetting',
    name: 'ThemeSetting',
    meta: {
      title: '主题设置',
      innerPage: true,
    },
    component: () => import('@/views/my/ThemeSetting.vue'),
  },
]

export default routeModuleList
