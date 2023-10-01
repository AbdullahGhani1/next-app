'use client';

import { useEffect, useState } from 'react';

const About = () => {
  const [value, setValue] = useState('');
  useEffect(() => {
    console.log('useEffect');
  }, [value]);
  console.log(value);
  return (
    <div>
      <h1>About</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="text-black bg-slate-300 rounded"
        placeholder="Enter text"
      />
      {value}
    </div>
  );
};
export default About;
