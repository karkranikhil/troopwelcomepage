import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"

const Slides = () => (
  <Layout>
    <SEO title="Enrich Your Javascript" />
    <div style={{
      margin: "auto",
      textAlign: "center"}}>
      <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRojR9cC_JYEy57nMlYfS-pDsFAR-0xZS-ZP32x7AB87ghlKqJYl5hoXAkSgzqFmT1grSZR0j9_IiPS/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </div>
  </Layout>
)

export default Slides
