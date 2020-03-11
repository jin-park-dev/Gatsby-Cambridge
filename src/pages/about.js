import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Img from 'gatsby-image';
import { graphql } from 'gatsby'
import './about.css';
import reactImg from '../../static/logos/react.svg'

export const query = graphql`
query {
    file(relativePath: { eq: "images/about_2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.

        fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = (props) => {
  return (
    <Layout>
      <h2>Hello, my name is Jin</h2>

      <div className="flex flex-col sm:flex-row text-sm items-center sm:items-start">
        <div className="w-12/12 sm:w-4/12">
          <div className="p-5"> <Img className="rounded-full" fluid={props.data.file.childImageSharp.fluid} /></div>
          {/*<div className={"imagen"}> <Img fluid={data.placeholderImage.childImageSharp.fluid} /></div>*/}
          <div className="flex flex-col">
            <div className="flex flex-row items-center"><i className="fas fa-map-marker-alt fa-sm w-1/12 lg:w-1/12"></i><div className="w-11/12 lg:w-11/12">Cambridge, United Kingdom</div></div>
            <div className="flex flex-row items-center"><i className="fas fa-graduation-cap fa-sm w-1/12 lg:w-1/12"></i><div className="w-11/12 lg:w-11/12">University of life</div></div>
            <div className="flex flex-row items-center"><i className="fas fa-code fa-sm w-1/12 lg:w-1/12"></i><div className="w-11/12 lg:w-11/12">HTML, JS, CSS, SQL, PYTHON, CLOJURE</div></div>
            <div className="flex flex-row items-center"><i className="fas fa-language fa-sm w-1/12 lg:w-1/12"></i><div className="w-11/12 lg:w-11/12">English, Korean</div></div>
          </div>

        </div>
        <div className="w-12/12 lg:w-8/12">
          <p>
            Technology enthusiast.
          </p>
          <p>
            Stomps it stale send it loc vertical backside hack out the back rookie drifting the tail crumbly lip. Oil barny nutty Jordy Smith clamped ripping the pit, best section combos wind swell best section. Chunky keyhole shutting down ripping bumps crumble sand bottom. Jamie O'Brien psyched pit critical Margaret River good-epic Pipe, good-epic flow. Firing shorebreak stuffs the rail claw hands rail dig speed tube barn dog a-frame claim. Firing wave so pitted wave green room green room foam climb tides insider. Rights cranking nice little amped barn dog bumps hack a thon don.
          </p>
          <p>
            Fog Eddie would go layback daggers barreling backside board lefts. Pitted silky smooth John John Florence reef brah, pump. Rippin blow tail fins free reef ripping knee high full mad air reverse? Paddle out Simpo psyching tri fin, down the line, no kooks speed hack waves. Pump send it sand bottom section Jordy Smith insider no kooks, over the reef epic snake.
          </p>

          <div className="flex flex-col items-center">
            <div>
              <p>Some of the tech I like:</p>
            </div>
            {/*w-8 md:w-2/12 lg:w-8*/}
            <div className="flex flex-row flex-wrap justify-center">

              {/*<div className="flex flex-col justify-center items-center">*/}
              {/*  <div className="flex flex-row justify-center items-center"><img alt="javascript" className="w-8" src="./logos/javascript.svg" /></div>*/}
              {/*  <div>Javascript</div>*/}
              {/*</div>*/}

              <img alt="Python`" className="w-8 mx-4" src="./logos/python2.png" />
              <img alt="React" className="w-8 mx-4" src="./logos/react.svg" />
              <img alt="React" className="w-8 mx-4" src={reactImg} />
              <img alt="javascript" className="w-8 mx-4" src="./logos/javascript.svg" />
              <img alt="Gatsby" className="w-8 mx-4" src="./logos/gatsby.svg" />
              <img alt="GraphQl" className="w-8 mx-4" src="./logos/graphql.svg" />
              <img alt="nodeJs" className="w-8 mx-4" src="./logos/nodejs-icon.svg" />
              <img alt="Mongo" className="w-8 mx-4" src="./logos/mongodb.png" />
              <img alt="Sass" className="w-8 mx-4" src="./logos/sass-1.svg" />
            </div>
          </div>

          <div className={"socialContainer"}>
            <p>Send me a message!</p>
            <a className={"social"} href="https://github.com/jin-park-dev"><i className="fab fa-github"></i></a>
            <a className={"social"} href='www.linkedin.com/in/jin-park-dev'><i className="fab fa-linkedin"></i></a>
            <a className={"social"} href="https://www.instagram.com/jinnotonik/"><i className="fab fa-instagram"></i></a>
            {/*<a className={social} href="https://www.youtube.com/channel/UC9nNIxlNohIoIrjtC4ueIOA"><i className="fab fa-youtube"></i></a>*/}
            {/*<a className={social} href="https://www.twitter.com/codigomate"><i class="fab fa-twitter"></i></a>*/}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About