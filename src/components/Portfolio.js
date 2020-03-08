import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = ({portfolioItem}) => {
  const [hidden, setHidden] = useState(true);
  const {title, synopsis, idx, desc, repo, live,img} = portfolioItem

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
      <div key={"tab" + idx} className={`flex flex-row mt-6 ${hidden ? "twirl-section-collapsed" : "twirl-section"}`}>
        <div className="w-4/12 mr-3"><img alt="nicasia" src={img}/></div>
        <div className="flex flex-col w-8/12">
          <div>{desc}</div>
          <div className="" key={'repo' + idx}><a key={'repoLink' + idx} href={repo}>Github Repo</a></div>
          {live ? <div className="" key={'live' + idx}><a key={'liveLink' + idx} href={repo}>Check it live</a></div> : null }
        </div>
      </div>
    </div>
  )
}

export default Portfolio