import { DateTime } from "luxon";
import { listOfDays, listOfMonths } from "./data";

export const addMonthsToDate = (date, numOfMonth) => {
  return new Date(date.setMonth(date.getMonth() + numOfMonth));
};

export const normaliseDateToReadableString = (d) => {
  const month = d.getMonth();
  const date = d.getDate();
  const day = d.getDay();
  const year = d.getFullYear();

  const result = `${listOfDays[day]} ${date} ${listOfMonths[month]} ${year}`;

  return result;
};

/* ***** convert 24hrs into 12hrs ***** */
export const getAMPMFrm24Hrs = (time) => {
  const [sHours, minutes] = time.match(/([0-9]{1,2}):([0-9]{2})/).slice(1);
  const period = +sHours < 12 ? "AM" : "PM";
  const hours = +sHours % 12 || 12;

  return `${hours}:${minutes} ${period}`;
};

/* ***** convert 12hrs into 24hrs ***** */
export const get24HrsFrmAMPM = (time) => {
  const [sHours, minutes, period] = time
    .match(/([0-9]{1,2}):([0-9]{2}) (AM|PM)/)
    .slice(1);
  const PM = period === "PM";
  const hours = (+sHours % 12) + (PM ? 12 : 0);

  return `${("0" + hours).slice(-2)}:${minutes}`;
};

/**
 * Date doesn't matter
 * @param  {string} time
 * @returns {number} return milliseconds of the date created with time parameter
 */
export const timeToMilliseconds = (time) => {
  const [hours, mins] = time.split(":");
  const updateHours = new Date().setHours(hours);
  const updateMinsAndHours = new Date(updateHours).setMinutes(mins);
  return updateMinsAndHours;
};

/**
 * @param  {number | string} hours
 * @param  {number | string} mins
 * @returns {string} returns formatted time i.e. 09:00, 18:30
 */
export const getAndFormatTime = (hours, mins) => {
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
};

// Utility function to extract hour and minute from a time string
export const extractHourAndMinute = (timeString) => {
  const [hours, minutes] = timeString
    .split(":")
    .map((part) => parseInt(part, 10));
  return { hours, minutes };
};

export const istTime = (date) => {
  const userDateTime = DateTime.fromJSDate(date)
  const istDateTime = userDateTime.setZone('Asia/Kolkata')
  return istDateTime.toISO()
}

/* ***** create time intervals ***** */
export const createTimeIntervals = (startTime, endTime, interval) => {
  const timeSlots = [];
  if (startTime >= endTime)
    throw new Error("Start time cannot be greater than closing time");

  for (
    let i = startTime;
    i < endTime;
    i = new Date(i + interval * 60000).getTime()
  ) {
    timeSlots.push(
      getAMPMFrm24Hrs(
        getAndFormatTime(new Date(i).getHours(), new Date(i).getMinutes())
      )
    );
  }
  return timeSlots;
};

// Get all times available base on schedule
export const getTotalTimeSlots = (schedule, date, interval) => {
  let daySchedule = null;
  for (let k = 0; k < schedule.length; k += 1) {
    if (schedule[k].day === listOfDays[date.getDay()]) {
      daySchedule = schedule[k];
    }
  }

  if (daySchedule) {
    let startHour = timeToMilliseconds(get24HrsFrmAMPM(daySchedule.startTime));
    let endHour = timeToMilliseconds(get24HrsFrmAMPM(daySchedule.endTime));

    const totalTimeSlots = createTimeIntervals(startHour, endHour, interval);

    return totalTimeSlots;
  }
};
