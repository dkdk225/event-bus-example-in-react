import { useEffect, useState } from "react"

function Countdown(props) {
  const {eventBus} = props
  const [timeLeft, setTimeLeft] = useState(0)
  const [show, setShow] = useState(false)

  useEffect(()=>{
    console.log('should run once at countdown mount')
    eventBus.subscribe('start timer', (data)=>{
      console.log('event triggered with ' + data)
      setTimeLeft(timeLeft =>data - Date.now())
      const id = setInterval(()=>{
        setTimeLeft(timeLeft =>data - Date.now())
      }, 1000)
      eventBus.subscribe('stop timer', ()=>{
        clearInterval(id)
        setShow(false)
      })
      setShow(true)
    })

  })

  return(
    <>
      {show && <div>{timeLeft}</div>}
    </>
  )
}

export default Countdown