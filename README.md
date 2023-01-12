##  Vue3 + TypeScript + Vite + Tauri

[![Vite](https://img.shields.io/badge/Vite-2.9.5-blue.svg?style=flat-square)](https://cn.vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.5.5-blue.svg?style=flat-square)](https://www.typescriptlang.org/zh/)
[![Vue](https://img.shields.io/badge/Vue-3.2.45-blue.svg?style=flat-square)](https://cn.vuejs.org/)
[![Echarts](https://img.shields.io/badge/Echarts-5.2.2-blue.svg?style=flat-square)](https://echarts.apache.org/zh/index.html)
[![Pinia](https://img.shields.io/badge/Pinia-2.0.11-blue.svg?style=flat-square)](https://github.com/vuejs/pinia)
[![Element-plus](https://img.shields.io/badge/ElementPlus-2.2.25-blue.svg?style=flat-square)](https://element-plus.org/zh-CN/#/zh-CN)
[![Tauri](https://img.shields.io/badge/Tauri-1.2-blue.svg?style=flat-square)](https://tauri.app/zh-cn/)

[//]: # (>### A template of Vite-ts-vue3 [Demo]&#40;https://10.70.5.169&#41;)
>### A template of Vue3 + TypeScript + Vite [Demo](https://github.com/jesseying/Vite)

## Node.js环境
1. 安装 Node.js **[v14.19.1](https://nodejs.org/en/blog/release/v14.19.1/)** 或以上。

## tauri环境
首先您需要安装 Rust 及其他系统依赖。 请记住，只有在开发 Tauri 应用时才需要此设置。 您程序的用户不需要进行下列操作。
1. Microsoft Visual Studio C++ 生成工具.![img.png](https://tauri.app/zh-cn/assets/images/vs-installer-dark-bfd8bb9555878855ff8919258525b907.png#gh-dark-mode-only)
2. WebView2 Tauri 需要 WebView2 才能在 Windows 上呈现网页内容，所以您必须先安装 WebView2。 最简单的方法是从微软网站下载和运行常青版引导程序。注：Windows 11 已预装了 WebView2。
3. 最后，请前往 https://www.rust-lang.org/zh-CN/tools/install 来安装 rustup (Rust 安装程序)。 请注意，为了使更改生效，您必须重新启动终端，在某些情况下需要重新启动 Windows 本身。或者您可以在 PowerShell 中使用 winget 命令安装程序：
```bash
PS C:\> winget install --id Rustlang.Rustup
```

### Windows
```bash
pnpm install
# serve with hot reload at localhost:1818
pnpm run dev
# build
pnpm run build
```

### tauri
```bash
pnpm install
# serve with hot reload at localhost:1818
pnpm tauri dev
# build
# ~src-tauri/target/release/bundle/msi/*.msi
pnpm tauri build
```

### macOS
1. CLang 和 macOS 开发依赖项
   您将需要安装 CLang 和 macOS 开发依赖项。 为此，您需要在终端中执行以下命令：
```bash
$ xcode-select --install
```

2. Rust
   要在 macOS 上安装 Rust，请打开终端并输入以下命令：
```bash
$ curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

此命令将下载以上脚本并开始安装用来安装最新版 Rust 的 rustup 工具。 您可能需要输入密码。 若安装成功，终端将显示以下内容：
```bash
Rust is installed now. Great!
```

### Linux
1. 系统依赖
您需要安装几个系统依赖，如 C 语言编译器和 webkit2gtk。 下方是适用于部分热门发行版的安装命令：
```bash
sudo apt update
sudo apt install libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    wget \
    libssl-dev \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev
```

2. Rust
   要在 Linux 上安装 Rust，请打开终端并输入以下命令：
```bash
$ curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

此命令将下载以上脚本并开始安装用来安装最新版 Rust 的 rustup 工具。 您可能需要输入密码。 若安装成功，终端将显示以下内容：
```bash
Rust is installed now. Great!
```

3. Rust相关命令
```bash
# 更新版本
$ rustup update
# 卸载
$ rustup self uninstall
# 查看版本
$ rustc --version
# 您应该能看到以下列格式呈现的版本号、提交哈希及提交日期：
$ rustc x.y.z (abcabcabc yyyy-mm-dd)
```

## 系统目录
~~~
nsiForum
├── public    // 系统资源目录
├── src       // 主代码目录
│    └── api         // 接口目录 路由和类型控制
│    └── assets      // 静态资源存放目录
│    └── components      // 全局组件目录该路径下的组件会被全局注册
│    └── pages      // 视图层目录
│    └── router      // 页面路由，其中static.ts可以做动态路由
│    └── store      // 状态管理，pinia相关设置
│    └── styles      // styles设置，也可以设置全局共用样式（如loading.scss）
│    └── utils      // 全局工具方法设置
│    └── App.vue      // 视图层主入口
│    └── auto-imports.d.ts      // 生成的生命周期等全局方法
│    └── components.d.ts      // 生成全局的组件接口
│    └── main.ts      // 主配置，全局插件等
├── src-tauri       // tauri相关
├── .env.production       // 生产环境配置
├── .env.development      // 开发环境
├── .editorconfig      // 代码样式设置
├── .eslintrc.cjs      // ESList配置
├── .prettierrc      // ESList配置
├── .eslintrc-auto-import.json      // 生成的ESList配置
├── .gitignore      // git配置
├── env.d.ts      // 环境配置
├── index.html      // 用户主入口
├── tsconfig.json      // ts项目编译配置
├── package.json      // 项目插件配置
~~~
---
