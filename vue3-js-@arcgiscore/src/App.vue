<template>
  <div id="viewDiv" :ref="mapToDivFn"></div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import '@arcgis/core/assets/esri/themes/dark/main.css'

export default defineComponent({
  name: 'App',
  setup() {
    let divRef
    let map
    let view
    const mapToDivFn = el => {
      divRef = el
    }

    onMounted(() => {
      map = new Map({
        basemap: "topo-vector"
      })

      view = new MapView({
        container: divRef,
        map: map,
        center: [112.5, 22.3],
        zoom: 7
      })
    })
    return {
      mapToDivFn
    }
  }
})

</script>

<style>
#viewDiv {
  width: 100vw;
  height: 100vh;
}
</style>
