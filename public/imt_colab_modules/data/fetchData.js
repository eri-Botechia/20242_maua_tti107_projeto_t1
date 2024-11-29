import BASE_URL from '../CONSTANTS/BASE_URL.js';
import { API_PATHS } from '../CONSTANTS/BASE_PATHS.js';
let offset = 0;
let limit = 6;


const useFetch = (BASE_URL=BASE_URL , path = "") => {
    return fetch(`${BASE_URL}/${path}`)
        .then((response) => response.json())
        
        .catch((error) => {
            console.log(error);
            return []; // Return an empty array on error
        })
        .finally(() => {
            console.log('Request completed');
        });
};



export default useFetch;