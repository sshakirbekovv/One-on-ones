import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Common from './pages/Common/Common';
import Layout from './layout/Layout';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Common} />
          <Layout />
      </Switch>
    </div>
  );
}

export default App;
