import React from "react"
import Title from "./Title"

const Card = () => {
  return (
    <div className="mb-6 mx-4 lg:flex-3 md:flex-3 sm:flex-2 flex-1">
      <div className="shadow-lg">
        <img
          className="rounded h-40 w-full object-cover"
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          alt="header"
        />
      </div>
      <Title title="Ahoy nibba" />
    </div>
  )
}

export default Card
