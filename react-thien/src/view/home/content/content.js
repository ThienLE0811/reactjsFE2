import React from 'react';
import './content.css'

class Content extends React.Component {
    render(){

        return(
            <>
                <div className='content'> 
                    <h1 className='content-h1'>React</h1>
                    <p className='content-p'>A JavaScript library for building user interfaces</p>
                    <div className='content-btn'>
                        <button>Get Started</button>
                        <a className='content-btn1' href='https://www.google.com.vn/?hl=vi'>
                            <a href='https://www.google.com.vn/?hl=vi'>Take the Tutorial
                            </a>
                            <i class="fas fa-angle-right"></i>
                        </a>
                        
                    </div>               
                </div>  
            </>
        )
    }
}

export default Content;