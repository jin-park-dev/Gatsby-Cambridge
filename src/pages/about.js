import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import "./about.css"

import cljsImg from "../../static/logos/cljs.svg"
import clojureImg from "../../static/logos/clojure.svg"
import gatsbyImg from "../../static/logos/gatsby.svg"
import graphqlImg from "../../static/logos/graphql.svg"
import javascriptImg from "../../static/logos/javascript.svg"
import mongodbImg from "../../static/logos/mongodb.png"
import nodejsImg from "../../static/logos/nodejs-icon.svg"
import pythonImg from "../../static/logos/python2.png"
import reactImg from "../../static/logos/react.svg"
import sassImg from "../../static/logos/sass-1.svg"

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
      <h1>Hello, my name is Jin</h1>

      <div className="flex flex-col sm:flex-row text-sm items-center sm:items-start">
        <div className="w-12/12 sm:w-4/12">
          <div className="p-5 sm:p-1 md:p-2 lg:p-5">
            {" "}
            <Img
              className="rounded-full"
              fluid={props.data.file.childImageSharp.fluid}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <i className="fas fa-map-marker-alt fa-sm w-1/12 lg:w-1/12"></i>
              <div className="w-11/12 lg:w-11/12">
                Cambridge, United Kingdom
              </div>
            </div>
            <div className="flex flex-row items-center">
              <i className="fas fa-graduation-cap fa-sm w-1/12 lg:w-1/12"></i>
              <div className="w-11/12 lg:w-11/12">University of life</div>
            </div>
            <div className="flex flex-row items-center">
              <i className="fas fa-code fa-sm w-1/12 lg:w-1/12"></i>
              <div className="w-11/12 lg:w-11/12">
                HTML, JS, CSS, SQL, PYTHON, CLOJURE
              </div>
            </div>
            <div className="flex flex-row items-center">
              <i className="fas fa-language fa-sm w-1/12 lg:w-1/12"></i>
              <div className="w-11/12 lg:w-11/12">English, Korean</div>
            </div>
          </div>
        </div>
        <div className="w-12/12 lg:w-8/12">
          <p>
            Technology enthusiast. Since young age I been interested in impact
            technology had on our lives.
          </p>
          <p>
            Software developer is a craft and it requires continuously honing
            the craft. In modern world of fast moving tech space it is important
            to continuously learn and adapt as required.
          </p>
          <p>
            My core skillset is building web applications from start to finish
            throughout development lifecycle. Commonly referred as a Full-Stack
            developer.
          </p>
          <p>
            I also have general competency in DevOPs area. Cloud services such
            as Digital Ocean, GCP, Proxmox, virtual machines, CI, docker,
            ansible, bash, zsh. Toolsets to facilitate in development,
            deployment and maintenance of a software.
          </p>
          <p>
            I focus on balancing delivering best value to business whilst
            keeping high standard of software development. This must be decided
            on case by case and correct balance must be applied for the
            situation.
          </p>
          <p>
            In my spare time I enjoy exploring new technology and practising my
            craft.
          </p>
          <p>
            I am also a dancer. I teach, perform and socially dance. Being in the moment, going along with whatever happens gives break to my analytical side of brain.
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

              <img alt="Python" className="w-8 mx-4" src={pythonImg} />
              <img alt="React" className="w-8 mx-4" src={reactImg} />
              <img alt="javascript" className="w-8 mx-4" src={javascriptImg} />
              <img alt="Gatsby" className="w-8 mx-4" src={gatsbyImg} />
              <img alt="GraphQl" className="w-8 mx-4" src={graphqlImg} />
              {/* <img alt="nodeJs" className="w-8 mx-4" src={nodejsImg} /> */}
              {/* <img alt="Mongo" className="w-8 mx-4" src={mongodbImg} /> */}
              {/* <img alt="Sass" className="w-8 mx-4" src={sassImg} /> */}
            </div>
          </div>

          <div className="flex flex-row">
            <div className="mr-3">Send me a message!</div>
            <a className="mr-2" href="https://github.com/jin-park-dev">
              <i className="fab fa-github"></i>
            </a>
            <a className="mr-2" href="www.linkedin.com/in/jin-park-dev">
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="mr-2"
              href="https://www.instagram.com/jinnotonik/"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
