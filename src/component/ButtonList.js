import React from 'react'
import Button from './Button'

const ButtonList = () => {

const items = ["All", "Music", "Indian pop music", "News", "Recently Updated", "New to you", "Watched", "Idian idol", "Mixes", "Arjit singh", "Tamil cinema","Movie musicals"]

  return (
    <div className='flex text-base'>
      {items.map((item, index)=> <Button item = {item} key= {index}/>)}

    </div>
  )
}

export default ButtonList
