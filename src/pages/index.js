import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import portfolioItems from '../components/portfolio-items';

import './index.css';


function renderFolio() {
  return  portfolioItems.map(({title, synopsis, idx, desc, repo, live,img}) => {
    console.log(title);
    return (
      <div key={'div' + idx} className="tab ">
        <input key={'index' + idx}  type="checkbox" id={idx + title}/>
        <label key={'label' + idx}  className="tab-label" for={idx + title}>
          {/*w-3/12 w-1/12 w-8/12*/}
          <span key={'pTit' + idx} className='folio-title'>{title} </span>
          <span key={'dot' + idx} className='folio-title '>· </span>
          <span  key={'pSinop' + idx} className='folio-synopsis w-8/12'>{synopsis}</span>
        </label>
        <div key={'tab' + idx} class="tab-content">
          <img alt="nicasia" src={img}/>
          {desc}
          <span className="repolinks" key={'repo' + idx}><a key={'repoLink' + idx} href={repo}>Github Repo</a></span>
          {live ? <span className="repolinks" key={'live' + idx}><a key={'liveLink' + idx} href={repo}>Check it live</a></span> : null }
        </div>
      </div>
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
