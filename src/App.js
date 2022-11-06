import { useCallback, useRef, useState } from "react";
import UseCallbackExam from "./components/UseCallbackExam";
import UseMemoExam from "./components/UseMemoExam";
import UseReducerExam from "./components/UseReducerExam";
import Video from "./components/Video";
import { useClock } from "./hooks/useClock";
import { useRandomColor } from "./hooks/useRandomColor";

function App() {

  const [count, setCount] = useState(0)

  const handleIncrease = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  const videoRef = useRef()

  const handlePlay = () => {
    videoRef.current.play()
  }

  const handlePause = () => {
    videoRef.current.pause()
  }

  const { timeString } = useClock()
  const { color } = useRandomColor()

  return (
    <div style={{ padding: "50px" }}>
      <UseCallbackExam onIncrease={handleIncrease} />
      <h1>{count}</h1>
      {/* <UseMemoExam />
      <Video ref={videoRef}/>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <UseReducerExam/> */}
      {/* <h1>Now: {timeString}</h1> */}
      {/* <h1 style={{ color: `${color}` }}>
        Change color content
      </h1> */}
    </div>
  );
}

export default App;
