import React from 'react';
import './header.css';

import {
    Link,NavLink
  } from "react-router-dom";



const logo = require('./logoreact1.png');

class Header extends React.Component {

    render(){

        return(
            <>  
                <div class="header">
                    <div class="header-content">
                        <a href="https://reactjs.org/"  className='link-a'>
                            <p className='header-p'>
                                <img className='header-img' src={logo} alt="" width="40px"/>
                                React 
                            </p>
                                
                        </a>
                        
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/" activeClassName="active" exact>Home</NavLink> 
                                </li>
                                <li><NavLink to="/docs" activeClassName="active">Docs</NavLink></li>
                                <li><NavLink to="/tutorial" activeClassName="active">Tutorial</NavLink></li>
                                <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
                                <li><NavLink to="/comm" activeClassName="active">Community</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;