import React from "react";
import Header from "./components/Header.js";
import { Route, Switch } from 'react-router-dom';


 function App() {

  return (
    <main>
      <Header />
      <div className='body'>
        <Switch>

          <Route path='/characters' component={CharacterList}/>
          <Route path='/locations' component={LocationsList}/>
          <Route exact path='/' component={App}/>

        </Switch>
      </div>
    </main>
  );
}

export default App;