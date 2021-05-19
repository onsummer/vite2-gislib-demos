import React, { useEffect, useRef } from 'react'
import { Map, View } from 'ol'
import { Tile as TileLayer } from 'ol/layer'
import { OSM as OSMSource } from 'ol/source'
import { fromLonLat } from 'ol/proj'
import '../node_modules/ol/ol.css'
import './App.css'

function App() {
  let map: Map
  const mapContainerDomRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    map = new Map({
      target: mapContainerDomRef.current as HTMLDivElement,
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
  }, [])

  return <div id="ol-container" ref={mapContainerDomRef}></div>
}

export default App
