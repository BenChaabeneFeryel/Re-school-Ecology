import React,{useState, useEffect} from 'react';
import '../../assets/internaute/css/header.css'
import {Link} from 'react-router-dom';
import Button from '../../components/internaute/Button.js'
 

const Indexheader = () => {
    const [menu, setMenu] = useState(false);
    const closeMobileMenu = () => setMenu(false);
    const handleMenu = () => setMenu(!menu);

    const [button, setButton] = useState(true);
    const showButton = () => {
        if (window.innerWidth <= 960) {
        setButton(false);
        } else {
        setButton(true);
        }
    };
    
    useEffect(() => {
        showButton();
    }, []);
    
    window.addEventListener('resize', showButton);
    
    return (
        <header>
            <nav className='navbar'>
                <a href='/' className='navbar-logo' onClick={closeMobileMenu}>
                    RE:SCHOOL Ecology
                </a>
                
                <ul className={menu ? 'navbar-menu active' : 'navbar-menu'}>
                    <li className='nav-item'>
                        <a href='/' className='nav-link' onClick={closeMobileMenu}>
                            Accueil
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/' className='nav-link' onClick={closeMobileMenu}>
                            Produits
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/' className='nav-link' onClick={closeMobileMenu}>
                            Mission
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/' className='nav-link' onClick={closeMobileMenu}>
                            Partenaires
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/' className='nav-link' onClick={closeMobileMenu}>
                            A Propos
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/' className='nav-link-mobile' onClick={closeMobileMenu} >
                            Espace Client
                        </a>
                    </li>
                    <li>
                        <a href='/' className='nav-link-mobile' onClick={closeMobileMenu} >
                            Espace Admin
                        </a>
                    </li>
                </ul>
                {button && <Button ButtonStyle='btn--outline'>Espace Client</Button>}
                {button && <Button ButtonStyle='btn--outline'>Espace Admin</Button>}
                
                <div className='menu-icon' onClick={handleMenu}>
                    <i className={menu ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
                </div>
            </nav>
        </header>
    );
}

export default Indexheader;
