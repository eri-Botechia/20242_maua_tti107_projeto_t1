import useFetch from "./fetchData";

const dataSlash = useFetch(BASE_URL, API_PATHS.SLASH);


const dataPages = {
    slash: dataSlash,
}

export default dataPages;