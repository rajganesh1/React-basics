/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useMemo} from 'react'

function Counter11() {
    const [c1, setc1] = useState(0);
    const [c2, setc2] = useState(0);

    const increment1 = () => {
        setc1(c1 + 1);
    }
    const increment2 = () => {
        setc2(c2 + 1);
    }

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) {
            i++;
        }
        return c1 % 2 === 0;
    }, [c1]);

  return (
    <div>
          <div>
              <button onClick={increment1}>Count1-{c1}</button>
              <span>{isEven ? "Even":"Odd"}</span>
          </div>
          <div>
              <button onClick={increment2}>Count2-{c2}</button>
              {/* <span>{isEven(c2) ? "Even":"Odd"}</span> */}
      </div>
    </div>
  )
}

export default Counter11
