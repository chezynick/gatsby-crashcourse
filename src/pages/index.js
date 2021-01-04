import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="relative flex justify-center ">
      <img
        className="max-w-4xl"
        src="https://images.pexels.com/photos/831056/pexels-photo-831056.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="iceland pic"
      />
      <div
        className="text-white text-2xl absolute bottom-6 left-56
      "
      >
        <h1>Places I've been...</h1>
        <p>When travel was an actual thing</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
