import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import "./about.css"

// import pythonVerticalImg from "../../static/logos/python-4.svg"
// import pythonLogoImg from "../../static/logos/python-icon.svg"
// import pythonImg from "../../static/logos/python2.png"
// import graphqlImg from "../../static/logos/graphql.svg"
// import mongodbImg from "../../static/logos/mongodb.png"
// import nodejsImg from "../../static/logos/nodejs-icon.svg"
// import sassImg from "../../static/logos/sass-1.svg"

import cljsWhiteImg from "../../static/logos/cljs-white.svg"
import clojureImg from "../../static/logos/clojure.svg"
import pythonVertical2Img from "../../static/logos/python-vertical.svg"
import gatsbyImg from "../../static/logos/gatsby.svg"
import javascriptImg from "../../static/logos/javascript.svg"
import reactImg from "../../static/logos/react.svg"

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
      <h1 className="text-center sm:text-left mb-3 sm:mb-6">Hello, my name is Jin</h1>

      <div className="flex flex-col sm:flex-row text-sm items-center sm:items-start">
        <div className="w-12/12 sm:w-4/12">
          <div className="p-1 sm:p-2 md:p-2 lg:p-5">
            <Img
              className="rounded-full"
              fluid={props.data.file.childImageSharp.fluid}
            />
          </div>
          <div className="flex flex-col pr-0 sm:pr-2 mt-5 sm:mt-0">
            <div className="flex flex-row items-center mb-2">
              <i className="fas fa-map-marker-alt fa-sm w-1/12 lg:w-1/12 text-center mr-1"></i>
              <div className="w-11/12 lg:w-11/12">
                Cambridge, United Kingdom
              </div>
            </div>
            {/* <div className="flex flex-row items-center">
              <i className="fas fa-graduation-cap fa-sm w-1/12 lg:w-1/12 text-center mr-1"></i>
              <div className="w-11/12 lg:w-11/12">University of life</div>
            </div> */}
            <div className="flex flex-row items-center mb-2">
              <i className="fas fa-code fa-sm w-1/12 lg:w-1/12 text-center mr-1"></i>
              <div className="w-11/12 lg:w-11/12">
                Python, JS, Clojure, Html, CSS, SQL
              </div>
            </div>
            <div className="flex flex-row items-center">
              <i className="fas fa-language fa-sm w-1/12 lg:w-1/12 text-center mr-1"></i>
              <div className="w-11/12 lg:w-11/12">English, Korean</div>
            </div>
          </div>
        </div>
        
        <div className="w-12/12 sm:w-8/12 text-justify sm:text-justify px-1">
          <hr className="my-5 sm:hidden"/> {/* Mobile only */}
          <div>
            <p>
              Technology enthusiast. Since young age I been interested in impact
              technology had on our lives.
            </p>
            <p>
              My core skillset is building web applications from start to finish
              throughout development lifecycle. Commonly referred as a Full-Stack
              developer.
            </p>
            <p>
              General competency in DevOPs area. Cloud services such
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
              Software developer is a craft and requires continuously honing
              the craft. In modern world of fast moving tech space it is important
              to continuously learn and adapt as required.
            </p>
            <p>
              In my spare time I enjoy exploring new technology and practising my
              craft.
            </p>
            <p className="mb-0">
              I am also a dancer. I teach, perform and socially dance. Being in the moment, going along with whatever happens gives break to my analytical side of brain.
            </p>
          </div>

          <div className="flex flex-col items-center mt-5">
            <p>
              Some of the tech I like:
            </p>
            {/* self-center fixes safari bug */}
            <div className="flex flex-row flex-wrap justify-center mt-2 sm:mt-0">
              <img alt="Python" className="w-8 mx-4 self-center" src={pythonVertical2Img} />
              <img alt="Javascript" className="w-8 mx-4 self-center" src={javascriptImg} />
              <img alt="Clojure" className="w-8 mx-4 self-center" src={clojureImg} />
              <img alt="ClojureScript" className="w-8 mx-4 self-center" src={cljsWhiteImg} />
              <img alt="React" className="w-8 mx-4 self-center" src={reactImg} />
              <img alt="Gatsby" className="w-8 mx-4 self-center" src={gatsbyImg} />
            </div>
          </div>

          <div className="flex flex-row justify-center">
            <div className="mr-3">Send me a message!</div>
            <a className="mr-2" href="https://github.com/jin-park-dev">
              <i className="fab fa-github"></i>
            </a>
            <a className="mr-2" href="https://www.linkedin.com/in/jin-park-dev">
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
