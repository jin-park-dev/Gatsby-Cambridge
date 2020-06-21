import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import portfolioItems from "../components/portfolio-items"

import "./index.css"
import Portfolio from "../components/Portfolio"

function renderFolio() {
  return portfolioItems.map((portfolioItem) => {
    return (
      <Portfolio key={`k${portfolioItem.idx}`} portfolioItem={portfolioItem} />
    )
  })
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>I am a Full-Stack Developer</h1>
    {/* <p>I love learning, good discpline and being social</p> */}
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
    {/*  <Image />*/}
    {/*</div>*/}
    {renderFolio()}
    <div className="text-blue-500">
      <a href="https://1drv.ms/w/s!AgNPDSf2wBb5prZrO9_sbCuoXln5Uw">
        See CV additional professional history
      </a>
    </div>
  </Layout>
)

export default IndexPage
