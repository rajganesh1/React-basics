import React from 'react'

function MemoComp({ name }) {
    console.log('MemoComp');
    return (
    <div>
            {name}
    </div>
  )
}

export default React.memo(MemoComp)//higher order component-> equivalent to purecomponent for functions
