import { Link } from "react-router-dom";
import icon from "../assets/icon.png";
const Navbar = () => {
  return (
    <>
      <div className="outline outline-4 outline-green-950 border w-[70%] p-2 py-1 tracking-tight text-yellow-600 rounded-2xl mb-10 bg-[#a7886c] text-lg px-4 flex items-center justify-between ">
        <Link to="/" className="flex justify-center items-center w-[23%] rounded-lg p-1 border bg-gradient-to-t from-black via-black to-blue-950">
          <img
            src={icon}
            alt="icon"
            className="h-14 w-[25%] border-2 bg-black border-gray-800 mx-1 rounded-xl"
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
