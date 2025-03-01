import { ClockIcon } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const CountdownTimer = ({ label }) => {
  const calculateTimeLeft = useCallback(() => {
    try {
      const now = new Date();
      const target = new Date();
      
      // Set target to today at 18:31
      target.setHours(18, 31, 0, 0);
      
      // If it's already past 18:31 today, set target to tomorrow
      if (now > target) {
        target.setDate(target.getDate() + 1);
      }
      
      const diff = target - now;
      
      return {
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000)
      };
    } catch (error) {
      console.error('Error calculating time:', error);
      return { hours: 0, minutes: 0, seconds: 0 };
    }
  }, []);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="bg-[#3D8D7A] text-[#FBFFE4] p-4 rounded-lg shadow-lg flex items-center space-x-4">
      <ClockIcon className="w-6 h-6" />
      <div className="text-center">
        <div className="text-2xl font-bold">
          {String(timeLeft.hours).padStart(2, '0')}h:
          {String(timeLeft.minutes).padStart(2, '0')}m:
          {String(timeLeft.seconds).padStart(2, '0')}s
        </div>
        <div className="text-sm opacity-80">{label}</div>
      </div>
    </div>
  );
};

CountdownTimer.propTypes = {
  label: PropTypes.string.isRequired
};

export default CountdownTimer;