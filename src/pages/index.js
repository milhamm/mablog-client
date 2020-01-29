import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from "../components/Button"

const IndexPage = () => (
  <Layout>
    <SEO title="Mablog" />
    <div className="flex container mx-auto lg:mt-2 lg:mt-32 flex-wrap px-6 sm:items-center mt-40">
      <div className="flex-1 md:flex-2 lg:mr-20">
        <h1 className="text-2xl lg:text-7xl lg:text-right text-left uppercase font-head tracking-tighter leading-relaxed">
          Muhammad Ilham Mubarak
        </h1>
        <div className="flex items-end justify-end">
          <Button />
        </div>
      </div>
      <div className="flex-1 md:flex-2 ml-0 lg:ml-6">
        <div className="relative pb-5/6">
          <img
            className="absolute h-full w-full object-cover rounded-lg shadow-2xl "
            src="https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p750x750/75430261_438479960075543_8235652609032286587_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=111&_nc_ohc=-CKANOwNQ0kAX-0WsXg&oh=a59181560fdb8b3376176915c68d3242&oe=5EC0B4EE"
            alt="Cewek"
            title="Cewek saya"
          />
        </div>
      </div>
    </div>
    <div className="footer flex items-center justify-center h-40 mt-12">
      <h5>Made with ❤️ by Aang</h5>
    </div>
  </Layout>
)

export default IndexPage
