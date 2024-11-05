'use client'
import React from 'react'
import  { Watch } from 'react-loader-spinner'
  
function Loading() {
  return (
    <div className='flex justify-center flex-col h-full items-center'>
      <h1 className='lg:text-3xl md:text-2xl text-xl '>Please Wait ...</h1>
      
      <Watch visible={true} height="80" width="80" radius="48" color="#7AB2D3" ariaLabel="watch-loading"/>
    </div>
  )
}

export default Loading