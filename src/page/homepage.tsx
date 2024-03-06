import BanerHomerpage from "../components/Home/banerHomerpage";
import Header from "../components/Header/header";
import PopUp from "../components/Home/popup";
import TrendingComponent from "../components/Home/TrendingComponent";
import Baner from "../components/Home/Baner";
import Image from "../../public/Baner-Forever-21-(2)-Homepage.png"

export default function HomePage(){
  return (
    <>
      <Header/>
      <PopUp/>
      <BanerHomerpage/>
      <TrendingComponent name={'Trending Now'}/>
      <TrendingComponent name={'Deals of the Day'}/>
      <TrendingComponent name={'Trending Offers'}/>
      <Baner Img={ Image } className={ `mt-4` }/>
    </>
  )
}