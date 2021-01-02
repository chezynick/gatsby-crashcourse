import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="flex flex-col items-center ">
      <h1 className="text-3xl font-bold my-10">Contact us</h1>
      <h1 className="text-3xl">At the foot of the Peak District</h1>
      <h3 className="text-2xl pb-10">Amongst the hills and sheep</h3>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
