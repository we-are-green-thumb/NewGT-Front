<template>
  <div class="contents">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{{ title }}</h4>
        <br />
        <h6 class="card-subtitle mb-2 text-muted">{{ writer }}</h6>
        <div>
          <span style="float: right">좋아요 {{ likes }} 조회수 {{ hits }}</span>
        </div>
        <br /><br />
        <div>
          <img :src="fileUrl" />
        </div>
        <br />
        <div>
          <p class="card-text">{{ content }}</p>
        </div>

        <div class="heart" @click="clickLike">
          <a v-show="yeslike" style="font-size: xx-large; color: green">❤</a>
          <a
            v-show="yeslike == false"
            style="font-size: xx-large; color: lightgrey"
            >❤</a
          >
          <br />
          <br />
        </div>
      </div>
    </div>
    <commentlist v-bind:postidx="this.posts"/>
  </div>
</template>
<script>
import http from "@/util/http-common";
import { mapState } from "vuex";
import commentlist from "../community/Commentlists.vue";

export default {
  name: "postdetail",
  components: {
    commentlist,
  },
  data() {
    return {
      posts: [],
      yeslike: false,
    };
  },
  props: {
    category: {},
    content: {},
    fileUrl: {},
    hits: {},
    postid: {},
    isComplete: {},
    likes: {},
    title: {},
    writer: {},
    writerId: {},
  },
  computed: {
    ...mapState(["isLogin"]),
    ...mapState(["userInfo"]),
  },
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        this.$router.go(this.$router.currentRoute);
      }
    },
  },
  created() {
    let token = localStorage.getItem("getToken");
    http
      .get(
        "http://localhost:80/post/" + this.$route.params.postId + "/comments",
        { headers: { Authorization: `Bearer ${token}` } }
      ) //댓글을 불러옴.
      .then((res) => {
        this.comments = res.data;
        console.log(this.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    clickLike() {
      let token = localStorage.getItem("getToken");
      http
        .post(
          "/post/" +
            this.postid +
            "/user/" +
            this.$store.state.userInfo.userId +
            "/like",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          // console.log(res);
          this.like = res.data;
          this.yeslike = !this.yeslike;
          alert(this.like);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.card-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 5%;
  min-height: 400px;
  position: relative;
  float: center;
}
.heart:hover {
  cursor: pointer;
}
</style>
