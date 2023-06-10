import { useState } from 'react'

import SidePanel from "../sidePanel/SidePanel";
import Hamburger from "../hamburger/Hamburger";
import Overlay from '../overlay/Overlay';
import Menu from '../menu/Menu';

import Promo from "../promo/Promo";
import About from '../about/About';
import Resume from '../resume/Resume';
import Skills from '../skills/Skills';
import Progress from '../progress/Progress';
import Portfolio from '../portfolio/Portfolio';
import Price from '../price/Price';
import Contacts from '../contacts/Contacts';

function App() {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <>
            <SidePanel/>
            <Hamburger setActive={setMenuActive}/>
            <Overlay active={menuActive} setActive={setMenuActive}/>
            <Menu active={menuActive} setActive={setMenuActive}/>

            <Promo/>
            <About/>
            {/* <Resume/>
            <Skills/>
            <Progress/>
            <Portfolio/>
            <Price/>
            <Contacts/> */}
        </>
    );
}

export default App;
