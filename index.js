import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

import { fetchResults } from './api.service';
import './style.css';

const App = () => {
  const [hadPorridge, setHadPorridge] = useState(null);

  useEffect(() => {
    const driverWinnerCode = fetchResults();
    console.log(driverWinnerCode);
    
    if (driverWinnerCode === 'BOT') {
      setHadPorridge(true);
      console.log(driverWinnerCode);
    }
  }, [hadPorridge]);

  return (
    <div>
      <h1>Has Bottas had his porridge?</h1>
      <p>{hadPorridge === true ? 'Yes': 'No'}</p>
    </div>
  );
};

render(<App />, document.getElementById('root'));
