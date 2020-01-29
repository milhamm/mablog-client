import React from "react"
import { Link } from "gatsby"

import Title from "./Title"

const Card = ({
  post: {
    frontmatter: { title, path, thumbnail },
  },
}) => {
  return (
    <div className="mb-6 mx-4 lg:flex-3 md:flex-3 sm:flex-2 flex-1">
      <div className="shadow-lg">
        <img
          className="rounded h-40 w-full object-cover"
          src={thumbnail}
          alt={title}
        />
      </div>
      <Link to={path}>
        <Title title={title} />
      </Link>
    </div>
  )
}

export default Card
