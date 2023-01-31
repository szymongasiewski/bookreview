import axios from "axios";

const addToFavourites = async (data) => {
    const response = await axios.post('http://localhost:3004/favourites', data);

    return response.data;
}

const getFavourites = async (userId) => {
    const response = await axios.get('http://localhost:3004/favourites?userId=' + userId);

    return response.data;
}

const removeFavourite = async (id) => {
    const response = await axios.delete('http://localhost:3004/favourites/' + id);
    //console.log(response);
    //console.log(response.data);
    return response.data;
}

const favouritesService = {
    addToFavourites,
    getFavourites,
    removeFavourite
}

export default favouritesService;