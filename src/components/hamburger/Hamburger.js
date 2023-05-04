import './Hamburger.scss'

function Hamburger({setActive}) {
  return (
    <div className="hamburger animation_grow" onClick={() => setActive(true)}>
        <span className="hamburger-short"></span>
        <span className="hamburger-long"></span>
        <span className="hamburger-short"></span>
    </div>
  )
}

export default Hamburger