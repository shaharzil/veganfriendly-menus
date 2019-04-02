import axios from 'axios';
import { promises } from 'fs';

const baseUrl = 'https://app.vegan-friendly.co.il';
let hash = '';
const loginCreds = {
    login: 'admin',
    password: 'Fri3ndlyv3gaN'
};
let gId 

function makeId() {
    return gId++;
}

function getRests() {
    return axios
        .get(`${baseUrl}/admin/restaurants/list?hash=${hash}`)
        .then(({ data }) => {
            return data;
        })
        .catch(err => console.log(err));
}

function login() {
    return axios
        .post(`${baseUrl}/admin/login`, loginCreds)
        .then(({ data }) => {
            hash = data.hash;
        })
        .catch(err => { });
}

function getRestItems(restId) {
    return axios
        .get(`${baseUrl}/admin/menu_items/list/${restId}?hash=${hash}`)
        .then(({ data }) => {
            gId = Math.max(...data.map(({id}) => +id))
            return data;
        });
}

function getSections() {
    return axios
        .get(`${baseUrl}/admin/menu_sections/list?hash=${hash}`)
        .then(({ data }) => {
            return data.sort((a, b) => a.position - b.position);
        });
}

function saveCanges(restId, items) {
    return axios
        .post(`${baseUrl}/admin/menu_items/set?hash=${hash}`, {
            restaurant_id: +restId,
            menu_items: JSON.stringify(items)
        })
        .then(({ data }) => {
            return data;
        });
}

function addSection(newSection) {
    return axios.post(`${baseUrl}/admin/menu_sections/add?hash=${hash}`, newSection).then(_ => {
       return _
    })
}

function addItem(item) {
    axios.post(`${baseUrl}/admin/menu_items/add?hash=${hash}`, item).then(_ => {
        return _
    })
}

function deleteItem(itemId) {
    axios.get(`${baseUrl}/admin/menu_items/delete/${itemId}?hash=${hash}`)
}

export default {
    login,
    getRests,
    getRestItems,
    makeId,
    getSections,
    saveCanges,
    addSection,
    addItem,
    deleteItem
};
