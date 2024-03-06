import BanerHomerpage from "../components/banerHomerpage";
import Header from "../components/Header/header";

export default function HomePage(){
  return (
    <>
      <Header/>
      <div className="bg-zinc-300 p-1 flex justify-center items-center"> <p>erick kramer</p></div>
      <BanerHomerpage/>
    </>
  )
}