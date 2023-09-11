import React, { useState, useEffect } from 'react';
import './launch.css';

const LaunchTimer = ({ onLaunchTimeReached }) => {
  const launchTimeIST = new Date('2023-09-11T18:00:00+05:30'); // Set your website's launch time in IST

  const calculateTimeRemaining = () => {
    const currentTimeIST = new Date();
    const timeRemaining = launchTimeIST - currentTimeIST;
    return timeRemaining > 0 ? timeRemaining : 0;
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
      if (timeRemaining <= 0) {
        clearInterval(timer);
        onLaunchTimeReached(); // Call the callback when time is up
      }
    }, 0);

    return () => clearInterval(timer);
  }, [timeRemaining, onLaunchTimeReached]);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div className={`launch-timer ${timeRemaining <= 0 ? 'hidden' : ''}`}>
      <h1>We are Launching Soon</h1>
      <div className="timer">
        <div className="timer-item">
          <span>{days}</span>
          <p>Days</p>
        </div>
        <div className="timer-item">
          <span>{hours}</span>
          <p>Hours</p>
        </div>
        <div className="timer-item">
          <span>{minutes}</span>
          <p>Minutes</p>
        </div>
        <div className="timer-item">
          <span>{seconds}</span>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default LaunchTimer;
