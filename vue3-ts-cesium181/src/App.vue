<template>
  <div id="cesium-container" :ref="cesiumRefFn"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { Viewer } from 'cesium'
import '../node_modules/cesium/Source/Widgets/widgets.css'

let viewer: Viewer
export default defineComponent({
  name: 'App',
  setup() {

    let cesiumRef: Element
    const cesiumRefFn = (el: any) => {
      cesiumRef = el
    }

    onMounted(() => {
      viewer = new Viewer(cesiumRef)
    })

    return {
      cesiumRefFn
    }
  }
})
</script>

<style>
#cesium-container {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
}
</style>
