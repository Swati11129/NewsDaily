import React from 'react'
import loading from '../spinner2.gif'
  const Spinner=()=>{
  // render() {
    return (
      <div className='text-center'>
        <img className='my-3' src={loading} alt='loading' />
      </div>
    )
}

export default Spinner