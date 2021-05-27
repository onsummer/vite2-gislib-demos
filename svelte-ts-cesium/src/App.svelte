<script lang="ts">
  import { onMount } from "svelte";
  import { Viewer } from "cesium";
  import "../node_modules/cesium/Source/Widgets/widgets.css";

  let viewerDiv: HTMLDivElement;
  let viewer: Viewer;

  onMount(() => {
    viewer = new Viewer(viewerDiv);
  });
</script>

<main>
  <div id="viewer" bind:this={viewerDiv} />
</main>

<style>
  #viewer {
    width: 100vw;
    height: 100vh;
  }
</style>
