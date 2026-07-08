import React, {useState} from 'react';
import Menus from './Menus';

function Header() {
    const [showMegaMenu, setShowMegaMenu] = useState(false);
return(
    <header className="header">
        <div className="container header-container">

        <div className="logo">
           <a href="#" aria-label="home">
                <img src="src/assets/codia-studio-88r21j.png" alt="Logo"/>
            </a>
        </div>

        <Menus/>
        <div className="search-btn">
           <img src="src/assets/codia-studio-6vhvm7.PNG" alt="Search"/>   
        </div>
      </div>        
    </header>
)
}
export default Header;