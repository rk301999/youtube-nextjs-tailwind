import React from 'react'
import VideoCard from './VideoCard'
const videos=[
    {
        title :"HeroPanti : Wistle(Hindi) || Full Song",
        views :"42",
    },
    {
        title :"Let me Go : blinders(English) || Full Song",
        views :"45",
    },
    {
        title :"Code song Hndi Parody|| Full Song",
        views :"13",
    },
    {
        title :"Devops beginner || Full Course || Zero to hero",
        views :"33",
    },
    {
        title :"Pee Loo(Hindi) || Full Song",
        views :"73",
    },
    {
      title :"Pee Loo(Hindi) || Full Song",
      views :"73",
  },
  {
    title :"Pee Loo(Hindi) || Full Song",
    views :"73",
},
{
  title :"Pee Loo(Hindi) || Full Song",
  views :"73",
},
{
  title :"Pee Loo(Hindi) || Full Song",
  views :"73",
},
{
  title :"Pee Loo(Hindi) || Full Song",
  views :"73",
},
{
  title :"Pee Loo(Hindi) || Full Song",
  views :"73",
},
{
  title :"Pee Loo(Hindi) || Full Song",
  views :"73",
},
{
  title :"Pee Loo(Hindi) || Full Song",
  views :"73",
},
{
  title :"Pee Loo(Hindi) || Full Song",
  views :"73",
},

]

const VideoGrid = () => {
  return (
    <div className="col-span-10 max-lg:col-span-12">
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4  max-h-screen overflow-scroll'>
      {videos.map((item,index)=>{
        return <VideoCard key={index} title={item.title} views={item.views}/>
      })}
    </div>
    </div>
  )
}

export default VideoGrid
