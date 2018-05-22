import { API_KEY } from './key'


let dest = 'LON';

let date = '2018-06-25';

// let url = `https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=${API_KEY}&origin=${origin}&destination=${dest}&departure_date=${date}`


export const handleFlights = () => {
  let origin = 'WAS';

  let url = `https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=${API_KEY}&origin=${origin}&aggregation_mode=COUNTRY`
  console.log(url);
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((myjson) => {
      console.log(myjson);
    })
}
