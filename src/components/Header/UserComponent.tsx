// import { UserRound } from "lucide-react";
import userImage from "../../../public/User.png"

const UserComponent = () => {
  return(
    <div className="user px-4 flex gap-2 items-center">
      <span className="avatar rounded-full bg-slate-400 w-10 h-10 flex justify-center items-center">
        {/* <UserRound size={30}/> */}
        <img src={ userImage } alt="User-Image" />
      </span>
      <span><p>Anne Doe</p></span>
    </div>
  )
}
export default UserComponent;