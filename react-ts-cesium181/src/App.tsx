import React, { useEffect, useRef } from 'react'
import { Viewer } from 'cesium'
import '../node_modules/cesium/Source/Widgets/widgets.css'
import './App.css'

let viewer: Viewer
function App() {
  const cesiumRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    viewer = new Viewer(cesiumRef.current as HTMLDivElement)
  })

  return <div id="cesium-container" ref={cesiumRef}></div>
}

export default App
