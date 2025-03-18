import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-white shadow-md">
      {/* Logo */}
      <h1 className="text-xl font-bold text-gray-900">Recipe Calories</h1>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700">
        <li className="hover:text-gray-900 cursor-pointer">Home</li>
        <li className="hover:text-gray-900 cursor-pointer">Recipes</li>
        <li className="hover:text-gray-900 cursor-pointer">About</li>
        <li className="hover:text-gray-900 cursor-pointer">Search</li>
      </ul>

      {/* Search Bar & Profile Icon */}
      <div className="flex items-center space-x-4">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 focus:outline-none"
          />
          <span className="absolute left-3 ml-40 top-2 text-gray-500">
            🔍
          </span>
        </div>

        {/* Profile Icon */}
        <div className="w-10 h-10 flex justify-center items-center bg-green-400 text-black rounded-full cursor-pointer">
          <FaRegUser size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
