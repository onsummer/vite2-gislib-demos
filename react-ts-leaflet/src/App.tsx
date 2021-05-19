import React, { useRef, useEffect } from 'react'
import { map, tileLayer } from 'leaflet'
import '../node_modules/leaflet/dist/leaflet.css'
import './App.css'

function App() {
  const lfRef = useRef<HTMLDivElement>(null)
  let lfMap
  useEffect(() => {
    lfMap = map(lfRef.current as HTMLElement).setView([22.3, 112.5], 7) // 纬度, 经度
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(lfMap)
  }, [])
  return <div id="lf-container" ref={lfRef}></div>
}

export default App
