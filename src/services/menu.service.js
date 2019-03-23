import axios from 'axios'
import { promises } from 'fs';

const baseUrl = 'https://app.vegan-friendly.co.il'
let hash = ''
const loginCreds = {
    "login": 'admin',
    "password": 'Fri3ndlyv3gaN'
}
let gId = 314

const rests = [
    { id: 1, name: "Cozy Vegan Eatery", num: 3 },
    { id: 2, name: 'good pizza place', num: 5 },
    { id: 3, name: 'good burger place', num: 5 },
    { id: 4, name: 'rainbow', num: 4 },
    { id: 5, name: 'shuffle', num: 2 },
    { id: 6, name: 'noodels place', num: 0 },
    { id: 7, name: 'i love food', num: 1 },
]

var menuItems = [
    { id: 1, restaurant_id: 1, section_id: 3, name: "Vegan Pizza", description: "Pizza with Vegan Cheese", price: 75 },
    { id: 2, restaurant_id: 1, section_id: 1, name: "fries", description: "good yumi fries", price: 18 },
    { id: 3, restaurant_id: 4, section_id: 3, name: "bitburger", description: "burger from mushrooms, soy and bit", price: 38 },
    { id: 4, restaurant_id: 4, section_id: 3, name: "rainburger", description: "burger from mushrooms and soy", price: 38 },
    { id: 5, restaurant_id: 4, section_id: 2, name: "ice cream", description: "Pizza with Vegan Cheese", price: 75 },
    { id: 6, restaurant_id: 6, section_id: 3, name: "Vegan Pizza", description: "Pizza with Vegan Cheese", price: 75 },
]

const menuSections = [
    { id: 1, title: "Appetizers", position: 1 },
    { id: 2, title: "Desserts", position: 5 },
    { id: 3, title: "Main Courses", position: 3 },
]

function makeId() {
    return gId++
}
function getRests() {
    // return axios.get(`${baseUrl}/restaurants/list?hash="${hash}"`)
    //     .then(({data}) => {
    //         console.log(data)
    //     })
    return Promise.resolve(rests)
}

function login() {
    return axios.post(`${baseUrl}/admin/login`, loginCreds)
        .then(({ data }) => {
            hash = data
        })
        .catch(err => {
        })
}

function getRestItems(restId) {
    return Promise.resolve(menuItems.filter(item => {
        return item.restaurant_id === restId
    }).slice())
}

function getSections() {
    return Promise.resolve(menuSections.sort((a, b) => a.position - b.position))
}

function saveCanges(restId, items) {
    // return axios.post(`${baseUrl}/menu_items/set`, { restaurant_id: restId, menu_items: items })
    //     .then(({ data }) => data)
    return Promise.resolve('succses')

}

export default {
    login,
    getRests,
    getRestItems,
    makeId,
    getSections,
    saveCanges
}