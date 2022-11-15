import React, { useContext } from 'react'
import { CountContext } from './ContextParent'

export const ChildA = () => {
    console.log('Child A render')
  return (
    <div>
          Child A
          <ChildB />
    </div>
  )
}

export const MemoizedChildA = React.memo(ChildA);

export const ChildB = () => {
    console.log('Child B render')
  return (
    <div>
          Child B
          <ChildC >Hello</ChildC>
    </div>
  )
}
export const MemoizedChildB = React.memo(ChildB);

export const ChildC = ({children}) => {
    const Count = useContext(CountContext);
    console.log('Child C render')
  return (
    <div>
      Child C count={Count}
    </div>
  )
}
export const MemoizedChildC = React.memo(ChildC);

