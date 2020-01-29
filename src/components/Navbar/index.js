import React from "react"
import { Link } from "gatsby"

const Navbar = ({ isTransparent = false }) => {
  return (
    <nav
      className={`shadow flex items-center justify-between flex-wrap ${
        isTransparent ? "bg-transparent" : "bg-white"
      } p-6 ${isTransparent ? "fixed" : null} z-50 w-full`}
    >
      <Link to="/">
        <div
          className={`flex items-center flex-shrink-0 ${
            isTransparent ? "text-white" : "text-black"
          }`}
        >
          <span className="font-semibold text-xl tracking-tight">Aang</span>
        </div>
      </Link>
      <div
        className={`flex  items-center ${
          isTransparent ? "text-white" : "text-black"
        }`}
      >
        <div
          className={`font-sans ${isTransparent ? "text-white" : "text-black"}`}
        >
          <Link to="/post">Link</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
