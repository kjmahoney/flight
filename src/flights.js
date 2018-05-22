import { API_KEY } from './key'

export const getFlightData = () => {
  let origin = 'WAS';

  let url = `https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=${API_KEY}&origin=${origin}&aggregation_mode=COUNTRY`
  console.log(url);
  return fetch(url);
    // .then((res) => {
    //   return res.json();
    // })
    // .then((myjson) => {
    //   console.log(myjson);
    // })
}
