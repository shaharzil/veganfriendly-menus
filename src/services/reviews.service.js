var reviews = [
    {
        id: 7,
        restaurant_name: 'החתול הירוק',
        rating: 4,
        user_id: 3,
        details: 'המלצר קרא לי מכוערת אבל האוכל היה טעים אז בסדר',
        user_reviews_num: 5
    },
    {
        id: 8,
        restaurant_name: 'אלגריה',
        rating: 5,
        user_id: 3,
        details: 'מושלםםםםם',
        user_reviews_num: 5
    },
    {
        id: 9,
        restaurant_name: 'שאפל',
        rating: 5,
        user_id: 9,
        details: 'המקום הכי טעים ומושלם שקיים בעולם כולו',
        user_reviews_num: 3
    },
    {
        id: 10,
        restaurant_name: 'באנה',
        rating: 1,
        user_id: 4,
        details: 'מעצבן אותי שאין להם שם אוכל בלי ירקות',
        user_reviews_num: 1
    }
];

var users = [
    { id: 3, name: 'קים קרדשיאן', mail: 'kkw@gmail.com' },
    { id: 9, name: 'סטטיק', mail: 'statboy@gmail.com' },
    { id: 4, name: 'בריטני ספירס', mail: 'itsbritneybitch@gmail.com' }
];

function getReviews() {
    return Promise.resolve(reviews.map(review => {review.user = users.find(user => user.id === review.user_id)
    return review}));

}



export default {
    getReviews
};
