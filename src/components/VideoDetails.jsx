import React from 'react'
import { GoToTop } from '../utils/GotoTop'
import IntCurSystm from '../utils/intCurSystm'
import ReactPlayer from 'react-player'
import like from '../images/like.png'
import dislike from '../images/dislike.png'
import RelatedVideos from './RelatedVideos'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FetchDetails } from '../utils/FetchDetails'
import { getRelatedVids } from '../utils/GetRelatedVids'
const VideoDetails = () => {
  const [videoDetails, setVideoDetails] = useState({})
  const [relatedVids, setRelatedVids] = useState([])
  const { Vid } = useParams()
  useEffect(() => {
    FetchDetails(Vid).then((data) => {
      console.log('VideoDetails::', data)
      setVideoDetails(data)
    })
  }, [Vid])
  useEffect(() => {
    getRelatedVids(Vid).then((data) => {
      console.log('Related Videos::', data)
      setRelatedVids(data?.contents)
    })
    GoToTop()
  }, [Vid])
  return (
    <>
      <div className=" flex bg-slate-400 ">
        <div className="flex flex-col">
          <ReactPlayer
            url={`www.youtube.com/watch?v=${Vid}`}
            width={1100}
            height={550}
            controls={true}
          />
          <span className="text-2xl text-gray-900 font-bold p-2">
            {videoDetails?.title}
          </span>
          <div className="flex justify-between items-center">
            <span className="flex items-center py-2">
              <img
                className="rounded-full border border-gray-500"
                src={videoDetails?.author?.avatar[1]?.url}
                alt="Error 404"
              />
              <span className="flex flex-col px-3">
                <span className="font-extrabold">
                  {videoDetails?.author?.title}
                </span>
                <span>{videoDetails?.author?.stats?.subscribersText}</span>
              </span>
            </span>
            <span className="flex border p-2 items-center border-gray-600 gap-4 rounded-2xl">
              <button>
                <img src={like} alt="Error 404" />
              </button>
              {IntCurSystm(videoDetails?.stats?.likes)}
              <p className="text-3xl">|</p>
              <button>
                <img src={dislike} alt="Error 404" />
              </button>
            </span>
          </div>
          {/* <p className="">{videoDetails?.description}</p> */}
        </div>
        <div className="w-full">
          {relatedVids.map((video) => (
            <RelatedVideos
              thumbnail={video?.video?.thumbnails[0]?.url}
              proPic={video?.video?.author?.avatar[0]?.url}
              vTitle={video?.video?.title}
              cTitle={video?.video?.author?.title}
              published={video?.video?.publishedTimeText}
              views={video?.video?.stats?.views}
              length={video?.video?.lengthSeconds}
              vID={video?.video?.videoId}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default VideoDetails
