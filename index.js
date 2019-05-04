import React, { useEffect, useState, Fragment } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import LoadingBottas from './components/LoadingBottas';
import LosingBottas from './components/LosingBottas';
import WinningBottas from './components/WinningBottas';
import './style.css';

const fetchResults = () => axios.get('https://ergast.com/api/f1/current/last/results.json');

const App = () => {
  const [latestRaceResults, setLatestRaceResults] = useState(null);
  const [hadPorridge, setHadPorridge] = useState(null);

  useEffect(() => {
    fetchResults()
      .then((response) => {
        setLatestRaceResults(response.data.MRData.RaceTable.Races[0]);

        if (response.data.MRData.RaceTable.Races[0].Results[0].Driver.code === 'BOT') {
          setHadPorridge(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id='main-container'>
      <h1>Has Valtteri Bottas had his porridge?</h1>
      {
        hadPorridge === null ?
          <LoadingBottas /> :
          <Fragment>
            {
              hadPorridge === true ? 
                <WinningBottas latestRaceResults={latestRaceResults} />  :
                <LosingBottas latestRaceResults={latestRaceResults} />
            }
          </Fragment>
      }
    </div>
  );
};

render(<App />, document.getElementById('root'));
