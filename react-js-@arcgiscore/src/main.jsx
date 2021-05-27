import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

/* 配置 arcgisjsapi 的静态资源 */
import esriConfig from "@arcgis/core/config.js"
esriConfig.assetsPath = "./assets"

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
