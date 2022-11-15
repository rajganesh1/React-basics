import React, { useState } from 'react'
import useDocumentTitle from './Hooks/useDocumentTitle';

function DocTitle1() {
    const [count, setCount] = useState(0);
    useDocumentTitle(count);
  return (
    <div>
          <button onClick={()=>setCount(prevCount=>prevCount+1)}>count-{count}</button>
    </div>
  )
}

export default DocTitle1
