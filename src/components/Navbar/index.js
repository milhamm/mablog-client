import React from "react"

const Navbar = () => {
  return (
    <ul class="flex h-">
      <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="#">
          <h1>Active</h1>
        </a>
      </li>
      <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="#">
          Link
        </a>
      </li>
      <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="#">
          Link
        </a>
      </li>
      <li class="mr-6">
        <a class="text-gray-400 cursor-not-allowed" href="#">
          Disabled
        </a>
      </li>
    </ul>
  )
}

export default Navbar
