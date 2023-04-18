import { NavLink } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
    return (
        <div className="container">
            <NavLink
                to='/infinite-scroll'
                className={({isActive, isPending}) => 
                    isPending ? 'pending' : isActive ? 'nav-item active' : 'nav-item'
                }
            >
                Infinite Scoll
            </NavLink>
            <NavLink
                to='/use-previous'
                className={({isActive, isPending}) => 
                    isPending ? 'pending' : isActive ? 'nav-item active' : 'nav-item'
                }
            >
                Use Previous
            </NavLink>
            <NavLink
                to='/use-update'
                className={({isActive, isPending}) => 
                    isPending ? 'pending' : isActive ? 'nav-item active' : 'nav-item'
                }
            >
                UpdatEffect
            </NavLink>
        </div>
    )
}

export default Nav;