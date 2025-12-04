import { Link } from "react-router-dom";
import icon from "../assets/icon.png";
const Navbar = () => {
  return (
    <>
      <div className="outline outline-4 outline-green-950 border w-[70%] p-2 tracking-tight text-amber-950 rounded-2xl mb-10 bg-[#a7886c] text-lg px-4 flex items-center justify-between ">
        <Link to="/" className="flex justify-start items-center w-[30%]">
          <img
            src={icon}
            alt="icon"
            className="h-10 w-[15%] border-2 bg-black text-yellow-500 border-gray-800 mx-1 rounded-xl"
          />
          YemmyResuMate
        </Link>
        <Link to="/upload" className="primary-button w-fit">
          <div className="btn">Upload Resume</div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
