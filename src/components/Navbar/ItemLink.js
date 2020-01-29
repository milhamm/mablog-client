import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ItemLink = ({ isTransparent, name, link }) => {
  return (
    <div
      className={`font-sans ${
        isTransparent ? "text-white" : "text-black"
      } ml-8`}
    >
      <AniLink fade to={link}>
        {name}
      </AniLink>
    </div>
  )
}

export default ItemLink
