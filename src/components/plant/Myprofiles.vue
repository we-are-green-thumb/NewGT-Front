<template>
  <div>
    <div class="list-group">
      <span
        class="
          list-group-item list-group-item-action
          flex-column
          align-items-start
          active
        "
      >
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">{{User.nickName}}</h4>
          <ul v-show="canFollow">
            <li><button class="btn btn-light" @click="followerupdate" >팔로우 하기</button></li>
            <li><button class="btn btn-light" @click="followerdelete"> 팔로우 취소</button></li>
          </ul>
        </div>
      </span>

      <span
        class="
          list-group-item list-group-item-action
          flex-column
          align-items-start
        "
      >
        <div class="d-flex w-100 justify-content-between">
          <h6 class="mb-1"></h6>
          <ul>
            <li>
              <a href="" class="text-muted">팔로우수: {{User.followeeCount}}</a>
              &nbsp;&nbsp;
              <a href="" class="text-muted">팔로잉 수: {{User.followerCount}}</a>
            </li>
          </ul>
        </div>
        <p class="mb-1" style="text-align: left">
          {{User.profile}}
        </p>
      </span>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import http from "@/util/http-common";

export default {
  name: "Myprofile",

  data() {
    return {
      myplants: [],
      User: [],
      canFollow: true,
    };
  },
  props: {
    userId: {},
    plantId: {},
  },
  computed: {
    ...mapState(["myplant"]),
    ...mapState(["userInfo"]),
  },
  components: {},
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        this.$router.go(this.$router.currentRoute);
      }
    },
  },
  created() {
    let id = localStorage.getItem("getId");
    let token = localStorage.getItem("getToken");
    http
      .get("user/" + this.$route.params.userId + "/feed", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.User = response.data;
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {});

    if (id === this.$route.params.userId) {
      this.canFollow = false
    } else {
      this.canFollow = true
    }
  },
  methods: {
    followerupdate() {
      let token = localStorage.getItem("getToken");
      http
        .post(
          "user/" +
            this.$store.state.userInfo.userId +
            "/followee/" +
            this.$route.params.userId +
            "/follow",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          this.$router.go(this.$router.currentRoute);
        });
    },
    followerdelete() {
      let token = localStorage.getItem("getToken");
      http
        .delete(
          "user/" +
            this.$store.state.userInfo.userId +
            "/followee/" +
            this.$route.params.userId +
            "/follow",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          this.$router.go(this.$router.currentRoute);
        });
    },
  },
};
</script>
<style>
li {
  list-style: none;
}
</style>