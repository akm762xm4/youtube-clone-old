import { Categories } from '../utils/Categories'
import SearchBar from './SearchBar'
const Navbar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <>
      <div className="flex justify-between text-2xl pt-2 bg-[#37475d] border-b-2 border-red-400 ">
        <span className="pl-2 flex gap-2">
          {Categories.map((category) => (
            <button
              key={category}
              className={`${
                selectedCategory === category ? 'text-red-500' : ''
              } capitalize`}
              onClick={() => {
                setSelectedCategory(category)
              }}
            >
              {category}
            </button>
          ))}
        </span>
        <span className="px-4">
          <SearchBar />
        </span>
      </div>
    </>
  )
}

export default Navbar
