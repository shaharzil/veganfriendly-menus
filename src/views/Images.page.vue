<template>
  <section v-if="photos.length">
    <section class="column card" v-for="photo in photos" :key="photo.id">
      <header class="panel-heading">
        <span>מזהה: {{458613}}</span>
        <span>{{photo.user.name}}</span>
        <span>{{photo.user.mail}}</span>
      </header>
      <div class="card-content">
        <div>
          <span class="rest-name">מסעדת {{photo.restaurant_name}}</span>
        </div>
        <div class="rest-photo" :style="{ backgroundImage: 'url(' + photo.photo + ')' }"></div>
        <div class="photo-details">{{photo.details}}</div>
        <div>
          משתמש זה פרסם {{photo.user_photos_num}} תמונות בעבר
          <a>לכל התמונות</a>
        </div>
      </div>
      <footer class="card-footer">
        <div>מחק</div>
        <div>אשר</div>
        <div>אשר משתמש</div>
        <div>חסום משתמש</div>
      </footer>
    </section>
  </section>
</template>

<script>
import photoService from "../services/images.service";

export default {
  data() {
    return {
      photos: []
    };
  },
  created() {
    photoService
      .getphotos()
      .then(photos => (this.photos = photos))
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
.rest-photo {
    width: 200px;
    height: 200px;
        background-size: cover;

}
.rest-name {
  font-weight: bold;
  font-size: 24px;
}
.photo-details {
  font-size: 20px;
}
</style>

