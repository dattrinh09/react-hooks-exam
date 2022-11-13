import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import UseCallbackExam from "./components/UseCallbackExam";
import UseCallbackExam2 from "./components/UseCallbackExam2";
import UseImperativeHandleExam from "./components/UseImperativeHandleExam";
import UseMemoExam from "./components/UseMemoExam";
import UseReducerExam from "./components/UseReducerExam";
import UseReducerExam2 from "./components/UseReducerExam2";
import UseReducerExam3 from "./components/UseReducerExam3";
import Video from "./components/Video";
import { useClock } from "./hooks/useClock";
import useFetch from "./hooks/useFetch";
import { useRandomColor } from "./hooks/useRandomColor";

function App() {

  // Context + useReducer exam

  // useCallBack exam
  // const [count, setCount] = useState(0)

  // const handleIncrease = useCallback(() => {
  //   setCount(prevCount => prevCount + 1)
  // }, [])

  // useImperativeHandle exam
  // const videoRef = useRef()

  // const handlePlay = () => {
  //   videoRef.current.play() 
  // }

  // const handlePause = () => {
  //   videoRef.current.pause()
  // }

  // Custom Hooks exam
  // const { timeString } = useClock()
  // const { color } = useRandomColor()

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //     .then(res => setData(res.data))
  // }, [])

  //const { data } = useFetch('https://jsonplaceholder.typicode.com/todos?_limit=10')

  return (
    <div style={{ padding: "50px" }}>
      {/* <UseCallbackExam onIncrease={handleIncrease} />
      <h1>{count}</h1> */}
      {/* <UseCallbackExam2 /> */}
      {/* <UseMemoExam />
      <Video ref={videoRef}/>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button> */}
      {/* <UseReducerExam/> */}
      {/* <h1>Now: {timeString}</h1> */}
      {/* <h1 style={{ color: `${color}` }}>
        Change color content
      </h1> */}

      {/* <h2>Custom Hooks Exam 2</h2>
      <ul>
        {data.map( item => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul> */}

      <h2>useReducer Exam</h2>
      <UseReducerExam2 />
      {/* <UseReducerExam3 /> */}
      {/* <UseImperativeHandleExam /> */}
    </div>
  );
}

export default App;
