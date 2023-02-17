import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FetchFromAPI } from '../utils/FetchFromAPI'
import Videos from './Videos'
const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()
  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${searchTerm}&maxResults=20`).then(
      (data) => {
        console.log('data::', data.contents)
        setVideos(data?.contents)
      },
    )
  }, [searchTerm])
  return (
    <>
      <div className="bg-slate-400">
        <div>{`Search Results For ${searchTerm}`}</div>
        <Videos videos={videos} />
      </div>
    </>
  )
}

export default SearchFeed
