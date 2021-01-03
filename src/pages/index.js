import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/* <div
      style={{
        maxWidth: `400px`,
        marginBottom: `1.45rem`,
        margin: "auto",
        marginTop: "1rem",
      }}
    >
      <Image />
    </div> */}
    <div className="relative flex justify-center">
      <img
        src="https://images.pexels.com/photos/831056/pexels-photo-831056.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="iceland pic"
      />
      <div className="text-white text-2xl absolute top-10 left-44">
        <h1>Where ive been...</h1>
        <p>when travel was an actual thing</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
