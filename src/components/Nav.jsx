import React from 'react';
import Logo from '../assets/shared/logo.svg'
import { Link, useLocation} from 'react-router-dom'

const Nav = () => {
    const { pathname } = useLocation()
    const links = [
        {
            text: 'HOME',
            destination: '/'
        },
        {
            text: 'DESTINATIONS',
            destination: '/destinations'
        },
        {
            text: 'CREW',
            destination: '/crew'
        },
        {
            text: 'TECHNOLOGY',
            destination: '/technology'
        }
    ]
    return (
        <nav>
            <div className="nav__container">
                <img src={Logo} alt="" className="nav__logo" />
                <div className="nav__line"></div>
                <ul className="nav__links">
                    {
                        links.map((item, index) => (
                            <li className="nav__link">
                                <Link to={item.destination} className={`nav__link--anchor ${pathname === item.destination ? 'nav__link--current' : ''}`}><strong>0{index + 1}</strong>{item.text}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
