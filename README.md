# 1 简介

使用 `Vite2` 创建 `React17`、`Vue3`、`Svelte` 项目。

每个前端框架提供下列 gis 或类 gis 库的 `Hello World` 代码。

- openlayers@6.5
- cesium.js@1.81
- leaflet@1.7.1
- mapboxgl@1.13.1
- openglobus@0.8.10
- arcgis jsapi@4.19



## ① Cesium 项目额外注意

要配置 `window` 下的全局属性 `CESIUM_BASE_URL`，你可以看到我在 `index.html` 中写多了一个 `<script>` 标签。

> 亦可在 `index.html` 中直接引用 `/cesium_base_url.js`，然后用写文件的方式将此 URL 提前写入到 `public/cesium_base_url.js` 中。

`cesium_base_url.js` 的内容如下：

``` js
window['CESIUM_BASE_URL'] = `path/to/cesium/Source/`
```

本例不使用 `vite-cesium-plugin`，即不将 `cesium` 依赖中的额外资源拷贝到 `public` 目录下，仅适用于开发环境，生产环境需要自己配置 cesium api 的 cdn.



## ② mapboxgl 注意

- 替换你的访问令牌方可使用
- 推荐使用社区分支 [maplibre-gl](https://github.com/maplibre/maplibre-gl-js)，是 mapbox-gl 在 2.0 版本开始修改开源协议之后的一个不错的分支



## ③ openglobus 注意

因为 openglobus 在我初次写时还没有类型定义库，所以用的是 JavaScript 来写。初始视角用的是官方默认的。



## ④ arcgis 注意

详细的文档写在子目录中了，主要是 `assets` 目录的预复制操作，这点和 Cesium 的操作略像。读者可以自己手动试试将 `esriConfig.assetsPath`  配为部署好的地址，也可以像我 Cesium 例子一样设置开发时的目录，即 `esriConfig.assetsPath = "http://localhost:3000/node_modules/@arcgis/core/assets/"` （我没测试过，留给读者自己试吧）。



# 2 Future

- 使用原生 js+css+html 试写一次



# 3 为什么不用封装好的组件库

例如，openlayers 可以使用 [rlayers](https://www.npmjs.com/package/rlayers)，leaflet 可以使用 [react-leaflet](https://www.npmjs.com/package/react-leaflet) 或 [vue2-leaflet](https://www.npmjs.com/package/vue2-leaflet)

是因为我希望原汁原味，无它。
