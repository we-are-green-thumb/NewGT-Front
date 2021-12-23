<template>
  <div>
    <div class="list-group">
      <a
        class="
          list-group-item list-group-item-action
          flex-column
          align-items-start
          active
        "
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{Feed.nickName}}</h5>
          <ul>
            <router-link :to="{ name: 'plant' }">
              <li >
                <router-link :to="{ name: 'plant', params: { userId: this.$route.params.userId } }">
                <small style="text-decoration: none; color: black">👑식물 주인: {{}}</small>
                  </router-link>
              </li>
            </router-link>
          </ul>
        </div>
        <p class="mb-1"></p>
      </a>
      <a
        class="
          list-group-item list-group-item-action
          flex-column
          align-items-start
        "
      >
        <ol>
          
          <li>
            <img
              src="https://cdn.pixabay.com/photo/2016/11/13/10/50/board-1820678__480.jpg"
            />
            <p class="mb-3"></p>
          </li>
          <li>한달에 {{myplant.water}}번 물을 주세요!</li>
          <li>저는 {{myplant.temp}}도를 가장 좋아합니다!</li>
          <small class="text-muted">{{myplant.nickName}}의 가족은 {{myplant.name}}라고 합니다.</small>
        </ol>

        <li style="text-align: right">
          <a href="" class="text-muted">수정하기</a>
        </li>
      </a>
      <p class="mb-3"></p>
      <div class="list-group">
        <a class="list-group-item bg-warning mb-3"
          >친구들의 식물도 구경하세요.</a
        >
      </div>
      <p class="mb-3"></p>
      <div
        style="
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
        "
      >
        <div class="card border-warning mb-3" 
        style="max-width: 20rem"
        
        >
          <p class="mb-3"></p>

          <div class="card-body">
            <router-link 
              :to="{
                name: 'Plantfeeddetail'}" >
            <img
              style="width: 200px"
              src="https://cdn.pixabay.com/photo/2016/11/13/10/50/board-1820678__480.jpg"
            />
            <p class="mb-3"></p>
            <p class="card-text">저는 식물닉네임 이에요.</p>
            <p class="mb-3"></p>
             </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import http from "@/util/http-common";
import { mapState } from "vuex";

export default {
  name: "Plantfeeddetail",
  data() {
    return {
      myplant: [],
      Feed:[]
    };
  },
  props: {
    plantId: {

    },
    userId: {

    },
  },

  computed: {
    ...mapState(["userInfo"]),
  },
  created() {

    let token = localStorage.getItem("getToken");
    http
      .get("/plant/" + this.$route.params.plantId, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.myplant = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {});

      http
      .get("user/" + this.$route.params.userId+"/feed", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.Feed = response.data;
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {});
  },
};
</script>
<style scoped>
ol,
ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
img {
  width: 550px; 
  border-radius:15px
}
</style>