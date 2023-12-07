import { useState, useEffect } from 'react';

const TimeDisplay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const euTime = time.toLocaleTimeString('en-US', {
    timeZone: 'Europe/Sofia',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  const formattedTime = { __html: `BG ${euTime}` };
  return <div dangerouslySetInnerHTML={formattedTime}/>;
};

export default TimeDisplay;