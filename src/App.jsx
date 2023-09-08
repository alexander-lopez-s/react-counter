import { useState } from 'react';
import Button from './components/button';
import './App.css';

const App = ()  => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount)=> prevCount + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const counterClass = count < 0 ? 'red-text' : count === 0 ? 'white-text' : 'green-text';

  return (
    <div>
      <h1>Counter</h1>
      <h2 className={counterClass}>{count}</h2>
      <Button clickHandler={increment} text="➕" />
      <Button clickHandler={reset} text="🔄 " />
      <Button clickHandler={decrement} text="➖" />
    </div>
  );
}

export default App;
