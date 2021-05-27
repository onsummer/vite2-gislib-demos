import React, { useEffect, useRef } from 'react'

import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"

import './App.css'
import '@arcgis/core/assets/esri/themes/dark/main.css'

function App() {
  const mapDivRef = useRef(null)
  let map
  let view
  useEffect(() => {
    map = new Map({
      basemap: "topo-vector"
    })

    view = new MapView({
      container: mapDivRef.current,
      map: map,
      center: [112.5, 22.3],
      zoom: 7
    })
  }, [])

  return <div id="viewDiv" ref={mapDivRef}></div>
}

export default App
