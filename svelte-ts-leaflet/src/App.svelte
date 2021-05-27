<script lang="ts">
  import { onMount } from "svelte";
  import { Map, map, tileLayer } from "leaflet";

  import "../node_modules/leaflet/dist/leaflet.css";

  let lfViewDiv: HTMLElement;
  let lfMap: Map;

  onMount(() => {
    lfMap = map(lfViewDiv).setView([22.3, 112.5], 7); // 纬度, 经度
    tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      lfMap
    );
  });
</script>

<main>
  <div id="lf-view" bind:this={lfViewDiv} />
</main>

<style>
  #lf-view {
    width: 100vw;
    height: 100vh;
  }
</style>
