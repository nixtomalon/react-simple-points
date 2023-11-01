import { useState } from 'react'
import './App.css'

function App() {
  const [points, setPoints] = useState([]);
  const [popPoints, setPopPoints] = useState([]);
  
  const handleOnclick = (e) => {
    const { clientX, clientY } = e;
    setPoints([...points, {
      x: clientX,
      y: clientY
    }]);
  }

  const handleUndo = () => {
    const pointsList = [...points];
    if(pointsList.length === 0) return;
    const popped = pointsList.pop();
    setPopPoints([...popPoints, popped]);
    setPoints(pointsList);
  }

  const handleRedo = () => {
    const pointsList = [...popPoints];
    if(pointsList.length === 0) return;
    const popped = pointsList.pop();
    setPoints([...points, popped]);
    setPopPoints(pointsList);
  }

  return (
    <>
      <button onClick={handleUndo}>undo</button>
      <button onClick={handleRedo}>Redo</button>
      <div className="app" onClick={handleOnclick}>
        {points.map((point, idx) => 
          <div key={idx} className="circle" style={{
            left: point.x + "px",
            top: point.y + "px",
          }}></div>
        )}
      </div>
    </>
  )
}

export default App
