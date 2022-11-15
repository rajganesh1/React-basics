import React from 'react'

const heading = {
    fontSize: '40px',
    color: 'blue'
}

function Inline() {
  return (
      <div>
        <h3 className='error'>Error</h3>
          {/*<h3 className={styles.success}>Success</h3>*/}
          <h6 style={heading}>
              Inline
          </h6>
    </div>
  )
}

export default Inline

//.css can be used anywhere but .module.css can be used which is defined for someother component