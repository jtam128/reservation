import React, { useEffect, useState } from "react";
import ErrorAlert from "../layout/ErrorAlert";
import TableDetail from "./TableDetail";
import { listReservations, listTables } from "../utils/api";

import { previous, next, today } from "../utils/date-time";
import useQuery from "../utils/useQuery";
import ReservationDetail from "./ReservationDetail";

function Dashboard() {

  const date = today();

  const [reservations, setReservations] = useState(null);
  const [viewDate, setViewDate] = useState(date);
  const [error, setError] = useState(null);
  const [tables, setTables] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setError(null);
    if (viewDate === date)
    {
      listReservations({ date }, abortController.signal)
        .then(setReservations)
        .catch(setError);
    } else
    {
      listReservations({ viewDate }, abortController.signal)
        .then(setReservations)
        .catch(setError);
    }
    return () => abortController.abort();
  }, [date, viewDate]);


  useEffect(() => {
    const abortController = new AbortController();
    setError(null);
    listTables()
      .then(setTables)
      .catch(setError);
    return () => abortController.abort();
  }, []);


  const query = useQuery();
  const searchedDate = query.get("date");

  useEffect(() => {
    if (searchedDate && searchedDate !== "")
    {
      setViewDate(searchedDate);
    }
  }, [searchedDate])


  const handlePreviousDay = (e) => {
    e.preventDefault();
    setViewDate(previous(viewDate));
  }
  const handleNextDay = (e) => {
    e.preventDefault();
    setViewDate(next(viewDate));
  }
  const handleTodayDay = (e) => {
    e.preventDefault();
    setViewDate(date);
  }

  if (reservations)
  {
    return (
      <main>

        <div className="d-flex mb-3 justify-content-center">
          <h1 className="display-3 major-mono">Dashboard</h1>
        </div>

        <div className="d-flex mb-3 justify-content-around">
          <button className="btn btn-primary" onClick={handlePreviousDay}>Previous Day</button>
          <button className="btn btn-primary" onClick={handleTodayDay}>Today</button>
          <button className="btn btn-primary" onClick={handleNextDay}>Next Day</button>
        </div>

        <ErrorAlert error={error} />

        <div className="container">
          <div className="d-flex mb-3 justify-content-center ">
            <h4>Reservations for Date: {viewDate}</h4>
          </div>
          <div className="row">
            {reservations && reservations.map((res) => (
              <div className="col-md-6 mb-3" key={res.reservation_id}>
                <ReservationDetail reservation={res} />
              </div>
            ))}

          </div>
        </div>

        <div className="container">
          <h3 className="d-flex m-3 justify-content-center  h1">Tables</h3>
          <div className="row">
            {tables && tables.map((table) => (
              <div className="col-md-6  col-lg-3 mb-3" key={table.table_id}>
                <TableDetail table={table} />
              </div>
            ))}
          </div>
        </div>

      </main>
    );
  } else
  {
    return (
      <div>
        Loading...
      </div>
    )
  }
}

export default Dashboard;
