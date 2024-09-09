import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";
import { assets } from "../assets/assets.js";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "COLLECTION", path: "/collection" },
  { name: "ABOUT", path: "/about" },
  { name: "CONTACT", path: "/contact" },
];

const dropdownItems = [
  { label: "Profile", link: "/profile" },
  { label: "Order", link: "/order" },
  { label: "Logout", link: "/logout" },
];

const Navbar = () => {
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium relative">
      <Link to="/">
        <img className="w-36" src={assets.logo} alt="Company Logo" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-slate-700">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="flex flex-col items-center gap-1"
          >
            <p>{item.name}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-slate-700 hidden" />
          </NavLink>
        ))}
      </ul>
      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt="Search Icon"
          className="w-5 cursor-pointer"
        />
        <Link to="/login">
          <div className="relative group">
            <img
              src={assets.profile_icon}
              alt="Profile Icon"
              className="w-5 cursor-pointer"
            />

            <div className="absolute right-0 mt-2 hidden group-hover:block bg-slate-100 text-slate-500 rounded shadow-lg">
              <div className="flex flex-col gap-2 py-3 px-5">
                {dropdownItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="cursor-pointer hover:text-slate-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Link>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="Cart Icon" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="Menu Icon"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      <div
        className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-slate-700">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              alt="Close Menu Icon"
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </div>
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-b text-slate-700 hover:bg-slate-100"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
