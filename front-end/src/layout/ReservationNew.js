import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createReservation } from "../utils/api";
import ErrorAlert from "./ErrorAlert";
import ReservationForm from "./ReservationForm";

function ReservationNew() {
    const history = useHistory();

    const initialFormData = {
        first_name: "",
        last_name: "",
        mobile_number: "",
        reservation_date: "",
        reservation_time: "",
        people: "",
    };

    const [formData, setFormData] = useState(initialFormData);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        const reservation = {
            ...formData,
            status: "booked",
        };
        createReservation(reservation)
            .then(() => {
                history.push(`/dashboard?date=${formData.reservation_date}`);
            })
            .catch(setError);
    }
    return (
        <div>
            <ErrorAlert error={error} />
            <h3 className="d-flex justify-content-center m-3 display-4">New Reservation</h3>
            <div>
                <ReservationForm
                    formData={formData}
                    setFormData={setFormData}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    );
};

export default ReservationNew;
