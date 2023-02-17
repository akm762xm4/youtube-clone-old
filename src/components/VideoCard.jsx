import React from 'react'
import intCurSystm from '../utils/intCurSystm'
import SecToHMS from '../utils/secToHMS'
import { Link } from 'react-router-dom'
const VideoCard = ({
  thumbnail,
  proPic,
  vTitle,
  cTitle,
  published,
  views,
  length,
  vID,
}) => {
  return (
    <Link to={`/video/${vID}`}>
      <div className="flex flex-col border border-gray-700 bg-[#c7cbcf5c] rounded-lg">
        <div className=" relative">
          <img
            className="w-full rounded-t-lg -z-10"
            src={thumbnail}
            alt="Error 404"
          />
          <div>
            <p className="bg-[#000000ab] absolute bottom-0 right-0 text-white mb-[3px] mr-[3px] rounded-md z-10">
              {SecToHMS(length)}
            </p>
          </div>
        </div>

        <div className="flex p-3">
          <div className="flex flex-col mr-[6px]">
            <img
              className="w-20 rounded-full border border-black "
              src={proPic}
              alt="Error 404 !"
            />
          </div>
          <span className="flex flex-col">
            <div>{vTitle.substr(0, 60)}</div>
            <div className="text-[#173157] font-bold">{cTitle}</div>
            <div className="flex ">
              <span>{intCurSystm(views)}</span>
              <span className="font-extrabold">&nbsp;&middot;&nbsp;</span>
              <span>{published}</span>
            </div>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard
