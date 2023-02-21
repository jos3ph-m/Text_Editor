import { useState } from 'react'
import Editor from "@monaco-editor/react"
import './App.css'

const files = {
  "script.py": {
    name: "script.py",
    language: "python",
    value: "Here is some python text"
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: "<div> </div>"
  }
}

function App() {
  const [fileName, setFileName] = useState("script.py"); // change to "index.html"
  const file = files[fileName]
  // files["script.py"] -> file -> name, language, value -> pass those to the editor

  // an important concept to understand about monaco - it will take up the full width/height of it's container (width:100%, height:100%)
  // you can have editors of any size
  // full screen or embed type size

  // Objectives
  // 1. Be able to change from 1 file to the next
  // 2. get the value of Monaco editor

  // a file path (name), a language, a default value

  return (
    <div className="App">
      <button></button>
      <Editor
      height="100vh"
      width="100%" 
      theme="vs-dark"
      path={file.name}
      defaultLanguage={file.language}
      defaultValue={file.value}
      />
    </div>
  )
}

export default App
