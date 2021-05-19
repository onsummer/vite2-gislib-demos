<template>
  <div id="lf-container" :ref="lfRefFn"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { map, tileLayer } from 'leaflet'
import '../node_modules/leaflet/dist/leaflet.css'

export default defineComponent({
  name: 'App',
  setup() {
    let lfRef: HTMLElement
    let lfMap
    const lfRefFn = (el: any) => {
      lfRef = el
    }

    onMounted(() => {
      lfMap = map(lfRef).setView([22.3, 112.5], 7)
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(lfMap)
    })

    return {
      lfRefFn
    }
  }
})
</script>

<style>
#lf-container {
  width: 100vw;
  height: 100vh;
}
</style>
