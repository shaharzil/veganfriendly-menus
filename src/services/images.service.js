var photos = [
    {
        id: 7,
        restaurant_name: 'החתול הירוק',
        user_id: 3,
        photo: 'https://vegansontop.co.il/wp-content/uploads/16358872_1772059819721821_1929122999_n.jpg',
        details: 'פיצה טעימה',
        user_photos_num: 5
    },
    {
        id: 8,
        restaurant_name: 'אלגריה',
        photo: 'https://img.mako.co.il/2018/02/25/evabatia2_i.jpg',
        user_id: 3,
        details: 'מושלםםםםם',
        user_photos_num: 5
    },
    {
        id: 9,
        restaurant_name: 'שאפל',
        photo: 'https://www.vegan-friendly.co.il/img/pictures/thumb_1448969512_3403.jpg',
        user_id: 9,
        details: 'המקום הכי מושלם מי שלא שם לא קיים',
        user_photos_num: 3
    },
    {
        id: 10,
        restaurant_name: 'באנה',
        photo: 'https://static2.timeout.co.il/media/2017/06/sizes/DSF9957_P_wo_500_367.jpg',
        user_id: 4,
        details: 'מעצבן אותי שאין להם שם אוכל בלי ירקות',
        user_photos_num: 1
    }
];

var users = [
    { id: 3, name: 'קים קרדשיאן', mail: 'kkw@gmail.com' },
    { id: 9, name: 'סטטיק', mail: 'statboy@gmail.com' },
    { id: 4, name: 'בריטני ספירס', mail: 'itsbritneybitch@gmail.com' }
];

function getphotos() {
    return Promise.resolve(photos.map(review => {review.user = users.find(user => user.id === review.user_id)
    return review}));

}



export default {
    getphotos
};
