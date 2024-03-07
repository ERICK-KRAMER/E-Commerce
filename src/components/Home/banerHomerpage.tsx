import img from "../../../public/Baner-Prada-Homepage(1).png"
import img1 from "../../../public/Baner-Forever-21-Homepage.png"
import img2 from "../../../public/Baner-Forever-21-(2)-Homepage.png"
import Carrosel from "./Carrosoel";
import Image from "./Image";


const BanerHomerpage = () => {
  return(
    <Carrosel autoSlide={true} autoSlideInterval={3000}>
      <Image Img={ img }/>
      <Image Img={ img1 }/>
      <Image Img={ img2 }/>
    </Carrosel>
  )
}
export default BanerHomerpage;