const axios = require('axios');

export const fetchResults = () => {
  axios.get('https://ergast.com/api/f1/current/last/results.json')
    .then((response) => {
      return response.data.MRData.RaceTable.Races[0].Results[0].Driver.code;
    })
    .catch((error) => {
      console.log(error);
    });
};
