import React from "react"
import { Link } from "gatsby"

const Nav = () => (
  <div className="bg-gray-600 flex justify-between px-16 items-center text-white w-full">
    <div className="w-1/3 flex justify-between items-center">
      <Link to="../">Home</Link>
      <Link to="../contact/">Contact Us</Link>
      <Link to="../about/"> About</Link>
      <Link to="../blog/">Blog</Link>
    </div>
  </div>
)

export default Nav
