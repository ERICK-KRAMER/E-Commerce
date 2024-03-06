import img from "../../../public/Baner-Prada-Homepage(1).png"
import img1 from "../../../public/Baner-Forever-21-Homepage.png"
import Carrosel from "./Carrosoel";

const Baners = [
  img,
  img1
]

const BanerHomerpage = () => {
  return(
    <Carrosel autoSlide={true} autoSlideInterval={3000}>
      {Baners.map(item => (
        <img src={item} alt="Baner" key={item}/>
      ))}
    </Carrosel>
  )
}
export default BanerHomerpage;