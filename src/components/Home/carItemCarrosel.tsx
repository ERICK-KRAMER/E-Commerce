import imgCard from "../../../public/imageItem(1).png"

const CardItemCarrosel = () => {
  return(
    <div className="w-80 h-80 bg-zinc-200 rounded-md">
      <img src={ imgCard } alt="ImageTest" />
      <div className="p-1 pl-3 flex flex-col justify-center">
        <h1>Womens Denim Jacket</h1>
        <small>Brand Name</small>
        <div className="flex gap-3">
          <span>$189.99</span>
          <span className="line-through opacity-50">$269.99</span>
          <span className="text-green-600">(30% off)</span>
        </div>
      </div>
    </div>
  )
}
export default CardItemCarrosel;