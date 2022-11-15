import React from 'react'

export const Child3 = ({children,name}) => {
    console.log('childThree render');
  return (
    <div>
      {children}  {name}
    </div>
  )
}

export const MemoizedChild3 = React.memo(Child3);

//no need to wrap the child with memo if the child itself has children elements

