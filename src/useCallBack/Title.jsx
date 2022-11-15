import React from 'react'

function Title() {
    console.log('Rendering title');
  return (
    <h3>
      useCallback Hook
    </h3>
  )
}

export default React.memo(Title)
