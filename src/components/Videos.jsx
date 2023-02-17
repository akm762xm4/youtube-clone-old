import React from 'react'
import Loader from './Loader'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import { useNavigate } from 'react-router-dom'

const Videos = ({ videos }) => {
  const navigate = useNavigate()
  if (!videos.length) return <Loader />
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
      {videos.map((video, i) => (
        <div key={i}>
          {video.video && (
            // <button onClick={navigate(`/video/${video?.video?.videoId}`)}>
            <VideoCard
              thumbnail={video?.video?.thumbnails[0]?.url}
              proPic={video?.video?.author?.avatar[0]?.url}
              vTitle={video?.video?.title}
              cTitle={video?.video?.author?.title}
              published={video?.video?.publishedTimeText}
              views={video?.video?.stats?.views}
              length={video?.video?.lengthSeconds}
              vID={video?.video?.videoId}
            />
            // </button>
          )}
          {video.channel && (
            // <button onClick={`/channel/${video?.channel?.channelId}`}>
            <ChannelCard
              thumbnail={video?.channel?.avatar[1]?.url}
              channelTitle={video?.channel?.title}
              cID={video?.channel?.channelId}
            />
            // </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default Videos
