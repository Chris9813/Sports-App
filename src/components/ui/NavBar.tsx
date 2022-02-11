import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { startLogout } from '../../actions/auth';
import App from '../../App';
import { stateInter } from '../../interfaces/interfaces';


export const Navbar = () => {

    const dispatch = useDispatch()
    const {name} = useSelector((state:stateInter) => state.auth)


    function handleLogout() {
        dispatch(startLogout())
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand mx-3" 
                to="/"
            >
                Sports
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        
                        className="nav-item nav-link" 
                        exact
                        to="/homepage"
                    >
                        HomePage
                    </NavLink>

                    <NavLink 
                        
                        className="nav-item nav-link" 
                        exact
                        to="/favorites"
                    >
                        Favorites
                    </NavLink>
            </div>
            </div>


            <div className="navbar-collapse collapse w-200 order-3 dual-collapse2">
                <ul className="navbar-nav ms-auto">
                <button 
                        className="nav-item nav-link btn" 
                        onClick = {handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>

            
        </nav>
    )
}