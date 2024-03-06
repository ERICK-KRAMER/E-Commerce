import img from "../../../public/Baner-Prada-Homepage(1).png"
import img1 from "../../../public/Baner-Forever-21-Homepage.png"
import Carrosel from "./Carrosoel";
import Baner from "./Baner";


const BanerHomerpage = () => {
  return(
    <Carrosel autoSlide={true} autoSlideInterval={3000}>
      <Baner Img={ img }/>
      <Baner Img={ img1 }/>
    </Carrosel>
  )
}
export default BanerHomerpage;