import './App.css';
import { NavBar, Header, AddQuestion, Game, GameEnd } from './Components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (

      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <Header />
            </Route>
            <Route exact path='/addquestions'>
              <AddQuestion />
            </Route>
            <Route path='/gamestart'>
              <Game />
            </Route>
            <Route path='/gameEnd'>
              <GameEnd />
            </Route>
          </Switch>
        </Router>
      </div>
    
  );
}

export default App;
