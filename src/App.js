import React, { createContext, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route exact path="/home">
                <Home></Home>
            </Route>

            <Route path="/login">
                
            </Route>
        </Switch>
    </Router>
</UserContext.Provider>
  );
}

export default App;