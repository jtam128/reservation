import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ErrorAlert from "../layout/ErrorAlert";
import { updateReservationStatus } from "../utils/api";

function ReservationDetail({ reservation }) {
    const history = useHistory();
    const [currentReservation, setCurrentReservation] = useState(reservation);
    const [error, setError] = useState(null);

    const handleCancelRes = (e) => {
        e.preventDefault();
        setError(null);
        const confirmBox = window.confirm(
            "Do you want to cancel this reservation? This cannot be undone."
        );
        if (confirmBox === true)
        {
            updateReservationStatus({ status: "cancelled" }, currentReservation.reservation_id)
                .then((response) => {
                    setCurrentReservation(response);
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
                    Reservation for: {`${currentReservation.first_name} ${currentReservation.last_name}`}{" "}
                </h5>
                <p className="card-text">Phone Number: {currentReservation.mobile_number}</p>

                <p className="card-text">Time: {currentReservation.reservation_time}</p>

                <p className="card-text">Party Size: {currentReservation.people}</p>

                <p data-reservation-id-status={currentReservation.reservation_id}>
                    Status:{" "}
                    <span
                        className={
                            currentReservation.status === "booked"
                                ? "card-text text-primary"
                                : "card-text text-success"
                        }
                    >
                        {currentReservation.status}
                    </span>
                </p>
                {currentReservation.status === "booked" ? (
                    <div>
                        <a
                            href={`/reservations/${currentReservation.reservation_id}/seat`}
                            className="btn btn-primary mr-1"
                        >
                            Seat
                        </a>
                        <a
                            href={`/reservations/${currentReservation.reservation_id}/edit`}
                            className="btn btn-secondary mr-1"
                        >
                            {" "}
                            Edit
                        </a>

                        <button
                            onClick={handleCancelRes}
                            className="btn btn-danger "
                            data-reservation-id-cancel={currentReservation.reservation_id}
                        >
                            Cancel
                        </button>
                    </div>
                ) : null}
            </div>
        </div >
    )
}

export default ReservationDetail;
