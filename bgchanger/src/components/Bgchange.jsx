import React, { useState } from 'react'

export default function Bgchange() {
    const [color, setColor] = useState('')
  return (
    <>
    <div style={{backgroundColor: color}}>
      <h1>Click button to change background Color</h1>
    </div>
    <div className='buttons flex '>
        <button className='btn btn-sm' style={{backgroundColor:'red'}} onClick={() => setColor('red')}>Red</button>
        <button className='btn btn-sm' style={{backgroundColor:'green'}} onClick={() => setColor('green') }>Green</button>
        <button className='btn btn-sm' style={{backgroundColor:'blue'}} onClick={() => setColor('blue') }>Blue</button>
        
    </div>
    </>
    
  )
}
