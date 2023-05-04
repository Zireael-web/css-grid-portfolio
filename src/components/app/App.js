import { useState } from 'react'

import SidePanel from "../sidePanel/SidePanel";
import Hamburger from "../hamburger/Hamburger";
import Overlay from '../overlay/Overlay';
import Menu from '../menu/Menu';

import Promo from "../promo/Promo";
import About from '../about/About';



import './App.scss'

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
        </>
    );
}

export default App;
