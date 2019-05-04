import React, { Fragment } from 'react';

import './style.css';

const LosingBottas = ({ latestRaceResults }) => (
  <Fragment>
    <h3>No, it looks like Valtteri didn't have his porridge before the {latestRaceResults.raceName}.</h3>
    <img className='losing-bottas' src='https://pbs.twimg.com/media/Db9sKkZWAAE-npl?format=jpg&name=medium' alt='Losing Valtteri Bottas' />
    <p>Photo Source: <a href='https://twitter.com/valtteribottas/status/990629382589992961'>Valtteri's Twitter</a></p>
  </Fragment>
);

export default LosingBottas;
