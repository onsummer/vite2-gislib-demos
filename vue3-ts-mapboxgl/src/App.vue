<template>
  <div id="mapbox-container" :ref="mapboxContainerRefFn"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import mapboxgl, { Map } from 'mapbox-gl'
import '../node_modules/mapbox-gl/dist/mapbox-gl.css'

export default defineComponent({
  name: 'App',
  setup() {
    let map: Map
    let mapboxContainerRef: HTMLElement
    const mapboxContainerRefFn = (el: any) => {
      mapboxContainerRef = el
    }

    onMounted(() => {
      mapboxgl.accessToken = `your token here`
      map = new Map({
        container: mapboxContainerRef,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [112.5, 22.3],
        zoom: 7
      })
    })

    return {
      mapboxContainerRefFn
    }
  }
})
</script>

<style>
#mapbox-container {
  width: 100vw;
  height: 100vh;
}
</style>
