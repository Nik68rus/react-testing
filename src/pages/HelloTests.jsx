import { useState } from 'react';

const HelloTests = () => {
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    value === 'hello' && setVisible((prev) => !prev);
  };

  const onChange = (e) => setValue(e.target.value);

  return (
    <div>
      <input id="search" type="text" value={value} onChange={onChange} />
      <button id="toggle" onClick={toggle}>
        Hello Tests!
      </button>
      {visible && <h1 id="message">e2e tests is here</h1>}
    </div>
  );
};

export default HelloTests;
