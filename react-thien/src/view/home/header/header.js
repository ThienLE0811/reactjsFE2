import React from 'react';

import './header.css';

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
                                <li>Home</li>
                                <li>Docs</li>
                                <li>Tutorial</li>
                                <li>Blog</li>
                                <li>Community</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;