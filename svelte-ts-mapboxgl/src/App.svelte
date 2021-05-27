<script lang="ts">
  import mapboxgl, { Map } from "mapbox-gl";
  import { onMount } from "svelte";
  import "../node_modules/mapbox-gl/dist/mapbox-gl.css";

  mapboxgl.accessToken = `your token here`;

  let mapDiv: HTMLElement;
  let map: Map;
  onMount(() => {
    map = new Map({
      container: mapDiv,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [112.5, 22.3],
      zoom: 7,
    });
  });
</script>

<main>
  <div id="map-container" bind:this={mapDiv} />
</main>

<style>
  #map-container {
    width: 100vw;
    height: 100vh;
  }
</style>
