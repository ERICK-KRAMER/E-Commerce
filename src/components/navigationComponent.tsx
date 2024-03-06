const NavigationComponent = () => {
  return(
    <nav className=" max-[590px]:hidden">
      <ul className="flex gap-5">
        <li className="cursor-pointer">Men</li>
        <li className="cursor-pointer">Women</li>
        <li className="cursor-pointer">Kids</li>
        <li className="cursor-pointer">Shop</li>
        <li className="cursor-pointer">Contact us</li>
      </ul>
    </nav>
  )
}
export default NavigationComponent;