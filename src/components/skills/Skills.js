import './Skills.scss';

import html from '../../icons/skills/html5.svg';
import css3 from '../../icons/skills/css3.svg';
import js from '../../icons/skills/js.svg';
import jquery from '../../icons/skills/jquery.svg';
import react from '../../icons/skills/react.svg';
import node from '../../icons/skills/node.js.svg';
import mongo from '../../icons/skills/mongo.db.svg';

function Skills() {
  return (
    <section className="skills">
        <div className="container">
            <h2 className="title title_16 skills__title">My Skills</h2>
            <div className="title skills__subtitle">What technologies I apply in work</div>
            <div className="divider"></div>

            <div className="skills__wrapper">
                <div className="skills__item">
                    <div className="skills__img">
                        <img src={html} alt="html"></img>
                    </div>
                    <div className="title title_14 skills__skill">HTML5</div>
                    <div className="skills__descr">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
                    </div>
                </div>

                <div className="skills__item">
                    <div className="skills__img">
                        <img src={css3} alt="css3"></img>
                    </div>
                    <div className="title title_14 skills__skill">CSS3</div>
                    <div className="skills__descr">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
                    </div>
                </div>

                <div className="skills__item">
                    <div className="skills__img">
                        <img src={js} alt="JavaScript"></img>
                    </div>
                    <div className="title title_14 skills__skill">CSS3</div>
                    <div className="skills__descr">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
                    </div>
                </div>

                <div className="skills__item">
                    <div className="skills__img">
                        <img src={jquery} alt="jQuery"></img>
                    </div>
                    <div className="title title_14 skills__skill">CSS3</div>
                    <div className="skills__descr">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
                    </div>
                </div>

                <div className="skills__item">
                    <div className="skills__img">
                        <img src={react} alt="React"></img>
                    </div>
                    <div className="title title_14 skills__skill">React</div>
                    <div className="skills__descr">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
                    </div>
                </div>

                <div className="skills__item">
                    <div className="skills__img">
                        <img src={node} alt="Node.js"></img>
                    </div>
                    <div className="title title_14 skills__skill">Node</div>
                    <div className="skills__descr">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
                    </div>
                </div>

                <div className="skills__item">
                    <div className="skills__img">
                        <img src={mongo} alt="Mongo.db"></img>
                    </div>
                    <div className="title title_14 skills__skill">Mongo.db</div>
                    <div className="skills__descr">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills