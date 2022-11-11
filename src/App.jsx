import { useState } from 'react'

import './App.css'

import TitleBar from './components/title/TitleBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* title */ }
      <TitleBar />
      {/* description */ }
      
      {/* input box and button */ }
      {/* list of items with edit/delete buttons */ }
      {/* clear all function */}
    </div>
  )
}

export default App
