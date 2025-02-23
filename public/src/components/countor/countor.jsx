import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    // Function to calculate the remaining time
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date(targetDate); // Convert prop to Date object
      const difference = target - now; // Difference in milliseconds

      if (difference > 0) {
        setTimeLeft({
          days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
          hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
          minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0'),
          seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
        });
      } else {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      }
    };

    // Update the timer every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clean up the timer on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <>
        {timeLeft.seconds} : {timeLeft.minutes} : {timeLeft.hours} : {timeLeft.days}
    </>
  );
};

export default CountdownTimer;
