import './Menu.scss'

import close from '../../icons/menu/close.svg'  
import facebook from '../../icons/menu/facebook.svg';
import github from '../../icons/menu/github.svg';
import instagram from '../../icons/menu/instagram.svg';

function Menu({active, setActive}) {
  return (
    <div className={active ? 'menu active' : 'menu'}>
        <div 
            onClick={() => setActive(false)}
            className='menu__close'
        >
            <img src={close} alt='close'/>
        </div>
        <nav>
            <ul className='menu__list'>
                <li 
                onClick={() => setActive(false)}
                className='menu__item'
                >
                    <a href='#'>ABOUT ME</a>
                </li>
                <li 
                onClick={() => setActive(false)}
                className='menu__item'
                >
                    <a href='#'>MY EXPERIENCE</a>
                </li>
                <li 
                onClick={() => setActive(false)}
                className='menu__item'
                >
                    <a href='#'>MY HARD SKILLS</a>
                </li>
                <li 
                onClick={() => setActive(false)}
                className='menu__item'
                >
                    <a href='#'>MY PORTFOLIO</a>
                </li>
                <li 
                onClick={() => setActive(false)}
                className='menu__item'
                >
                    <a href='#'>PRICE LIST</a>
                </li>
                <li 
                onClick={() => setActive(false)}
                className='menu__item'
                >
                    <a href='#'>CONTACTS</a>
                </li>
            </ul>
        </nav>
        <div className='menu__socials'>
            <a className='menu__social animation_grow' href='#'><img src={github} alt='github'/></a>
            <a className='menu__social animation_grow' href='#'><img src={instagram} alt='instagram'/></a>
            <a className='menu__social animation_grow' href='#'><img src={facebook} alt='facebook'/></a>
        </div>
    </div>
  )
}

export default Menu