import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { EventBus } from './event-bus'
import Countdown from './countdown/Countdown'

function App() {
  const [count, setCount] = useState(0)
  const [eventBus, setEventBus] = useState(new EventBus())



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          }}>
          count is {count}
        </button>
        <button onClick={()=>{eventBus.publish('start timer', Date.now() + 1000 * 10)}}>
          start
        </button>
        <button onClick={()=>{eventBus.publish('stop timer', Date.now() + 1000 * 10)}}>
          stop
        </button>
        <p>
          <Countdown eventBus={eventBus}></Countdown>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
