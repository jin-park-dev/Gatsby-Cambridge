import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import hostItems from '../components/host-items';

import './index.css';
import Portfolio from "../components/Portfolio"


function renderFolio() {
  return  hostItems.map((portfolioItem) => {
    return (
      <Portfolio portfolioItem={portfolioItem} />
    )
  })
}

const Hosting = () => (
  <Layout>
    <SEO title="Self-Host" />
    <h1>I host various services</h1>
    <div className="mb-4">Services are hosted on various cloud platform such as GCP, AWS, Digital Ocean, Scaleaway, etc or self-managed Proxmox</div>
    {renderFolio()}
  </Layout>
)

export default Hosting
