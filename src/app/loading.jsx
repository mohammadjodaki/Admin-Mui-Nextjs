import React from 'react'
import Image from 'next/image'
import img from './Image/Spinner@1x-1.0s-200px-200px.svg'

const loading = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <Image width={150} height={150} alt='loading' src={img}/>
    </div>
  )
}

export default loading