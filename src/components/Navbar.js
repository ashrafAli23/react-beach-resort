import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

function Navbar() {
    let [toggle , setToggle] = useState(false);
    
    const handleToggle = () => setToggle(!toggle);
    const closeMenue = () => setToggle(false);

    return (
        <nav className='navbar'>
            <div className='nav-center'>

                <div className='nav-header'>
                    <Link to='/' onClick={closeMenue} >
                        <img src={logo} alt='logo.svg' className='logo' />
                    </Link>
                    <button type='button' className='nav-btn' onClick={handleToggle}>
                        <i className={toggle ? 'fas fa-times': 'fas fa-bars'}></i>
                    </button>
                </div>

                <ul className={toggle ? 'nav-links show-nav' : "nav-links"}>
                    <li className='nav-item'>
                        <Link to='/' onClick={closeMenue} >
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/rooms' onClick={closeMenue} >
                            Rooms
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
