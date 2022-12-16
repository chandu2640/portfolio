import React from 'react';
import Github from '../../img/github.png';
import "./PortfolioCard.css";
import Weather from '../../img/weather.png';
import { Link } from 'react-router-dom';


const PortfolioCard = ({github, image, description, title}) => {
    const imge = image;
  return (
    <div>
        <div className="box">
        <div className="imageSection">
            <img src={image} alt=""/>
        </div>
        <a href={github}>
            <div className="githubImg">
                <img src={Github} alt=""/>
            </div>
        </a>
        <div className="content" style={{color:"black"}}>
            <span className='contentHeading' style={{color:"Black", textDecoration:"none"}}>{title}</span>
            <span className='contentDetails'>{description}</span>
        </div>
    </div>
    </div>
  )
}

export default PortfolioCard