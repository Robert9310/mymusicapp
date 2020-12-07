import logo from './logo.svg';
import './App.css';
import LoginRouter from './routes/router';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/">
                    <LoginRouter/>
                </Route>
            </Switch>
        </Router>
    </div> 
  );
}

export default App;
