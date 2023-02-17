import Feed from './components/Feed'
import { Routes, Route } from 'react-router-dom'
import VideoDetails from './components/VideoDetails'
import ChannelDetails from './components/ChannelDetails'
import SearchFeed from './components/SearchFeed'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:Vid" element={<VideoDetails />} />
        <Route path="/channel/:Cid" element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </>
  )
}

export default App
