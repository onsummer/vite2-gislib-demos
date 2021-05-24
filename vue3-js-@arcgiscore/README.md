# 简介

使用 vite2 运行 `@arcgis/core` 项目。目前使用 vue3 框架。



# 运行方式

## 预备工作

### ① 手动复制 `node_modules/@arcgis/core/assets` 文件夹

将此文件夹完整地复制到 `public` 目录下即可

### ② 先运行一次 `yarn build` 或 `npm run build`

这样，rollup 的 copy 插件会复制 ① 中所提的 `assets` 文件夹到 `public` 目录，可以省去手动复制。





## 启动开发

``` sh
yarn dev
```



## 生产编译

``` sh
yarn build
```



## 编译后预览（启动本地服务器）

``` sh
yarn serve
```

