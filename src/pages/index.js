import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="w-full flex justify-center flex-col items-center">
      <h1 className="text-gray-700 text-2xl">Where ive been...</h1>
      <p>when travel was an actual thing</p>
    </div>
    <div
      style={{
        maxWidth: `800px`,
        marginBottom: `1.45rem`,
        margin: "auto",
        marginTop: "1rem",
      }}
    >
      <Image />
    </div>
  </Layout>
)

export default IndexPage
