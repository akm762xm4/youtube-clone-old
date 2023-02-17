import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState()
  const navigate = useNavigate()
  const onHandleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }
  return (
    <>
      <form className="flex justify-items-center " onSubmit={onHandleSubmit}>
        <input
          placeholder="Search..."
          className=" rounded-2xl px-4 text-lg font-extralight "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type={'submit'}
          className=" bg-[#282828] border-2 text-red-400 border-red-400 px-2 rounded-2xl"
        >
          Search
        </button>
      </form>
    </>
  )
}

export default SearchBar
