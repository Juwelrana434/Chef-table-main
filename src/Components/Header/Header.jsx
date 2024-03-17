import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
const Header = () => {
    return (
        <div className="lg:mx-12">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>Recipes </a></li>
        <li><a>About </a></li>
        <li><a>Search</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold">Recipe Calories</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a>Home</a></li>
        <li><a>Recipes </a></li>
        <li><a>About </a></li>
        <li><a>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="flex items-center rounded-full bg-gray-100 p-2"><CiSearch />
  <input type="text" placeholder="Search" className="rounded-full bg-gray-100 ml-2 w-24"/></div>
  <span className="m-4 bg-green-400 p-2 rounded-full"><FaRegUserCircle /></span>
  </div>
</div>
        </div>
    );
};

export default Header;