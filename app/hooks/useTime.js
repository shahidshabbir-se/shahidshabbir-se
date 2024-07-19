// hooks/useFaisalabadTime.js
import { useState, useEffect } from 'react';

const useTime = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await fetch(
          'https://worldtimeapi.org/api/timezone/Asia/Karachi'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch Faisalabad time');
        }
        const data = await response.json();
        const time = new Date(data.datetime);
        const formattedTime = time.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        });
        setTime(formattedTime);

        // Calculate next interval based on API's time
        const nextUpdateTime = time.getTime() + 60000 - (Date.now() % 60000);
        setTimeout(fetchTime, nextUpdateTime - Date.now());
      } catch (error) {
        console.error('Error fetching Faisalabad time:', error);
      }
    };

    fetchTime(); // Initial fetch

    return () => clearTimeout(); // Cleanup timeout on component unmount
  }, []);

  return time;
};

export default useTime;
