import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Common from './components/Common/Common';
import LayoutRaikhan from './components/LayoutRaikhan/LayoutRaikhan';
import LayoutNazerke from './components/LayoutNazerke/LayoutNazerke';


function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Common} />
          <Route path="/nazerke" component={LayoutNazerke} />
          <Route path="/raikhan" component={LayoutRaikhan} />
      </Switch>
    </div>
  );
}

export default App;
