<template>
  <section v-if="reviews.length">
    <section class="column card" v-for="review in reviews" :key="review.id">
      <header class="panel-heading">
        <span>מזהה: {{458613}}</span>
        <span>{{review.user.name}}</span>
        <span>{{review.user.mail}}</span>
      </header>
      <div class="card-content">
        <div class="flex space-between">
          <span class="rest-name">מסעדת {{review.restaurant_name}}</span>
          <span>
            <i  v-for="index in review.rating" :key="index" class="fa fa-star"></i>
          </span>
        </div>
        <div class="review-details">{{review.details}}</div>
        <div>
          משתמש זה כתב {{review.user_reviews_num}} תגובות בעבר
          <a>לכל התגובות</a>
        </div>
      </div>
      <footer class="card-footer">
        <div @click="deleteReview(review.id)">מחק</div>
        <div @click="approveReview(review.id)">אשר</div>
        <div>אשר משתמש</div>
        <div>חסום משתמש</div>
      </footer>
    </section>
  </section>
</template>

<script>
import reviewService from "../services/reviews.service";

export default {
  data() {
    return {
      reviews: []
    };
  },
  created() {
    reviewService.login().then(_ => {
    reviewService
      .getReviews()
      .then(reviews => (this.reviews = reviews))
    })
  },
  methods: {
    deleteReview(reviewId) {
      reviewService.removeReview(reviewId)
    },
    approveReview(reviewId) {
      reviewService.approveReview(reviewId)
    }
  }
};
</script>

<style lang="scss" scoped>
.card-footer {
  display: flex;
  justify-content: space-between;
  div {
    padding: 15px;
    cursor: pointer;
  }
}
header {
  display: flex;
  justify-content: space-between;
}
.rest-name {
    font-weight: bold;
    font-size: 24px;
}
.review-details {
    font-size: 20px;
}
</style>

