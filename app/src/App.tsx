import { useState } from 'react'
import './App.css'
import { Dice } from './components/Dice'

function App() {
  const [isRolling, setIsRolling] = useState(false);

  return (
    <div className="container">
      <h1>Dice Demo</h1>
      <div className="dice-container">
        <Dice count={1} />
        <Dice count={2} />
        <Dice count={3} />
        <Dice count={4} />
        <Dice count={5} />
        <Dice count={6} />
        <Dice count={6} rolling={isRolling} />
      </div>
      <button onClick={() => setIsRolling(!isRolling)}>
        {isRolling ? 'Stop Rolling' : 'Start Rolling'}
      </button>
    </div>
  )
}

export default App
