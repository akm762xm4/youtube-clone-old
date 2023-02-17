import React from 'react'

const ChannelCard = ({ thumbnail, channelTitle }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-2 pt-10">
        <img
          className="border border-separate border-black rounded-full"
          src={thumbnail}
        />
        <p className="text-2xl font-extrabold">{channelTitle}</p>
      </div>
    </>
  )
}

export default ChannelCard
