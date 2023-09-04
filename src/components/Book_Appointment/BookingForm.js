import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Error } from "@mui/icons-material";
import { getAMPMFrm24Hrs } from "./utils";
import axios from "axios";
import { APPOINTMENT_API_URL } from "../../data/constant";
import { listOfMonths } from "./data";
import { toast } from "react-toastify";

const BookingForm = ({ selectedTime, handleSuccess, cardTitle, handleClose }) => {
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const date = `${selectedTime.getDate()}-${
    listOfMonths[selectedTime.getMonth()]
  }-${selectedTime.getFullYear()}`;
  const timeString = getAMPMFrm24Hrs(
    `${
      selectedTime.getHours() < 10
        ? 0`${selectedTime.getHours()}`
        : selectedTime.getHours()
    }:${selectedTime.getMinutes() === 0 ? "00" : selectedTime.getMinutes()}`
  );

  useEffect(() => {
    setValue("purpose", cardTitle ? cardTitle : "General");
  }, []);

  const onSubmit = async (data) => {
    handleSuccess();

    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }
    formData.append("date", date);
    formData.append("time", timeString);

    const response = await axios.post(APPOINTMENT_API_URL, formData);
    toast.error(response.data, {
      position: 'top-right',
      autoClose: 3000,
      closeOnClick: true,
    })

    reset();
    // handleClose()
  };

  return (
    <>
      <div className="booking-submission">
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          noValidate
          className="bs-body"
        >
          <div className="input-fields">
            <div id="purpose-field">
              <h3>Purpose of Meeting</h3>
              <input
                id="purpose"
                type="text"
                {...register("purpose")}
                disabled
              />
            </div>

            <div className="radio_btns">
              <h3>What would you prefer?</h3>
              <div className="radio-label">
                <label htmlFor="online">
                  <input
                    type="radio"
                    id="online"
                    value="Online"
                    {...register("mode", {
                      required: "Select an option",
                    })}
                  />
                  Online
                </label>
                <label htmlFor="offline">
                  <input
                    type="radio"
                    id="offline"
                    value="Offline"
                    {...register("mode", {
                      required: "Select an option",
                    })}
                  />
                  In Person
                </label>
              </div>
              {errors.mode && (
                <p className="errorMsg">
                  {" "}
                  <Error /> {errors.mode.message}
                </p>
              )}
            </div>

            <div id="full-name">
              <h3>Full Name</h3>
              <input
                id="full-name"
                type="text"
                placeholder="e.g. John Smith"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="errorMsg">
                  {" "}
                  <Error /> {errors.name.message}
                </p>
              )}
            </div>

            <div id="email">
              <h3>Email</h3>
              <input
                id="email"
                type="text"
                placeholder="e.g. johnsmith@email.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="errorMsg">
                  {" "}
                  <Error /> {errors.email.message}
                </p>
              )}
            </div>

            <div id="phone">
              <h3>Phone Number</h3>
              <input
                id="phone"
                type="text"
                placeholder="e.g. 9874102365"
                name="phone"
                maxLength={11}
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone number is required",
                  },
                  pattern: {
                    value:
                    /^\d{10}$/,
                    message: "Enter valid number",
                  },
                })}
              />
              {errors.phone && (
                <p className="errorMsg">
                  {" "}
                  <Error /> {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <input type="submit" value="Book an Appointment" />
        </form>
      </div>
    </>
  );
};

export default BookingForm;
