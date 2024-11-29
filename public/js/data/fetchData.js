let offset = 0;
let limit = 6;

const BASE_URL = `http://localhost:9475`;

const fetchData = (path = "") => {
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

const fetchNotebooks = fetchData("notebooks");
const fetchDataObj = {
    notebooks: fetchNotebooks
};

export default fetchDataObj;