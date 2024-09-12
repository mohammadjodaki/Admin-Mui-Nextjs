import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Features() {
  return (
    <div className='flex justify-between flex-wrap gap-5 mt-5'>
    <div className='w-full md:w-1/3 lg:w-72 rounded-xl h-48 bg-white shadow-lg'>
      <h2 className='flex justify-center text-black text-xl font-bold mt-5'>Revanue</h2>
      <div className='flex justify-around m-5'>
        <span className='text-black text-xl font-bold'>$3,500</span>
        <span className='text-red-500'>-10.5%<ArrowDownwardIcon className='ml-2'/></span>
      </div>
      <span className='flex justify-center text-lg text-gray-400'>compared to last month</span>
    </div>
    <div className='w-full md:w-1/3 lg:w-72 rounded-xl h-48 bg-white shadow-lg'>
      <h2 className='flex justify-center text-black text-xl font-bold mt-5'>Sales</h2>
      <div className='flex justify-around m-5'>
        <span className='text-black text-xl font-bold'>$7,000</span>
        <span className='text-green-500'>20.1%<ArrowUpwardIcon className='ml-2'/></span>
      </div>
      <span className='flex justify-center text-lg text-gray-400'>compared to last month</span>
    </div>            
    <div className='w-full md:w-1/3 lg:w-72 rounded-xl h-48 bg-white shadow-lg'>
      <h2 className='flex justify-center text-black text-xl font-bold mt-5'>Cost</h2>
      <div className='flex justify-around m-5'>
        <span className='text-black text-xl font-bold'>$1,200</span>
        <span className='text-red-500'>-30.5%<ArrowDownwardIcon className='ml-2'/></span>
      </div>
      <span className='flex justify-center text-lg text-gray-400'>compared to last month</span>
    </div>
    <div className='w-full md:w-1/3 lg:w-72 rounded-xl h-48 bg-white shadow-lg'>
      <h2 className='flex justify-center text-black text-xl font-bold mt-5'>Total task</h2>
      <div className='flex justify-around m-5'>
        <span className='text-black text-xl font-bold'>$5,500</span>
        <span className='text-green-500'>5%<ArrowUpwardIcon className='ml-2'/></span>
      </div>
      <span className='flex justify-center text-lg text-gray-400'>compared to last month</span>
    </div>
  </div>
  )
}

export default Features