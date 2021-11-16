import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Navegacion from "../src/navegacion/navegacion"

  export default function AppRouter(){
      return(
          <Router>
              <Switch>
                  <Route exact path={["/",
                  
                  "/login"]} component={Navegacion}/>
              </Switch>
          </Router>
      ) 
  }