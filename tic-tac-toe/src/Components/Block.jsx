import React from 'react'


function Block(props) {
  console.log("props", props);
  return (
    <div className='block' onClick={props.onClick}>
      {props.value}
    </div>
  )
}

export default Block
