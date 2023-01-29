import axios from "axios";

const getBooks = async(searchTerm) => {
    const response = await axios.get('https://openlibrary.org/search.json?title=' + searchTerm);

    return response.data.docs;
}

const booksService = {
    getBooks,
}

export default booksService;