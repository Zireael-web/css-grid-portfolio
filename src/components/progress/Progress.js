import './Progress.scss'

import ProgressItem from './ProgressItem';

function Progress() {
  return (
    <section className="progress">
        <div className="container">
            <div className="progress__wrapper">
                <ProgressItem name={"Web Development"} number={100}/>
                <ProgressItem name={"App Development"} number={85}/>
                <ProgressItem name={"Work with Data"} number={90}/>
                <ProgressItem name={"Creativity"} number={75}/>
                <ProgressItem name={"Design creation"} number={90}/>
                <ProgressItem name={"Soft skills"} number={95}/>
            </div>
        </div>
    </section>
  )
}

export default Progress