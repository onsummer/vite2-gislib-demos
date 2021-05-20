import React, { useEffect } from 'react'
import './App.css'
import { layer, terrain, Globe } from '@openglobus/og'

import '../node_modules/@openglobus/og/css/og.css'

function App() {

  let globus
  useEffect(() => {
    globus = new Globe({
      target: 'globus-container',
      name: 'earth',
      terrain: new terrain.GlobusTerrain(),
      layers: [
        new layer.XYZ("OpenStreetMap", {
          isBaseLayer: true,
          url: '//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          visibility: true
        })
      ],
      autoActivated: true,
      viewExtent: [5.56707, 45.15679, 5.88834, 45.22260]
    })
  }, []);

  return <div id="globus-container"></div>
}

export default App
