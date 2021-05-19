# 1 简介

使用 `vite2` 创建 React17 & Vue3 项目。

每个前端框架提供下列类 gis 库的 `Hello World` 代码。

- openlayers@6.5
- cesium.js@1.81
- leaflet@1.7.1
- mapboxgl@1.13.1
- openglobus（todo）



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



# 2 TODO

- 添加 openglobus 示例
- 使用 svelte 试写一次



# 3 为什么不用封装好的组件库

例如，openlayers 可以使用 [rlayers](https://www.npmjs.com/package/rlayers)，leaflet 可以使用 [react-leaflet](https://www.npmjs.com/package/react-leaflet) 或 [vue2-leaflet](https://www.npmjs.com/package/vue2-leaflet)

是因为我希望原汁原味，无它
