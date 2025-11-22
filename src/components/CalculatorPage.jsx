import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Display from './Display';
import Button from './Button';

const CalculatorPage = () => {
  const navigate = useNavigate();
  
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState(null);
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);

  const handleNumber = (num) => {
    if (waitingForSecondValue) {
      setDisplayValue(num);
      setWaitingForSecondValue(false);
    } else {
      setDisplayValue(displayValue === '0' ? num : displayValue + num);
    }
  };

  const handleDecimal = () => {
    if (waitingForSecondValue) {
      setDisplayValue('0.');
      setWaitingForSecondValue(false);
      return;
    }
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const handleOperator = (nextOperator) => {
    const value = parseFloat(displayValue);
    if (firstValue === null) {
      setFirstValue(value);
    } else if (operator) {
      const result = performCalculation(operator, firstValue, value);
      setDisplayValue(String(result));
      setFirstValue(result);
    }
    setWaitingForSecondValue(true);
    setOperator(nextOperator);
  };

  const performCalculation = (op, first, second) => {
    switch (op) {
      case '+': return first + second;
      case '-': return first - second;
      case '*': return first * second;
      case '/': return first / second;
      default: return second;
    }
  };

  const handleClear = () => {
    setDisplayValue('0');
    setFirstValue(null);
    setOperator(null);
    setWaitingForSecondValue(false);
  };

  const handleToggleSign = () => {
    setDisplayValue(String(parseFloat(displayValue) * -1));
  };

  const handleButtonClick = (label) => {
    if (!isNaN(label)) handleNumber(label);
    else if (['+', '-', '*', '/'].includes(label)) handleOperator(label);
    else if (label === '=') { handleOperator(operator); setOperator(null); }
    else if (label === '.') handleDecimal();
    else if (label === 'AC') handleClear();
    else if (label === '+/-') handleToggleSign();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <button 
        onClick={() => navigate('/')}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        &larr; Kembali ke Student Card
      </button>

      <div className="w-full max-w-xs bg-white rounded-xl shadow-xl p-4 border border-gray-200">
        <Display value={displayValue} />
        <div className="grid grid-cols-4 gap-2 mt-4">
            <Button label="AC" onClick={handleButtonClick} className="bg-gray-300 text-black" />
            <Button label="+/-" onClick={handleButtonClick} className="bg-gray-300 text-black" />
            <Button label="%" onClick={() => {}} className="bg-gray-300 text-black" />
            <Button label="/" onClick={handleButtonClick} className="bg-orange-500 text-white" />
            
            <Button label="7" onClick={handleButtonClick} className="bg-gray-700 text-white" />
            <Button label="8" onClick={handleButtonClick} className="bg-gray-700 text-white" />
            <Button label="9" onClick={handleButtonClick} className="bg-gray-700 text-white" />
            <Button label="*" onClick={handleButtonClick} className="bg-orange-500 text-white" />

            <Button label="4" onClick={handleButtonClick} className="bg-gray-700 text-white" />
            <Button label="5" onClick={handleButtonClick} className="bg-gray-700 text-white" />
            <Button label="6" onClick={handleButtonClick} className="bg-gray-700 text-white" />
            <Button label="-" onClick={handleButtonClick} className="bg-orange-500 text-white" />

            <Button label="1" onClick={handleButtonClick} className="bg-gray-700 text-white" />
            <Button label="2" onClick={handleButtonClick} className="bg-gray-700 text-white" />
            <Button label="3" onClick={handleButtonClick} className="bg-gray-700 text-white" />
            <Button label="+" onClick={handleButtonClick} className="bg-orange-500 text-white" />

            <Button label="0" onClick={handleButtonClick} className="col-span-2 bg-gray-700 text-white" />
            <Button label="." onClick={handleButtonClick} className="bg-gray-700 text-white" />
            <Button label="=" onClick={handleButtonClick} className="bg-orange-500 text-white" />
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;