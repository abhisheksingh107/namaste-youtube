import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";


const Head = () => {
  const dispatch = useDispatch();

  const handleBarMenu = () => {
    dispatch(toggleMenu());
    
  };

  return (
    <div className="flex justify-evenly p-1 shadow-lg">
      {/* you tube Bar */}

      <div className="flex h-6 font-semibold text-xl m-2 ">
        <i onClick={handleBarMenu} className="fa-solid fa-bars p-1 cursor-pointer"></i>
        <div className="w-24 flex ml-5">
          <i className="fa-brands fa-youtube text-red-700 text-2xl"></i>
          <span>Premium</span>
        </div>
      </div>

      {/* Search icon and microPhone */}

      <div className="flex text-lg w-full justify-center p-1">
        <div className="w-1/2 h-10 px-2 border border-black rounded-xl flex">
          <i className="fa-solid fa-magnifying-glass p-3"></i>
          <input
            className="w-[90%] items-center focus:outline-none"
            type="text"
            placeholder="Search"
          />
          <button>
            <i className="fa-solid fa-magnifying-glass text-2xl p-1"></i>
          </button>
        </div>
        <i className="fa-solid fa-microphone p-3 border h-10 w-10 rounded-full mx-5 bg-gray-200"></i>
      </div>

      {/* user Info */}

      <div className="flex justify-end m-5 text-lg">
        <i className="fa-solid fa-user"></i>
      </div>
    </div>
  );
};

export default Head;
