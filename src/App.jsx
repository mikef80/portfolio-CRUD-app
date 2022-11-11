import { useState } from 'react'

import './App.css'
import Description from './components/description/Description'
import TextBox from './components/text-box/TextBox'

import TitleBar from './components/title/TitleBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App p-5">
      {/* title */ }
      <TitleBar />
      {/* description */ }
      <Description />
      {/* input box and button */ }
      <TextBox />
      {/* list of items with edit/delete buttons */ }
      {/* clear all function */}
    </div>
  )
}

export default App
