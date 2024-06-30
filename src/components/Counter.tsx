import React, { useState, useEffect } from 'react';
import './Counter.styl';

interface CounterProps {
  count: number;
}

const Counter: React.FC<CounterProps> = ({ count }) => {
  const [numDigits, setNumDigits] = useState(1);
  const [displayValue, setDisplayValue] = useState('');

  useEffect(() => {
    const value = count > 99 ? '99+' : count.toString();
    setDisplayValue(value);
    setNumDigits(value.length);
  }, [count]);

  return (
    <span className={`counter ${numDigits === 1 ? 'single-digit' : 'more-digit'}`}>
      {displayValue}
    </span>
  );
};

export default Counter;
export type { CounterProps };