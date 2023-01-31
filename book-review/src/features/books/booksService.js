import axios from "axios";

const getBooks = async(searchTerm) => {
    const response = await axios.get('https://openlibrary.org/search.json?title=' + searchTerm);

    return response.data.docs;
}

const getBookDetails = async(bookId) => {
    const response = await axios.get(`https://openlibrary.org/works/${bookId}.json`);

    return response.data;
}

const booksService = {
    getBooks,
    getBookDetails
}

export default booksService;