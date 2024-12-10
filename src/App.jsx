/* eslint-disable no-empty */
import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const incrementOne = () => {
    setCount((count) => count+1)
  }

  const incrementTwo = () => {
    setCount2((count) => count+1)
  }

  const isEven = useMemo(() => {
    for (let i = 0; i < 200000000; i++){}
    return count % 2 === 0
  },[count])

  return (
    <div className='App'>
     <h1>UseMemo hook working</h1>
     <div className='flex'>
      <button onClick={incrementOne}>count : {count}</button>
      <span>
        {isEven ? "Even" : "Odd"}
      </span>
     </div>
     <div>
      <button onClick={incrementTwo}>count : {count2}</button>
     </div>

    </div>
  )
}

export default App
