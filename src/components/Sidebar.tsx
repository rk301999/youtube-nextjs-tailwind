import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className=' hidden lg:block col-span-2  '>
      <div className='flex flex-col gap-4 w-full overflow-scroll max-h-screen'>
      <First/>
      <Linebreak/>
      <Common type="You"/>
      <Linebreak/>
      <Common type="Subscriptions"/>
      <Linebreak/>
      <Explore/>
      <Linebreak/>
      <p>© 2024 Google LLC</p>
      </div>
    </div>
  )
}

export const Explore=()=>{
  return <div>
    <p className='inline-flex items-center gap-1 text-lg font-semiBold'>Explore <span><FaChevronRight/></span></p>
    <div className='flex flex-col gap-3 mt-4'>
    <Item img={<IoHomeOutline/>} name="Trending"/>
    <Item img={<IoHomeOutline/>} name="Shoping"/>
    <Item img={<IoHomeOutline/>} name="Music"/>
    <Item img={<IoHomeOutline/>} name="Movies"/>
    <Item img={<IoHomeOutline/>} name="Live"/>
    <Item img={<IoHomeOutline/>} name="Gaming"/>
    <Item img={<IoHomeOutline/>} name="News"/>
    <Item img={<IoHomeOutline/>} name="Sports"/>
    <Item img={<IoHomeOutline/>} name="Courses"/>
  </div>
  </div>
}

export const Item =(props:any)=>{
  return <div className='flex items-center  gap-6 text-lg font-semiBold '>
    <div>{props.img}</div>
    <p>{props.name}</p>
  </div>
}

export const First =()=>{
  return <div className='flex flex-col gap-3'>
    <Item img={<IoHomeOutline/>} name="Home"/>
    <Item img={<IoHomeOutline/>} name="Shorts"/>
    <Item img={<IoHomeOutline/>} name="Subscriptions"/>
  </div>
}

export const Linebreak =()=>{
  return <div className=' w-[85%] border-b-[1px] border-gray-500'>

  </div>
}

export const Common =(props:any)=>{
  return <div>
    <p className='inline-flex items-center gap-1 text-lg font-semiBold'>{props.type} <span><FaChevronRight/></span></p>
    <div className='flex flex-col gap-3 mt-4'>
    <Item img={(props.type==="You")?<IoHomeOutline/>:<img src="https://images.unsplash.com/photo-1718095744838-dace5469b218?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-8 h-8 rounded-full' alt="" />} name="Your Channel"/>
    <Item img={(props.type==="You")?<IoHomeOutline/>:<img src="https://images.unsplash.com/photo-1718095744838-dace5469b218?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-8 h-8 rounded-full' alt="" />} name="History"/>
    <Item img={(props.type==="You")?<IoHomeOutline/>:<img src="https://images.unsplash.com/photo-1718095744838-dace5469b218?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-8 h-8 rounded-full' alt="" />} name="Playlists"/>
    <Item img={(props.type==="You")?<IoHomeOutline/>:<img src="https://images.unsplash.com/photo-1718095744838-dace5469b218?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-8 h-8 rounded-full' alt="" />} name="Your videos"/>
    <Item img={(props.type==="You")?<IoHomeOutline/>:<img src="https://images.unsplash.com/photo-1718095744838-dace5469b218?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-8 h-8 rounded-full' alt="" />} name="Watch later"/>
    <Item img={(props.type==="You")?<IoHomeOutline/>:<img src="https://images.unsplash.com/photo-1718095744838-dace5469b218?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-8 h-8 rounded-full' alt="" />} name="Liked videos"/>
  </div>
  </div>
}


export default Sidebar
