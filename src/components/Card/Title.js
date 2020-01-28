import React from "react"
import PropTypes from "prop-types"

const Title = ({ title }) => {
  return (
    <h1 className="text-xl tracking-wide font-light leading-relaxed">
      {title}
    </h1>
  )
}

Title.propTypes = {
  title: PropTypes.string,
}

export default Title
