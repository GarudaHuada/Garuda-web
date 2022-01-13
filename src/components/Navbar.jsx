import { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="shadow-md">
      <nav className="container mx-auto py-2 px-4 flex justify-between items-center font-medium relative min-h-[7vh]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-16 lg:w-20" />
        </Link>
        <button
          className="flex justify-center items-center md:hidden z-50"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
              <g fill="currentColor" fillRule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
              <g fill="currentColor" fillRule="evenodd">
                <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
              </g>
            </svg>
          )}
        </button>
        <ul
          className={`${
            open ? "translate-y-0" : "-translate-y-full"
          } flex absolute flex-col top-0 right-0 p-5 pt-16 gap-6 bg-white transition duration-200 md:transform-none md:transition-none md:static md:flex md:p-0 md:flex-row md:items-center md:gap-14 `}
        >
          <li className="p-3 pr-6 md:p-0 cursor-pointer">
            <Link
              to="/"
              className={(navData) =>
                navData.isActive ? "border-b-2 border-gray-900 py-1" : "py-1"
              }
              onClick={() => setOpen((prev) => !prev)}
            >
              Home
            </Link>
          </li>
          <li className="p-3 pr-6 md:p-0 cursor-pointer">
            <Link
              to="/about"
              className={(navData) =>
                navData.isActive ? "border-b-2 border-gray-900 py-1" : "py-1"
              }
              onClick={() => setOpen((prev) => !prev)}
            >
              Tentang Kami
            </Link>
          </li>
          <li onClick={() => setOpen((prev) => !prev)}>
            <a
              href="#footer"
              className="p-3 pr-6 md:border-0 md:transition-none md:px-8 md:py-3 md:bg-gray-900 md:text-white cursor-pointer"
            >
              Kontak
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
