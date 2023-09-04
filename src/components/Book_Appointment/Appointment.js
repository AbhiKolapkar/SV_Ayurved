import React, { useState } from "react";
import Items from "./Items";
import { listOfDoctors } from "./data";
import BookingTime from "./BookingTime";
import BookingForm from "./BookingForm";
import Success from "./Success";
import "./style.css";

const Appointment = ({ cardTitle, handleClose }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(listOfDoctors[0]);
  const [selectedTime, setSelectedTime] = useState("");
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  const updateSelectedTime = (dateTime) => {
    setSelectedTime(dateTime);
  };

  const handleShow = () => {
    setTimeout(() => setShow(!show), 1000);
  };

  const handleSuccess = () => {
    setTimeout(() => setSuccess(!success), 500);
    setTimeout(() => handleClose(), 500);
  };

  return (
    <>
      {success ? (
        <Success selectedProfile={selectedDoctor} selectedTime={selectedTime} />
      ) : (
        <div className="container">
          <div className="container-header">
            <h3 className="title">Book your appointment online</h3>
            <h4 className="subtitle">Fill in the following information</h4>
          </div>

          <div className="container-body">
            {!show ? (
              <Items
                number={1}
                title="Pick an appointment time"
                body={
                  <BookingTime
                    selectedProfile={selectedDoctor}
                    updateSelectedTime={updateSelectedTime}
                    selectedTime={selectedTime}
                    handleShow={handleShow}
                  />
                }
              />
            ) : (
              <Items
                number={2}
                title="Confirm your appointment"
                body={
                  <BookingForm
                    selectedTime={selectedTime}
                    handleSuccess={handleSuccess}
                    cardTitle={cardTitle}
                    handleClose={handleClose}
                  />
                }
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Appointment;
