import axios from 'axios';

const API_KEY = 'a026aeaa1ac9684c33b8af6b516f38f9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get( url );

	// console.log('Request:', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}