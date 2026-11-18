import React from 'react'
import ReactDOM from 'react-dom/client'

// 单文件版：不使用 @fontsource 的远程字体分片，改用系统/本地字体栈，
// 保证双击打开（file://）时页面完全自包含。
import './styles/base.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
