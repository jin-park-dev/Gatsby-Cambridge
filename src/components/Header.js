import PropTypes from "prop-types"
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"


const Header = () => {

  const data = useStaticQuery(graphql`
           query {
               site{
                   siteMetadata {
                       title
                   }
               }
           }
        `)

  return (
    <div className="text-center">
      {/*<link href="https://fonts.googleapis.com/css?family=Anonymous+Pro|Open+Sans&display=swap" rel="stylesheet" />*/}
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>
      <div className="mt-6">
        <div className="mb-6">
          <h1 className="text-6xl">{data.site.siteMetadata.title}</h1>
          <span className="mx-1">Visualization</span>
          <span className="mx-1">•</span>
          <span className="mx-1">Full-Stack Developer</span>
          <span className="mx-1">•</span>
          <span className="mx-1">DevOps</span>
        </div>
        <div className="mb-6 text-xl">
          <a className="mx-2" href='https://github.com/jin-park-dev'><i className="fab fa-github"></i></a>
          <a className="mx-2" href='https://gitlab.jinis.online/jin'><i className="fab fa-gitlab"></i></a>
          {/*<a href='https://twitter.com/codigoMate'><i className="fab fa-twitter"></i></a>*/}
          {/*<a href='https://github.com/jin-park-dev'><i className="fab fa-dev"></i></a>*/}
          <a className="mx-2" href='www.linkedin.com/in/jin-park-dev'><i className="fab fa-linkedin"></i></a>
          {/*<a href='https://youtube.com/codigoMate'><i className="fab fa-youtube"></i></a>*/}
        </div>
        <div className="mb-6">
          <Link className="mx-3" to="/">Portfolio</Link>
          |
          <Link className="mx-3" to="/about">About</Link>
        </div>
        <hr className="mx-2 sm:mx-8 md:mx-24 lg:mx-32"/>
      </div>
    </div>
  )
}


export default Header
