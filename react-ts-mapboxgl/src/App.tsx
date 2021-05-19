import React, { useEffect, useRef } from 'react'
import mapboxgl, { Map } from 'mapbox-gl'
import '../node_modules/mapbox-gl/dist/mapbox-gl.css'
import './App.css'

function App() {
  const mapDivRef = useRef<HTMLDivElement>(null)
  let map: Map

  mapboxgl.accessToken = `your token here`

  useEffect(() => {
    map = new Map({
      container: mapDivRef.current as HTMLElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [112.5, 22.3],
      zoom: 7
    })
  }, [])

  return <div id="mapbox-container" ref={mapDivRef}></div>
}

export default App
