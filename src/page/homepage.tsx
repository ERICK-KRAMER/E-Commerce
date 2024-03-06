import BanerHomerpage from "../components/Home/banerHomerpage";
import Header from "../components/Header/header";
import PopUp from "../components/Home/popup";

export default function HomePage(){
  return (
    <>
      <Header/>
      <PopUp/>
      <BanerHomerpage/>
    </>
  )
}