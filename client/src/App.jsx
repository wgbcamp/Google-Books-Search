import React from "react";
import MainPage from "./components/MainPage";
import SavedBooks from "./components/SavedBooks";
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (

    <div className="App">


        <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/saved" component={SavedBooks} />

        </Switch>


    </div>
  );
}


export default App;
