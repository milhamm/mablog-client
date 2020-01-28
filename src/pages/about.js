import React from "react"
import Card from "../components/Card"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"

const About = () => {
  return (
    <>
      <SEO title="Page About" />
      <Navbar />
      <div className="container mx-auto p-2 flex flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default About
