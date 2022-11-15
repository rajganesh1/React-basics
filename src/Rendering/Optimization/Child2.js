import React from 'react'

export const Child2 = ({name}) => {
    console.log('childTwo render');
  return (
    <div>
      Child component {name}
    </div>
  )
}

export const MemoizedChild2 = React.memo(Child2);

//memo does a shallow comparison between cuu and prev props
//just to avoid unnecessary rerender of child component