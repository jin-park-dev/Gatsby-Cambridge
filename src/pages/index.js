import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import portfolioItems from '../components/portfolio-items';

import './index.css';
import Portfolio from "../components/Portfolio"


function renderFolio() {
  return  portfolioItems.map((portfolioItem) => {
    return (
      <Portfolio key={`k${portfolioItem.idx}`} portfolioItem={portfolioItem} />
    )
  })
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>I am Developer</h1>
    <h2>(Under construction...)</h2>
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
    {/*  <Image />*/}
    {/*</div>*/}
    {renderFolio()}
  </Layout>
)

export default IndexPage
