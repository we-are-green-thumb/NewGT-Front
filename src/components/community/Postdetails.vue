<template>
  <div class="contents">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{{ posts.title }}</h4>
        <br />
        <h6 class="card-subtitle mb-2 text-muted">{{ posts.writer }}</h6>
        <div>
          <span style="float: right"
            >좋아요 {{ posts.like }} 조회수 {{ posts.hits }}</span
          >
        </div>
        <br /><br />
        <div>
          <img class="imgSizeA" :src="posts.fileUrl" />
        </div>
        <br />
        <div>
          <p class="card-text">{{ posts.content }}</p>
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

    <div class="con reply">
      <div class="form-group">
        <div class="form-group">
          <div class="input-group mb-3">
            <input type="text" class="form-control" />
            <button class="btn btn-primary" type="button" id="button-addon2">
              댓글 등록
            </button>
          </div>
        </div>
      </div>
      <section class="reply-list table-common">
        <table class="commenttable" border="1">
          <colgroup>
            <col width="100px" />
          </colgroup>
          <tbody>
            <tr v-for="(comment, idx) in comments" :key="idx">
              <td>{{ comment.writer }}</td>
              <td class="commentd">{{ comment.content }}</td>
            </tr>
            <!-- <tr>
              <td>내용1</td>
              <td class="commentd">내용2</td>
            </tr>
            <tr>
              <td>내용1</td>
              <td class="commentd">내용2</td>
            </tr>
            <tr>
              <td>내용1</td>
              <td class="commentd">내용2</td>
            </tr>
            <tr>
              <td>내용1</td>
              <td class="commentd">내용2</td>
            </tr> -->
          </tbody>
        </table>
      </section>
    </div>
  </div>
</template>
<script>
import http from "@/util/http-common";
import { mapState } from "vuex";

export default {
  name: "postdetail",
  data() {
    return {
      posts: [],
      yeslike: false,
      comments: [],
    };
  },
  props: {
    postId: {},
    userId: {},
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
      .get("http://localhost:80/post/" + this.$route.params.postId, {
        headers: { Authorization: `Bearer ${token}` },
      }) //게시글을 불러옴.
      .then((res) => {
        this.posts = res.data;
        console.log(this.posts);
        this.writerId = res.data.writerId;
        this.logId = localStorage.getItem("getId");
        if (this.writerId == this.logId) {
          this.chekcWrite = true;
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
            this.postId +
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
.imgSizeA {
  width: 180px;
  height: 180px;
  vertical-align: center;
  padding: 10px 10px 10px 10px;
  border-radius: 15px;
}
</style>
