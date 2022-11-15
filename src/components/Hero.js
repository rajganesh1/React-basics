import React from 'react'

function Hero({ heroName }) {
    if (heroName === 'joker') {
        throw new Error('Not hero');
    }
  return (
    <div>
      {heroName}
    </div>
  )
}

export default Hero
