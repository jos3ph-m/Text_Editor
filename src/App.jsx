import { useState } from 'react'
import Editor from "@monaco-editor/react"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // an important concept to understand about monaco - it will take up the full width/height of it's container (width:100%, height:100%)
  // you can have editors of any size
  // full screen or embed type size

  // Objectives
  // 1. Be able to change from 1 file to the next
  // 2. get the value of Monaco editor

  // a file path (name), a language, a default value

  return (
    <div className="App">
      <Editor
      height="100vh"
      width="100%" 
      theme="vs-dark"
      path={"filename"}
      defaultLanguage="python"
      defaultValue="Here is some python text"
      />
    </div>
  )
}

export default App
