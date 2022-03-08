import React from "react";
import { Route, Switch } from 'react-router-dom';
import NavBar from "./NavBar";
import RestaurantPage from "./RestaurantPage";
import Home from './Home';
import MyReservations from './MyReservations';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route>
          <RestaurantPage path='/restaurants'/>
        </Route>
        <Route>
          <MyReservations path='reservations' />
        </Route>
        <Route>
          <Home path='/'/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
