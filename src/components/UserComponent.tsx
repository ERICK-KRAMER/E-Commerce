import { UserRound } from "lucide-react";

const UserComponent = () => {
  return(
    <div className="user px-4 flex gap-2 items-center">
      <span className="avatar rounded-full bg-slate-400 w-10 h-10 flex justify-center items-center"><UserRound size={30}/></span>
      <span><p>Erick Kramer</p></span>
    </div>
  )
}
export default UserComponent;