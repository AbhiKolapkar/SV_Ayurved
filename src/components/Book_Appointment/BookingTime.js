import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar.svg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import {
  addMonthsToDate,
  extractHourAndMinute,
  fetchBookedAppointments,
  get24HrsFrmAMPM,
  getAMPMFrm24Hrs,
  getTotalTimeSlots,
  normaliseDateToReadableString,
} from "./utils";

const BookingTime = ({
  selectedProfile,
  updateSelectedTime,
  selectedTime,
  handleShow,
}) => {
  const BOOKING_DURATION_MONTHS = 2;
  const START_DATE = new Date();
  const END_DATE = addMonthsToDate(new Date(), BOOKING_DURATION_MONTHS);

  const [timeDisplay, setTimeDisplay] = useState();
  const [calendarDate, setCalendarDate] = useState(START_DATE);
  const [calendarDisplay, setCalendarDisplay] = useState(false);
  const [bookedAppointments, setBookedAppointments] = useState([]);

  // setup booked-appointments in date and timeSlot object keys
  useEffect(() => {
    fetchBookedAppointments()
      .then((data) => {
        const bookedData = data.appointments.map(({ date, time }) => ({
          date: new Date(date),
          timeSlot: time,
        }));
        setBookedAppointments(bookedData);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  const onCalendarDisplay = () => {
    setCalendarDisplay(!calendarDisplay);
  };

  const getWorkingTimeSlots = (selectedDate) => {
    let currentTime = new Date().getTime();
    let totalWorkingSlots = getTotalTimeSlots(
      selectedProfile.workSchedule,
      selectedDate,
      30
    );

    let totalRestingSlots = getTotalTimeSlots(
      selectedProfile.restSchedule,
      selectedDate,
      30
    );

    totalWorkingSlots = totalWorkingSlots.filter(
      (val) => !totalRestingSlots.includes(val)
    );

    let availableWorkingSlots = totalWorkingSlots.filter((time) => {
      const getTime = extractHourAndMinute(get24HrsFrmAMPM(time));
      const bigTime = new Date(selectedDate).setHours(
        getTime.hours,
        getTime.minutes
      );
      return bigTime >= currentTime;
    });

    return availableWorkingSlots;
  };

  const fetchAvailableTimeSlots = () => {
    const totalWorkingTimeSlots = getWorkingTimeSlots(calendarDate);

    const selectedDateString = normaliseDateToReadableString(calendarDate);

    const bookedTimeSlots = bookedAppointments
      .filter(
        (appointment) => normaliseDateToReadableString(appointment.date) === selectedDateString
      )
      .map((appointment) => appointment.timeSlot);

    const availableTimeSlots = totalWorkingTimeSlots.map(slot => {
      if(!bookedTimeSlots.includes(slot)) return {available: true, slot}
      return {available: false, slot}
    })

    return availableTimeSlots;
  };

  const onCalenderClick = (val, _eve) => {
    setCalendarDate(val);

    setTimeout(() => onCalendarDisplay(), 600)
  };

  const onTimeSelect = (e) => {
    const { hours, minutes } = extractHourAndMinute(
      get24HrsFrmAMPM(e.target.ariaLabel)
    );

    const tempDate = new Date(
      calendarDate.getFullYear(),
      calendarDate.getMonth(),
      calendarDate.getDate(),
      hours,
      minutes
    );

    setTimeout(() => updateSelectedTime(tempDate), 200);
    handleShow();
  };

  useEffect(() => {
    updateSelectedTime("");
    setTimeDisplay(fetchAvailableTimeSlots());
    setCalendarDisplay(false);
  }, [calendarDate, bookedAppointments]);

  const renderTimeResponseDisplay = () => {
    if (selectedTime) {
      const timeString = `
      ${normaliseDateToReadableString(selectedTime)} at 
      ${getAMPMFrm24Hrs(
        `${
          selectedTime.getHours() < 10
            ? 0`${selectedTime.getHours()}`
            : selectedTime.getHours()
        }:${selectedTime.getMinutes() === 0 ? "00" : selectedTime.getMinutes()}`
      )}`;

      return (
        <div className="selection-response response-success">
          <h5>Appointment with {selectedProfile.name}</h5>
          <h6>{timeString}</h6>
          <h6>Consultation (30min)</h6>
        </div>
      );
    } else {
      return (
        <div className="selection-response response-warning">
          <h5>Please select a time!</h5>
        </div>
      );
    }
  };

  return (
    <>
      <div className="booking-selection">
        <div className="bs-header">
          <h5 onClick={onCalendarDisplay}>
            {calendarDate ? normaliseDateToReadableString(calendarDate) : ""}
          </h5>

          <button
            type="button"
            className="calendar-btn"
            onClick={onCalendarDisplay}
          >
            <CalendarIcon />
          </button>
        </div>

        <div className="bs-body">
          {calendarDisplay && (
            <Calendar
              minDate={START_DATE}
              maxDate={END_DATE}
              value={calendarDate}
              onChange={(val, eve) => onCalenderClick(val, eve)}
              showNeighboringMonth={false}
              minDetail="year"
              className="calender-selector"
              next2Label=""
              prev2Label=""
              nextLabel={<Arrow />}
              prevLabel={<Arrow />}
              tileContent=""
              tileDisabled={({ date }) => !date.getDay("Sunday")}
            />
          )}

          <div className="time-selector">
            {timeDisplay
              ? timeDisplay.map(({available, slot}, i) => (
                  <button
                    key={i}
                    type="button"
                    className="time-button"
                    aria-label={slot}
                    onClick={(e) => onTimeSelect(e)}
                    disabled={!available}
                  >
                    {slot}
                  </button>
                ))
              : ""}
          </div>

          {renderTimeResponseDisplay()}
        </div>
      </div>
    </>
  );
};

export default BookingTime;
