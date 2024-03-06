import BanerHomerpage from "../components/Home/banerHomerpage";
import Header from "../components/Header/header";
import PopUp from "../components/Home/popup";
import TrendingComponent from "../components/Home/TrendingComponent";

export default function HomePage(){
  return (
    <>
      <Header/>
      <PopUp/>
      <BanerHomerpage/>
      <TrendingComponent/>
    </>
  )
}