<template>
  <div id="ol-container" :ref="olDivRefFn"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { Map, View } from 'ol';
import { Tile as TileLayer } from 'ol/layer';
import { OSM as OSMSource } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import '../node_modules/ol/ol.css'

export default defineComponent({
  name: 'App',
  setup() {
    let olDivRef: HTMLElement
    let map: Map
    const olDivRefFn = (el: any) => {
      olDivRef = el
    }

    onMounted(() => {
      map = new Map({
        target: olDivRef as HTMLElement,
        layers: [
          new TileLayer({
            source: new OSMSource()
          })
        ],
        view: new View({
          center: fromLonLat([112.5, 22.3]),
          zoom: 7
        })
      })
    })

    return {
      olDivRefFn
    }
  }
})
</script>

<style>
  #ol-container {
    width: 100vw;
    height: 100vh;
  }
</style>
