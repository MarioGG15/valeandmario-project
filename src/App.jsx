import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Love from './components/Love'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Love />
    </div>
  )
}

export default App
