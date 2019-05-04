import React, { Fragment } from 'react';

import './style.css';

const WinningBottas = ({ latestRaceResults }) => (
  <Fragment>
    <h3>Yes! Valtteri had his porridge before the {latestRaceResults.raceName}</h3>
    <img className='winning-bottas' src='https://pbs.twimg.com/media/D12kkUKUYAAam2-?format=jpg&name=4096x4096' alt='Winning Valtteri Bottas' />
    <p>Photo Source: <a href='https://twitter.com/ValtteriBottas/status/1107222046600093696/'>Valtteri's Twitter</a></p>
  </Fragment>
);

export default WinningBottas;