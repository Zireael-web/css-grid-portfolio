import './Resume.scss'

import university from "../../icons/experience/university.svg";
import courses from "../../icons/experience/courses.svg";
import designer from "../../icons/experience/designer.svg";
import developer from "../../icons/experience/developer.svg";

function Resume() {
  return (
    <section className='resume'>
        <div className='container'>
          <h2 className='title title_16 resume__title'>My Experience</h2>
          <div className='title title_36 resume__subtitle'>Here's how I can help You</div>
          <div className='divider'></div>

          <div className="resume__wrapper">
            <div className="resume__column">
              <h3 className="title title_20 resume__column-title">Education</h3>
              <ul>
                <li>
                  <div className="resume__item">
                    <div className="resume__item-head">
                      <div className="resume__item-icon">
                        <img src={university} alt="university"/>
                      </div>
                      <div className="title title_14">Bauman's GSTU</div>
                      <div className="resume__item-location">master's degree(2014-2020)</div>
                    </div>
                    <div className="resume__item-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo. 
                    </div>
                  </div>
                </li>
                <li>
                  <div className="resume__item">
                    <div className="resume__item-head">
                      <div className="resume__item-icon">
                        <img src={courses} alt="courses"/>
                      </div>
                      <div className="title title_14">Udemy</div>
                      <div className="resume__item-location">Web-development courses</div>
                    </div>
                    <div className="resume__item-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo. 
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="resume__column">
              <h3 className="title title_20 resume__column-title">Work Experience</h3>
              <ul>
                <li>
                  <div className="resume__item">
                    <div className="resume__item-head">
                      <div className="resume__item-icon">
                        <img src={designer} alt="designer"/>
                      </div>
                      <div className="title title_14">Designer</div>
                      <div className="resume__item-location">Freelancing</div>
                    </div>
                    <div className="resume__item-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo. 
                    </div>
                  </div>
                </li>
                <li>
                  <div className="resume__item">
                    <div className="resume__item-head">
                      <div className="resume__item-icon">
                        <img src={developer} alt="developer"/>
                      </div>
                      <div className="title title_14">Front-end Developer</div>
                      <div className="resume__item-location">Local web-studio in Chicago</div>
                    </div>
                    <div className="resume__item-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo. 
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Resume 