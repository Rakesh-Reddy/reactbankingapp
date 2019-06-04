import React from 'react';
import './App.css';
import Home from './Home';
import AddBenificiary from './AddBenificiary';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './Header';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/home" component={Home} />
        <Route path="/addBenificiary" component={AddBenificiary} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
