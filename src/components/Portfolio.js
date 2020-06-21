import React, { useState } from "react"
// import { useStaticQuery, graphql } from "gatsby"
import "./Portfolio.css"
import Image from "./image"


function renderFolioLinks(links) {

  return links.map((curRow, curIndex) => {
    // const data = useStaticQuery(graphql`
    //   query {
    //     placeholderImage: file(relativePath: { eq: "selfhost/bitwarden.png" }) {
    //       childImageSharp {
    //         fluid(maxWidth: 400) {
    //           ...GatsbyImageSharpFluid
    //         }
    //       }
    //     }
    //   }
    // `)
    // console.log(data)
    return <div className="no-underline hover:underline text-blue-500" key={"live" + curIndex}><a key={"liveLink" + curIndex} href={curRow.url}>{curRow.content}</a></div>
  })
}

// function renderFolioImg(img) {
//   return links.map((curRow, curIndex) => {
//     return <div className="" key={"live" + curIndex}><a key={"liveLink" + curIndex} href={curRow.url}>{curRow.content}</a></div>
//   })
// }


const Portfolio = (props) => {
  const [hidden, setHidden] = useState(true)
  const { title, synopsis, idx, desc, links, img } = props.portfolioItem

  return (
    <div key={"div" + idx} className="flex flex-col mb-10">
      <button key={"label" + idx}
           className="flex flex-col items-center justify-center sm:flex-row
             cursor-pointer text-left
             transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 sm:hover:scale-110"
           onClick={() => setHidden(!hidden)}
           role="button"
           tabIndex={idx}
      >
        <div key={"pTit" + idx} className='font-bold text-xl sm:w-3/12'>{title}</div>
        <div key={"dot" + idx} className='font-bold text-xl px-2'>·</div>
        <div key={"pSinop" + idx} className='font-lg sm:w-9/12'>{synopsis}</div>
      </button>
      <div key={"dropdown" + idx}
           className={`flex flex-row mt-6 ${hidden ? "twirl-section-collapsed" : "twirl-section"}`}
      >
        <div key={"img" + idx} className="w-4/12 mr-3">
          {/*{console.log(img.split('/').pop())}*/}
          {/*<Image imgsrc={img.split('/').pop()} />*/}
          <Image imgsrc={img.split('/').pop()} />
        </div>
        <div key={"links" + idx} className="flex flex-col w-8/12">
          <div className="mb-2">{desc}</div>
          {renderFolioLinks(links)}
        </div>
      </div>
    </div>
  )
}

export default Portfolio