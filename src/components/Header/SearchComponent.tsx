import { Search } from "lucide-react"
const SearchComponent = () => {
  return(
    <>
      <div className=" bg-zinc-400 relative h-11 w-52 flex items-center rounded md:w-96 sm:w-72 lg:w-[534px] text-zinc-950">
        <input type="text" className=" w-full h-full outline-none p-2 text-lg rounded pr-10 pl-2 bg-zinc-300" placeholder="Search here"/>
        <Search  className=" absolute top-3 right-3"/>
      </div>
    </>
  )
}
export default SearchComponent;