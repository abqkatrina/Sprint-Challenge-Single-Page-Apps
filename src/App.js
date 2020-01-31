import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
// import WelcomePage from './components/WelcomePage';
import { Route, Switch } from 'react-router-dom';


 function App() {


  return (
    <div className='body'>
      <Header/>
      <Switch>
      <Route exact path='/CharacterList' style={{border: '2px solid blue'}} component={CharacterList}/>
      <Route exact path='/LocationsList' style={{border: '2px solid red'}} component={LocationsList} />
      </Switch>
    </div>
  );
}

export default App;