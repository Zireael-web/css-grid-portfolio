import './Portfolio.scss';

import uber from '../../img/works/uber.jpg'
import pulse from '../../img/works/pulse.jpg'
import plans from '../../img/works/plans.jpg'
import ipad from '../../img/works/ipad.jpg'
import bread from '../../img/works/bread.jpg'
import mac from '../../img/works/mac.jpg'


function Portfolio() {
  return (
    <section className="portfolio">
        <div className='container'>
            <h2 className="title title_16 portfolio__title">Portfolio</h2>
            <div className="title portfolio__subtitle">List of my works</div>
            <div className="divider"></div>
            
            <div className="portfolio__wrapper">
                <a href="#" class="portfolio__item">
                    <img src={uber} alt="uber"/>
                </a>
                <a href="#" class="portfolio__item">
                    <img src={pulse} alt="pulse"/>
                </a>
                <a href="#" class="portfolio__item">
                    <img src={bread} alt="bread"/>
                </a>
                <a href="#" class="portfolio__item vertical">
                    <img src={plans} alt="plans"/>
                </a>
                <a href="#" class="portfolio__item">
                    <img src={ipad} alt="ipad"/>
                </a>    
                <a href="#" class="portfolio__item horizontal">
                    <img src={mac} alt="mac"/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Portfolio