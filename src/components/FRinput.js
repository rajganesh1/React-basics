import React from 'react'

// function FRinput() {
//   return (
//     <div>
//       <input type='text' />
//     </div>
//   )
// }

const FRinput = React.forwardRef((props,ref) => {//ref is secondary parameter which is not involved with props
    return (
        <div>
            <input type='text' ref={ref} />
        </div>
    )
})

export default FRinput
