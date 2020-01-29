import React from "react"
import { Link } from "gatsby"
import ItemLink from "./ItemLink"

const Navbar = ({ isTransparent = false }) => {
  return (
    <nav
      className={`flex items-center justify-between flex-wrap ${
        isTransparent ? "bg-transparent" : "bg-white"
      } p-6 ${isTransparent ? "fixed" : null} z-50 w-full`}
    >
      <Link to="/">
        <div
          className={`flex items-center flex-shrink-0 ${
            isTransparent ? "text-white" : "text-black"
          }`}
        >
          <span className="font-sans text-xl tracking-tight">Mablog</span>
        </div>
      </Link>
      <div
        className={`flex  items-center ${
          isTransparent ? "text-white" : "text-black"
        }`}
      >
        <ItemLink isTransparent={isTransparent} name="About" link="/about" />
        <ItemLink isTransparent={isTransparent} name="Blog" link="/post" />
      </div>
    </nav>
  )
}

export default Navbar
