import React, { useEffect, useState } from 'react';
import Users from '../Users/Users';

const MainPage = () => {
  const [data, setData] = useState();
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setData('data');
    }, 1000);
  }, []);

  const clickHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div data-testid="main-page">
      <h1>Hello world!</h1>
      <h2 data-testid="value-el">{value}</h2>
      {toggle && <div data-testid="toggle-elem">VISIBLE</div>}
      <button data-testid="toggle-btn" onClick={clickHandler}>
        Click
      </button>
      <input
        type="text"
        placeholder="input value..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {data && <div style={{ color: 'red' }}>{data}</div>}
      <Users />
    </div>
  );
};

export default MainPage;
