import { X } from "lucide-react";

const PopUp = () => {
  return (
    <div className="bg-zinc-200 p-1 flex justify-center items-center relative h-10">
      <p className="max-[610px]:text-sm ">Invite Friends and get 50% off on your next purchase! <span className=" text-blue-500 hover:underline"><a href="">Invite Now</a></span></p>
      <X className=" absolute right-4 text-zinc-500 cursor-pointer"/>
    </div>
  )
}
export default PopUp;