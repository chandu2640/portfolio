import React from 'react';
import myData from '../../data/db';
import PortfolioCard from '../PortfoliCard/PortfolioCard';
import './PortfolioList.css';
import { themeContext } from "../../Context";
import { useContext } from 'react';
import { Link } from 'react-router-dom';



const PortfolioList = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    console.log(myData)
  return (
    <div className='portfolioList'>
        <div className="titlesOfPortfolio">
            <span style={{color: darkMode?'white': ''}} className="recentProjects">Recent Projects</span>
            <span className='recentPortfolioTitle'>Portfolio</span>
        </div>
        <div className="portfolioList_projects">
            {myData.map((data)=>{
                const {id, url, description, github, image, title} = data;
                return(
                    <a href={url} style={{textDecoration:"none"}} key={id}>
                        <PortfolioCard
                            key={id}
                            title = {title}
                            description = {description}
                            github = {github}
                            image = {image}
                        />
                    </a>
                )
            })}

        </div>
    </div>
    
  )
}

export default PortfolioList