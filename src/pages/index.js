import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import portfolioItems from '../components/portfolio-items';

import './index.css';


function renderFolio() {
  return  portfolioItems.map(({title, synopsis, idx, desc, repo, live,img}) => {
    return (
      <div key={'div' + idx} className="flex flex-col">
        {/*<div key={'index' + idx} id={idx + title}/>*/}
        <div key={'label' + idx}  className="flex flex-col items-center justify-center sm:flex-row">
          {/*w-3/12 w-1/12 w-8/12*/}
          <div key={'pTit' + idx} className='font-bold text-xl sm:w-3/12'>{title}</div>
          <div key={'dot' + idx} className='font-bold text-xl px-2'>·</div>
          <div key={'pSinop' + idx} className='font-lg sm:w-9/12'>{synopsis}</div>
        </div>
        {/*<div key={'tab' + idx} className="tab-content">*/}
        {/*  <img alt="nicasia" src={img}/>*/}
        {/*  {desc}*/}
        {/*  <span className="repolinks" key={'repo' + idx}><a key={'repoLink' + idx} href={repo}>Github Repo</a></span>*/}
        {/*  {live ? <span className="repolinks" key={'live' + idx}><a key={'liveLink' + idx} href={repo}>Check it live</a></span> : null }*/}
        {/*</div>*/}
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
