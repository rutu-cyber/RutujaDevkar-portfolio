import React from 'react';
import './portfolio.css';
import Fitness from '../../assets/fitness.png';
import Proj2 from '../../assets/portfolio1.jpg';
import Proj3 from '../../assets/portfolio2.jpg';
import Proj4 from '../../assets/portfolio4.jpg';
import Proj5 from '../../assets/portfolio5.png';
import Proj6 from '../../assets/portfolio3.jpg';

const data = [
  {
    id: 1,
    image: Fitness,
    title: 'Fitness Project (React)',
    github: 'https://github.com',
    demo: 'https://fitness-react.netlify.app/'
  },
  {
    id: 2,
    image: Proj2,
    title: 'Fitness Project (React)',
    github: 'https://github.com',
    demo: 'https://fitness-react.netlify.app/'
  },
  {
    id: 3,
    image: Proj3,
    title: 'Fitness Project (React)',
    github: 'https://github.com',
    demo: 'https://fitness-react.netlify.app/'
  },
  {
    id: 4,
    image: Proj4,
    title: 'Fitness Project (React)',
    github: 'https://github.com',
    demo: 'https://fitness-react.netlify.app/'
  },
  {
    id: 5,
    image: Proj5,
    title: 'Fitness Project (React)',
    github: 'https://github.com',
    demo: 'https://fitness-react.netlify.app/'
  },
  {
    id: 6,
    image: Proj6,
    title: 'Fitness Project (React)',
    github: 'https://github.com',
    demo: 'https://fitness-react.netlify.app/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article>
                <div  key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                      <a href={github} className='btn'>Github</a>
                      <a href={demo} className='btn btn-primary'>Live Demo</a>
                    </div>        
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio