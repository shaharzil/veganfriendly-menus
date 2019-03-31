<template>
  <section>
    <h2 class="title">{{section.title}}</h2>
    <div v-if="section.items.length">
      <table class="table is-hoverable is-fullwidth">
        <thead>
          <tr>
              <th>שם המנה</th>
              <th>תיאור</th>
              <th>מחיר</th>
          </tr>
        </thead>
        <tbody>
            <tr  v-for="item in section.items" :key="item.id">
                <td>{{item.title}}</td>
                <td>{{item.description}}</td>
                <td>{{item.price}}</td>
            </tr>
        </tbody>
      </table>
    </div>
    <h2 v-else>אין מנות בקטגוריה זו</h2>
  </section>
</template>

<script>
import menuService from "../services/menu.service.js";

export default {
  props: ["section"],
};
</script>

<style lang="scss" scoped>
table td, table th {
    text-align: right;
}
h2.title {
    text-align: center;
    margin-top: 15px;
    margin-bottom: 7px
}
</style>

