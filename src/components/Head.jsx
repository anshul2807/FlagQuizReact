import React from 'react'
import './css/Head.css'
function Head() {
  let score=120;
  return (
    <div className='head'>
      <div className="head-1">
          Guess the Flag ?
      </div>
      <div className="head-2">
          Score : <span className='score'>{score}</span>
      </div>
    </div>
  )
}

export default Head