import axios from "axios";

const addReview = async (data) => {
    const response = await axios.post('http://localhost:3004/reviews', data);

    return response.data;
}

const getUserReviews = async (userId) => {
    const response = await axios.get('http://localhost:3004/reviews?userId=' + userId);

    return response.data;
}

const getBookReviews = async (bookId) => {
    const response = await axios.get('http://localhost:3004/reviews?bookId=' + bookId);

    return response.data;
}

const reviewsService = {
    addReview,
    getUserReviews,
    getBookReviews
}

export default reviewsService;