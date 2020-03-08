import React, { useState } from 'react';
import './Portfolio.css';


function renderFolioLinks(links) {
  return Object.keys(links).map((cur) => {
    console.log(cur)
    console.log(links[cur])
    return <div className="" key={'live' + cur}><a key={'liveLink' + cur} href={links[cur]}>{cur}</a></div>

  })
  // return null
}


const Portfolio = ({portfolioItem}) => {
  const [hidden, setHidden] = useState(true);
  const {title, synopsis, idx, desc, links, img} = portfolioItem

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
      <div key={"dropdown" + idx} className={`flex flex-row mt-6 ${hidden ? "twirl-section-collapsed" : "twirl-section"}`}>
        <div key={"img" + idx}  className="w-4/12 mr-3"><img alt="nicasia" src={img}/></div>
        <div key={"links" + idx}  className="flex flex-col w-8/12">
          <div>{desc}</div>
          {/*{repo ? <div className="" key={'repo' + idx}><a key={'repoLink' + idx} href={repo}>Github Repo</a></div> : null }*/}
          {/*{live ? <div className="" key={'live' + idx}><a key={'liveLink' + idx} href={repo}>Check it live</a></div> : null }*/}
          {renderFolioLinks(links)}
        </div>
      </div>
    </div>
  )
}

export default Portfolio