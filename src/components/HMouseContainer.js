import React,{useState} from 'react'
import HHooksMouse from './HHooksMouse';

function HMouseContainer() {
    const [display, setDisplay] = useState(true);
  return (
      <div>
          <button onClick={() => setDisplay(!display)}>Toggle display</button>
          {display && <HHooksMouse />}
    </div>
  )
}

export default HMouseContainer