<script>
  import { onMount } from "svelte";
  import { Globe, layer, terrain } from "@openglobus/og";

  import "../node_modules/@openglobus/og/css/og.css";
  let globus;

  onMount(() => {
    globus = new Globe({
      target: "globusDiv",
      name: "earth",
      terrain: new terrain.GlobusTerrain(),
      layers: [
        new layer.XYZ("OpenStreetMap", {
          isBaseLayer: true,
          url: "//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          visibility: true,
        }),
      ],
      autoActivated: true,
      viewExtent: [5.56707, 45.15679, 5.88834, 45.2226],
    });
  });
</script>

<main>
  <div id="globusDiv" />
</main>

<style>
  #globusDiv {
    width: 100vw;
    height: 100vh;
  }
</style>
