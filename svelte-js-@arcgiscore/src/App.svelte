<script>
  import { onMount } from "svelte";
  import Map from "@arcgis/core/Map";
  import MapView from "@arcgis/core/views/MapView";
  import "@arcgis/core/assets/esri/themes/dark/main.css";

  let viewDiv;
  let map, view;
  onMount(() => {
    map = new Map({
      basemap: "topo-vector",
    });

    view = new MapView({
      container: viewDiv,
      map: map,
      center: [112.5, 22.3],
      zoom: 7,
    });
  });
</script>

<main>
  <div id="viewDiv" bind:this={viewDiv} />
</main>

<style>
  #viewDiv {
    width: 100vw;
    height: 100vh;
  }
</style>
