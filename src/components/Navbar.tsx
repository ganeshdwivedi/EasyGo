import { useState } from "react";
import Logo from "./Logos/Logo";
import { Link } from "react-router-dom";

const BtnClass =
  "bg-[#2A2E55] cursor-pointer py-1 px-4 font-medium rounded-sm text-white";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData || "null");
  console.log(user, "navbar user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <header className="bg-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between py-5 px-4 md:px-32">
        <Logo className="w-28" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-24">
          <ul
            className="flex gap-5 items-center
              [&>a]:text-[#2A2E55]
              [&>a]:font-medium
              [&>a]:cursor-pointer
              [&>a:hover]:text-blue-600"
          >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/delivery">Delivery</Link>
            <Link to="/contact">Contact Us</Link>
          </ul>

          {!user ? (
            <div className="flex items-center gap-3">
              <Link className={BtnClass} to="/auth">
                Login
              </Link>
              <Link className={BtnClass} to="/auth">
                Sign-Up
              </Link>
            </div>
          ) : (
            <button
              title={user?.email}
              onClick={handleLogout}
              className={BtnClass}
            >
              Logout{" "}
            </button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#2A2E55]"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-6 flex flex-col gap-6">
          <ul
            className="flex flex-col gap-4
              [&>a]:text-[#2A2E55]
              [&>a]:font-medium"
          >
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to="/delivery" onClick={() => setOpen(false)}>
              Delivery
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact Us
            </Link>
          </ul>

          {!user ? (
            <div className="flex flex-col gap-3">
              <Link className={BtnClass} to="/auth">
                Login
              </Link>
              <Link className={BtnClass} to="/auth">
                Sign-Up
              </Link>
            </div>
          ) : (
            <button
              title={user?.email}
              onClick={handleLogout}
              className={BtnClass}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
