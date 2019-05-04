import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import Bottas from './components/Bottas';
import './style.css';

const fetchResults = () => axios.get('https://ergast.com/api/f1/current/last/results.json');

const App = () => {
  const [hadPorridge, setHadPorridge] = useState(null);

  useEffect(() => {
    fetchResults()
      .then((response) => {
        if (response.data.MRData.RaceTable.Races[0].Results[0].Driver.code === 'BOT') {
          setHadPorridge(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [hadPorridge]);

  return (
    <div>
      <h1>Has Valtteri Bottas had his porridge?</h1>
      {
        hadPorridge === null ?
        <Bottas /> :
        <p>{hadPorridge === true ? 'Yes': 'No'}</p>
      }
    </div>
  );
};

render(<App />, document.getElementById('root'));
