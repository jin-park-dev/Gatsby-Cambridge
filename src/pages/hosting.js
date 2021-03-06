import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import hostItems from '../components/host-items';

import './index.css';
import Portfolio from "../components/Portfolio"


function renderFolio() {
  return  hostItems.map((portfolioItem) => {
    return (
      <Portfolio key={`k${portfolioItem.idx}`} portfolioItem={portfolioItem} />
    )
  })
}

const Hosting = () => (
  <Layout>
    <SEO title="Self-Host" />
    <h1>I host various services</h1>
    <div className="mb-4">
      Below services are
      <b> self-hosted </b>
      on various cloud platform such as GCP, AWS, Digital Ocean, Scaleaway, etc or self-managed Proxmox.</div>
    {renderFolio()}
  </Layout>
)

export default Hosting
