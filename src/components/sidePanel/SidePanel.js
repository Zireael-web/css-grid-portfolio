import facebook from '../../icons/social/facebook.svg';
import github from '../../icons/social/github.svg';
import instagram from '../../icons/social/instagram.svg';

import './SidePanel.scss'

function SidePanel() {
  return (
    <aside className='sidepanel'>
        <a href='#' className='sidepanel__link'>
            <img src={facebook} alt="facebook"/>
        </a>
        <a href='#' className='sidepanel__link'>
            <img src={github} alt="github"/>
        </a>
        <a href='#' className='sidepanel__link sidepanel__link_instagram'>
            <img src={instagram} alt="instagram"/>
        </a>
        <div className='sidepanel__divider'></div>
        <div className='sidepanel__label'><span className="sidepanel__rotate">Social Networks</span></div>
    </aside>
  )
}

export default SidePanel    