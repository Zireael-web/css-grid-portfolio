import './About.scss'
import './About-media.scss'

import photo from '../../img/main_photo.jpg'
import web_dev from '../../icons/about_me/web_development.svg'
import mobile_dev from '../../icons/about_me/mobile_dev.svg'
import design from '../../icons/about_me/design.svg'

function About() {
  return (
    <section className='about'>
        <div className='container'>
            <div className='about__wrapper'>
                <div className='about__photo'>
                    <img  src={photo} alt='my photo'></img>
                </div>
                <div className='about__descr'>
                    <h2 className='title title_16 about__title'>About me</h2>
                    <div className='title title_36 about__subtitle'>My name is Alexandra</div>
                    <div className='divider'></div>
                    <p className='about__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div className='about__skills'>
                    <div className='about__skills-item'>
                        <div className='about__skills-circle'>
                            <img src={web_dev} alt='web development'/>
                        </div>
                        <div>
                            <div className='title title_14'>Web development</div>
                            <div className='about__skills-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                    </div>
                    <div className='about__skills-item'>
                        <div className='about__skills-circle'>
                            <img src={mobile_dev} alt='mobile development'/>
                        </div>
                        <div>
                            <div className='title title_14'>App development</div>
                            <div className='about__skills-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                    </div>
                    <div className='about__skills-item'>
                        <div className='about__skills-circle'>
                            <img src={design} alt='design'/>
                        </div>
                        <div>
                            <div className='title title_14'>Design and creativity</div>
                            <div className='about__skills-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About