import { useState } from 'react'
import Editor from "@monaco-editor/react"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // an important concept to understand about monaco - it will take up the full width/height of it's container (width:100%, height:100%)
  // you can have editors of any size
  // full screen or embed type size

  return (
    <div className="App">

    </div>
  )
}

export default App
