
<h1 align="center">poetry-society</h1>

## 介绍
 使用 Vue3 Vant4 Mobile 进行开发
使用 chinese-poetry: 最全中文诗歌古典文集数据库 作为数据源

------------
👋👋👋 Vue3 Vant4 Mobile 使用了最新的 `Vue3.4`、`Vite5`、`Vant4`、`Pinia`、`TypeScript`、`UnoCSS` 等主流技术开发，集成 `Dark Mode`（暗黑）模式和系统主题色，并且持久化保存，集成 `Mock` 数据，顺便写了登录/注册/找回密码 页面（包括逻辑），只需替换你的 API 即可，另外页面均可以 `<keep-alive>`，随便写了个包含 `NavBar`、`TabBar` 的 Layout，集成了 `Axios`、`useECharts`、`IconSvg`。

## 基础知识

- [Vite](https://cn.vitejs.dev/) - 熟悉 `Vite` 特性
- [Vue3](https://v3.vuejs.org/) - 熟悉 `Vue3` 基础语法
- [Vant4](https://youzan.github.io/vant/v4/#/zh-CN) - 掌握 `vant4` 组件基本使用
- [Pinia](https://pinia.vuejs.org/) - 熟悉 `Pinia` 特性
- [TypeScript](https://www.typescriptlang.org/) - 熟悉 `TypeScript` 基本语法
- [Vue-Router-Next](https://router.vuejs.org/) - 熟悉 `Vue-Router`基本使用
- [ECharts5](https://echarts.apache.org/handbook/zh/get-started/) - 熟悉 `Echarts` 基本使用
- [Iconify](https://icones.js.org/) - 本项目推荐图标库，当然你也可以使用 `IconSvg`
- [Postcss-Mobile-Forever](https://github.com/wswmsword/postcss-mobile-forever) - 了解手机端 `px` 转 `viewport` 插件的作用
- [Lodash-es](https://www.lodashjs.com/) - `JS`高性能工具库
- [UnoCSS](https://unocss.dev/) - 原子化 `CSS`，熟悉 `UnoCSS` 基本使用
- [Mock.js](https://github.com/nuysoft/Mock) - 了解 `Mockjs` 基本语法
- [ES6+](http://es6.ruanyifeng.com/) - 熟悉 `ES6` 基本语法

## Git 提交规范

### 提交规范

参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发