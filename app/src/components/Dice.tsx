import { useEffect, useState } from 'react';
import './Dice.css';

interface DiceProps {
  count: number;
  rolling?: boolean;
}

export const Dice: React.FC<DiceProps> = ({ count, rolling = false }) => {
  const [displayNumber, setDisplayNumber] = useState(count);

  useEffect(() => {
    if (!rolling) {
      setDisplayNumber(count);
      return;
    }

    // Randomize the number while rolling
    const intervalId = setInterval(() => {
      setDisplayNumber(Math.floor(Math.random() * 6) + 1);
    }, 100);

    return () => clearInterval(intervalId);
  }, [rolling, count]);

  return (
    <div className={`dice ${rolling ? 'rolling' : ''}`}>
      {displayNumber}
    </div>
  );
};
