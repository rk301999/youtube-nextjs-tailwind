import React from 'react'

const VideoCard = (props:any) => {
  return (
    <div className='   rounded-lg overflow-hidden'>
      <img src="https://images.unsplash.com/photo-1718095744838-dace5469b218?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className="grid grid-cols-6 w-full gap-2">
        <div className=' col-span-1 self-center justify-self-center'>
        <img src="https://images.unsplash.com/photo-1718095744838-dace5469b218?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-10 h-10 rounded-full' />
        </div>
        <div className=' col-span-5 '>
            <p>{props.title} </p>
            <p className='text-gray-500 text-base'>Ritesh </p>
            <p className='text-gray-500 text-base'>{props.views}M views | 13 days ago  </p>
        </div>

      </div>
    </div>
  )
}

export default VideoCard
