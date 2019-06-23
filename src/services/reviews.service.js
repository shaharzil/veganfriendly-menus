import axios from 'axios';

const baseUrl = 'https://app.vegan-friendly.co.il';
let hash = '';
const loginCreds = {
    login: 'admin',
    password: 'Fri3ndlyv3gaN'
};

let rests = []


function login() {
    return axios
        .post(`${baseUrl}/admin/login`, loginCreds)
        .then(({ data }) => {
            hash = data.hash;
            return setRests()
        })
        .catch(err => { });
}

function setRests() {
    return axios
    .get(`${baseUrl}/admin/restaurants/list?hash=${hash}`)
    .then(({ data }) => {
        rests = data
        return data;
    })
    .catch(err => console.log(err));

}

function getReviews() {

    return axios
        .get(`${baseUrl}/admin/reviews/pending?hash=${hash}`)
        .then(({ data }) => {
            data = data.map(review => {
                let restName = rests.find(rest => rest.id === review.branch_id)
                if (restName) {
                    review.restaurant_name = restName.name
                }
                return review
            })
            data.sort((a,b) => {
                x = new Date(a.created)
                y = new Date(b.created)
                return y.getTime() - x.getTime()
            })
            return data;
        })
        .catch(err => console.log(err));
}


function approveReview(reviewId) {
    return axios
    .get(`${baseUrl}/admin/reviews/approve/${reviewId}?hash=${hash}`)
    .then(({ data }) => {
        return data;
    })
    .catch(err => console.log(err));
}

function removeReview(reviewId) {
    return axios
    .get(`${baseUrl}/admin/reviews/remove/${reviewId}?hash=${hash}`)
    .then(({ data }) => {
        return data;
    })
    .catch(err => console.log(err));
}

export default {
    getReviews,
    login,
    approveReview,
    removeReview,
    setRests
};
