import React from 'react'

const Button = ({item}) => {
  return (
    <div>
        <button className='px-3 py-1 m-3 w-max border bg-gray-200 rounded-lg'>{item}</button>
      
    </div>
  )
}

export default Button
