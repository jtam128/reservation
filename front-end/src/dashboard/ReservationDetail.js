import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ErrorAlert from "../layout/ErrorAlert";
import { updateReservationStatus } from "../utils/api";

function ReservationDetail({ reservation }) {
    const history = useHistory();

    const [curReservation, setCurReservation] = useState(reservation);
    const [error, setError] = useState(null);

    const handleCancelRes = (e) => {
        e.preventDefault();
        setError(null);
        const confirmBox = window.confirm(
            "Do you want to cancel this reservation? This cannot be undone."
        );
        if (confirmBox === true)
        {
            updateReservationStatus({ status: "cancelled" }, curReservation.reservation_id)
                .then((response) => {
                    setCurReservation(response);
                    history.go(0);
                })
                .catch(setError);
        }
    }


    return (
        <div className="card ">
            <ErrorAlert error={error} />
            <div className="card-body">
                <h5 className="card-title">
                    Reservation for: {`${curReservation.first_name} ${curReservation.last_name}`}{" "}
                </h5>
                <p className="card-text">Phone Number: {curReservation.mobile_number}</p>
                <p className="card-text">Time: {curReservation.reservation_time}</p>
                <p className="card-text">Party Size: {curReservation.people}</p>
                <p data-reservation-id-status={curReservation.reservation_id}>
                    Status:{" "}
                    <span
                        className={
                            curReservation.status === "booked"
                                ? "card-text text-primary"
                                : "card-text text-success"
                        }
                    >
                        {curReservation.status}
                    </span>
                </p>
                {curReservation.status === "booked" ? (
                    <div>
                        <a
                            href={`/reservations/${curReservation.reservation_id}/seat`}
                            className="btn btn-primary mr-1"
                        >
                            Seat
                        </a>
                        <a
                            href={`/reservations/${curReservation.reservation_id}/edit`}
                            className="btn btn-secondary mr-1"
                        >
                            {" "}
                            Edit
                        </a>
                        <button
                            onClick={handleCancelRes}
                            className="btn btn-danger "
                            data-reservation-id-cancel={curReservation.reservation_id}
                        >
                            Cancel
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default ReservationDetail;
