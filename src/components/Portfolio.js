import React, { useState } from "react"
import "./Portfolio.css"


function renderFolioLinks(links) {
  return links.map((curRow, curIndex) => {
    return <div className="" key={"live" + curIndex}><a key={"liveLink" + curIndex} href={curRow.url}>{curRow.content}</a></div>
  })
}


const Portfolio = ({ portfolioItem }) => {
  const [hidden, setHidden] = useState(true)
  const { title, synopsis, idx, desc, links, img } = portfolioItem

  return (
    <div key={"div" + idx} className="flex flex-col mb-5">
      <div key={"label" + idx}
           className="flex flex-col items-center justify-center sm:flex-row
             cursor-pointer
             transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
           onClick={() => setHidden(!hidden)}
      >
        <div key={"pTit" + idx} className='font-bold text-xl sm:w-3/12'>{title}</div>
        <div key={"dot" + idx} className='font-bold text-xl px-2'>·</div>
        <div key={"pSinop" + idx} className='font-lg sm:w-9/12'>{synopsis}</div>
      </div>
      <div key={"dropdown" + idx}
           className={`flex flex-row mt-6 ${hidden ? "twirl-section-collapsed" : "twirl-section"}`}
      >
        <div key={"img" + idx} className="w-4/12 mr-3"><img alt="nicasia" src={img} /></div>
        <div key={"links" + idx} className="flex flex-col w-8/12">
          <div className="mb-2">{desc}</div>
          {renderFolioLinks(links)}
        </div>
      </div>
    </div>
  )
}

export default Portfolio