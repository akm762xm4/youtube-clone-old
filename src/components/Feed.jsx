import React, { useState, useEffect } from 'react'
//Comps::
import Navbar from './Navbar'
import Videos from './Videos'
// utils::
import { FetchFromAPI } from '../utils/FetchFromAPI'
const Feed = () => {
  const [videos, setVideos] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('new')

  // const handleInfiniteScroll = () => {
  //   try {
  //     console.log('InnerHeight::', window.innerHeight)
  //     console.log('ScrollTop::', document.documentElement.scrollTop)
  //     console.log('ScrollHeight::', document.documentElement.scrollHeight)
  //   } catch (error) {
  //     console.log('Error::', error)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleInfiniteScroll)
  // }, [])

  useEffect(() => {
    setVideos([])
    FetchFromAPI(
      `search?part=snippet&q=${selectedCategory}&maxResults=20`,
    ).then((data) => setVideos(data?.contents))
    // .then((data) => console.log('New data::', data))
  }, [selectedCategory])
  console.log('Videos::', videos)
  // console.log('proPics::', videos[0]?.video?.author?.avatar[0]?.url)
  return (
    <>
      <Navbar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="bg-slate-400">
        <Videos videos={videos} />
      </div>
    </>
  )
}

export default Feed
