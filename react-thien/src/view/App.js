
import './App.css';
import Home from './home/home';
import Header from './direction/header';
import Docs from './Docs/doc';
import Todo from './Todo/todo';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
    
        <div className="container">
          <Header/>
          
        
          <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/docs">
            <Docs />
          </Route>
          <Route path="/tutorial">
            <Todo />
          </Route>
        </Switch>

        
        </div>  
      </div>
    </Router>
  );
}

export default App;
