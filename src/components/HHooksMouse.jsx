import React,{useState,useEffect} from 'react'

function HHooksMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const logMousePosition = (e) => {
        console.log('Mouse Event');
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(() => {
        console.log('useEffectCalled');
        window.addEventListener('mousemove', logMousePosition);

        return (() => {
            console.log('xy unmount');
            window.removeEventListener('mousemove', logMousePosition);
        })
    },[])
  return (
      <div>
          Hooks x- {x} y-{y}
    </div>
  )
}

export default HHooksMouse