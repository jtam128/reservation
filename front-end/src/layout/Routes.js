import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import NotFound from "./NotFound";
import ReservationNew from "./ReservationNew";
import ReservationEdit from "./ReservationEdit";
import ReservationSeat from "./ReservationSeat";
import TableNew from "./TableNew";

/**
 * Defines all the routes for the application.
 *
 * You will need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route exact={true} path="/reservations">
        <Redirect to={"/dashboard"} />
      </Route>

      <Route path="/reservations/:reservation_id/seat">
        <ReservationSeat />
      </Route>
      <Route exact path="/reservations/new">
        <ReservationNew />
      </Route>
      <Route path="/reservations/:reservation_id/edit">
        <ReservationEdit />
      </Route>

      <Route path="/tables/new">
        <TableNew />
      </Route>

      <Route path="/dashboard">
        <Dashboard />
      </Route>

      <Route>
        <NotFound />
      </Route>

    </Switch>
  );
}

export default Routes;
