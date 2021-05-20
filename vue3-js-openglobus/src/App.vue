<template>
  <div id="globus-container"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Globe, layer, terrain } from '@openglobus/og'

import '../node_modules/@openglobus/og/css/og.css'

let globus
onMounted(() => {
  globus = new Globe({
    target: 'globus-container',
    name: 'earth',
    terrain: new terrain.GlobusTerrain(),
    layers: [
      new layer.XYZ("OpenStreetMap", {
        isBaseLayer: true,
        url: '//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        visibility: true
      })
    ],
    autoActivated: true,
    viewExtent: [5.56707, 45.15679, 5.88834, 45.22260]
  })
})
</script>

<style>
#globus-container {
  width: 100vw;
  height: 100vh;
}
</style>
