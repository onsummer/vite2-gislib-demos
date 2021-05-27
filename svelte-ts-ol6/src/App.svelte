<script lang="ts">
  import { onMount } from "svelte";
  import { Map, View } from "ol/index";
  import { Tile as TileLayer } from "ol/layer";
  import { OSM as OSMSource } from "ol/source";
  import { fromLonLat } from "ol/proj";
  import "../node_modules/ol/ol.css";

  let map: Map;
  let olViewDiv: HTMLElement;
  onMount(() => {
    map = new Map({
      target: olViewDiv,
      layers: [
        new TileLayer({
          source: new OSMSource(),
        }),
      ],
      view: new View({
        center: fromLonLat([112.5, 22.3]),
        zoom: 7,
      }),
    });
  });
</script>

<main>
  <div id="olView" bind:this={olViewDiv}/>
</main>

<style>
  #olView {
    width: 100vw;
    height: 100vh;
  }
</style>
