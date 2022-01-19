import React from 'react';
import './footer.css';

class Footer extends React.Component {

    render(){
        return(
            <>
                <div className='footer'>
                    <div>
                        <h3 className='footer-h3'>Declarative</h3>
                        <p className='footer-p1'>React makes it painless to create interactive UIs.
                        Design simple views for each state in your application, and
                        React will efficiently update and render just the right
                        components when your data changes.</p>
                        <p>
                        Declarative views make your code more predictable and easier to debug.
                        </p>
                    </div>
                    <div>
                        <h3  className='footer-h3'>Component-Based</h3>
                        <p className='footer-p1'>
                        Build encapsulated components that manage their own state,
                        then compose them to make complex UIs.
                        </p>
                        <p>
                        Since component logic is written in JavaScript instead of templates, 
                        you can easily pass rich data through your app and keep state out of the DOM.
                        </p>
                    </div>
                    <div>
                        <h3  className='footer-h3'>Learn Once, Write Anywhere</h3>
                        <p className='footer-p1'>
                        We don't make assumptions about the rest of your technology stack,
                        so you can develop new features in React without rewriting existing code.
                        </p>
                        <p>
                        React can also render on the server using Node and power mobile apps using React Native.
                        </p>
                    </div>
                </div>
            
            </>
        )
    }
}

export default Footer;