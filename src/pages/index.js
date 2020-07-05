import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import Welcome from "../components/welcome.js"
const IndexPage = () => (
  <Layout>
    <SEO title="Salesforce Troop" />
    <Welcome/>
  </Layout>
)

export default IndexPage
