import BanerHomerpage from "../components/Home/banerHomerpage";
import Header from "../components/Header/header";
import PopUp from "../components/Home/popup";
import TrendingComponent from "../components/Home/TrendingComponent";
import Category from "../components/Home/category";
import AboutUS from "../components/Home/AboutUs";

export default function HomePage(){
  return (
    <>
      <Header/>
      <PopUp/>
      <BanerHomerpage/>
      <TrendingComponent name={'Trending Now'}/>
      <TrendingComponent name={'Deals of the Day'}/>
      <TrendingComponent name={'Trending Offers'}/>
      <BanerHomerpage/>
      <Category/>
      <AboutUS/>
    </>
  )
}