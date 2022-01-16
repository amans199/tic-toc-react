import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css';
// import Board from './components/Board'
// import Routes from './components/Routes'
import { HomePage, GamePage, HistoryPage, PlaygroundPage } from './pages/Pages';

function App() {
  return (
    <main>
      {/* <Routes /> */}
      <Switch>


        <Route exact path='/' component={HomePage} />
        <Route exact path='/game' component={GamePage} />
        <Route exact path='/history' component={HistoryPage} />
        <Route exact path='/playground' component={PlaygroundPage} />
      </Switch>
    </main>
  );
}

export default App;
