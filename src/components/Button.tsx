import React, { createContext, useContext, useState, ReactNode, ReactElement, cloneElement } from 'react';
import { ReactComponent as Loader } from '../assets/loader.svg';
import './Button.styl';

interface ButtonContextType {
  count: number;
  loading: boolean;
  handleButtonClick: () => void;
}

const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

const useButtonContext = () => {
  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error('useButtonContext must be used within a ButtonProvider');
  }
  return context;
};

interface ButtonProps {
  children: ReactNode;
}

interface ButtonSubComponents {
  Label: React.FC<{ children: ReactNode }>;
  Counter: React.FC<{ children: ReactElement<{ count: number }> }>;
}

const Button: React.FC<ButtonProps> & ButtonSubComponents = ({ children }) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCount(count + 1);
    }, 1000);
  };

  return (
    <ButtonContext.Provider value={{ count, loading, handleButtonClick }}>
      <button className={`button ${loading ? 'loading' : ''}`} onClick={handleButtonClick} disabled={loading}>
        <div className="overlay"></div>
        {loading ? (
          <div className="loader">
            <Loader />
          </div>
        ) : (
          children
        )}
      </button>
    </ButtonContext.Provider>
  );
};

const Label: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <span className="button-label">{children}</span>;
};

const CounterComponent: React.FC<{ children: ReactElement<{ count: number }> }> = ({ children }) => {
  const { count } = useButtonContext();
  return cloneElement(children, { count });
};

Button.Label = Label;
Button.Counter = CounterComponent;

export default Button;
export type { ButtonProps };