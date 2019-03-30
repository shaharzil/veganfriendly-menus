import axios from 'axios'
import { promises } from 'fs';

const baseUrl = 'https://app.vegan-friendly.co.il'
let hash = ''
const loginCreds = {
    "login": 'admin',
    "password": 'Fri3ndlyv3gaN'
}
let gId = 314
function makeId() {
    return gId++
}
function getRests() {
    return axios.get(`${baseUrl}/admin/restaurants/list?hash=${hash}`)
        .then(({data}) => {
            return data
        })
        .catch(err => console.log(err))
}

function login() {
    return axios.post(`${baseUrl}/admin/login`, loginCreds)
        .then(({ data }) => {
            hash = data.hash
        })
        .catch(err => {
        })
}

function getRestItems(restId) {
    return axios.get(`${baseUrl}/admin/menu_items/list/${restId}?hash=${hash}`)
    .then(({data}) => {
        return data
    })
}

function getSections() {
    return axios.get(`${baseUrl}/admin/menu_sections/list?hash=${hash}`)
    .then(({data}) => {
        return data.sort((a, b) => a.position - b.position)
    })

}

function saveCanges(restId, items) {
    return axios.post(`${baseUrl}/admin/menu_items/set?hash=${hash}`, { restaurant_id: +restId, menu_items: JSON.stringify(items) })
        .then(({ data }) => {
            console.log(data)
            return data
        })

}

export default {
    login,
    getRests,
    getRestItems,
    makeId,
    getSections,
    saveCanges
}