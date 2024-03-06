import { Heart, ShoppingCart, Menu } from "lucide-react"
import SearchComponent from "./SearchComponent"
import LogoComponent from "./LogoComponent"
import NavigationComponent from "./navigationComponent"
import UserComponent from "./UserComponent"

export default function Header() {
  return (
    <header className=" h-20 flex bg-white items-center justify-between px-5 text-zinc-950">
      <LogoComponent/>
      <NavigationComponent/>
      <div className="flex gap-8 items-center max-[1281px]:hidden">
        <SearchComponent/>
        <Heart size={23}/>
        <ShoppingCart size={23}/>
        <UserComponent/>
      </div>
      <div className="w-20 hidden justify-center items-center max-xl:flex">
        <Menu size={30} className=" cursor-pointer"/>
      </div>
      
    </header>
  )
}