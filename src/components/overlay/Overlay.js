import './Overlay.scss'

function Overlay({active, setActive}) {
  const overflowStatus = active ? 'hidden' : 'unset';
  document.body.style.overflow = overflowStatus;

    return (
        <div 
            onClick={() => setActive(false)} 
            className={active ? 'overlay active' : 'overlay'}
        />
  )
}

export default Overlay