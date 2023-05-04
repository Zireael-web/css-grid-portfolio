import './Promo.scss'

function Promo() {
  return (
    <>
      <section className='promo'>
        <div className='container'>
          <div className="title title_16 promo__subtitle">My name is Alexandra Smith</div>
          <div className="title title_48 promo__title">I am a Web Developer from Chicago</div>
          <div className="promo__btns">
            <a href="#" className="promo__link btn animation_underline">Portfolio</a>
            <a href="#" className="promo__link animation_grow">About me</a>
          </div>
        </div>
      </section>  
    </>
  )
}

export default Promo