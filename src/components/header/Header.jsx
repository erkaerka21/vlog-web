import MenuHeader from "./Header-menu";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <div className="px-40 py-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center gap-x-1">
          <img src="/Union.png" alt="zuraglogo1" className="h-7 w-7" />
          Meta<strong>Blog</strong>
        </div>
        <MenuHeader />

        <label class="relative">
          <input
            className=" placeholder:text-gray-600 block bg-gray-100 w-full border border-gray-100 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search"
            type="text"
            name="search"
          />

          <IoSearch className="h-5 w-5 absolute right-2 bottom-2 text-gray-400"></IoSearch>
        </label>
      </div>
    </div>
  );
};
export default Header;
