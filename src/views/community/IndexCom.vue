<template>
  <div class="contents">
    <div style="text-align: left; margin: 20px 0px 30px 15px">
      <router-link :to="{ name: 'postwrite' }">
        <button class="btn btn-dark" style="float: right" v-if="isLogin">
          글 쓰기
        </button>
      </router-link>
      <a :href="$router.resolve({ name: 'community' }).href">
        <button type="button" class="btn btn-warning" style="margin-right: 5px">
          전체
        </button>
      </a>
      <button
        type="button"
        class="btn btn-primary"
        style="margin-right: 5px"
        @click="clickFree"
      >
        자유
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        style="margin-right: 5px"
        @click="clickTrade"
      >
        나눔/거래
      </button>
      <button
        type="button"
        class="btn btn-success"
        style="margin-right: 5px"
        @click="clickQuestion"
      >
        질문
      </button>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col" style="width: 55%">제목</th>
          <th scope="col">작성자</th>
          <th scope="col">좋아요</th>
          <th scope="col">조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, i) in posts" :key="i">
          <th scope="row" class="titletd" @click="clicketest(post),moveDetail">
            <a>
              <div>
              <router-link  :to="{ name: 'postdetail' ,
              params:{userId:userId, postId: post.id}}">
              {{ post.title }}
            </router-link>
            <!-- <router-link @click="clicketest(post)" :to="{ name: 'postdetail' ,
               params:{category: post.category, content: post.content, fileUrl: post.fileUrl, hits: post.hits, postid: post.id, isComplete: post.isComplete, likes: post.like, title: post.title, writer: post.writer, writerId: post.writerId}}">
              {{ post.title }}
            </router-link> -->
              </div>
              </a>
          </th>
          <td>{{ post.writer }}</td>
          <td>{{ post.like }}</td>
          <td>{{ post.hits }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import http from "@/util/http-common";
import { mapState } from "vuex";

export default {
  name: "community",

  data() {
    return {
      posts: [],
      userId : "",
    };
  },
  computed: {
    ...mapState(["isLogin"]),
    ...mapState(["userInfo"]),
  },
  created() {
    this.userId = localStorage.getItem('getId');
    console.log(this.userId);
    let token = localStorage.getItem("getToken");
    http
      .get("/posts/", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        this.posts = res.data;
        console.log(this.posts);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {});
  },
  methods: {
    clicketest(value) {
      let PostId = value.id;
      let token = localStorage.getItem("getToken");
      let hits = value.hits + 1;
      http
        .put(
          "/post/" + PostId,
          {
            title: value.title,
            category: value.category,
            content: value.content,
            hits: hits,
            fileUrl: value.fileUrl,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((response) => {
          this.posts = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    clickFree() {
      let postCategory = "free";
      let token = localStorage.getItem("getToken");

      http
        .get("/posts/category/" + postCategory, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          this.posts = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    clickQuestion() {
      let postCategory = "QnA";
      let token = localStorage.getItem("getToken");

      http
        .get("/posts/category/" + postCategory, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          this.posts = response.data;
          console.log(this.posts);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    clickTrade() {
      let postCategory = "share";
      let token = localStorage.getItem("getToken");

      http
        .get("/posts/category/" + postCategory, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          this.posts = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    moveDetail() {
      // let token = localStorage.getItem("getToken");

      // http
      //   .put(
      //     "/post/" + this.posts.postId,
      //     {
      //       title: this.posts.title,
      //       category: this.posts.category,
      //       content: this.posts.content,
      //       fileUrl: this.posts.fileUrl,
      //       hits: this.posts.hits,
      //     },
      //     { headers: { Authorization: `Bearer ${token}` } }
      //   )
      //   .then((response) => {
      //     this.posts = response.data;
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });

      // this.$router.push({
      //   name: "postdetail",
      //   params: { userId: this.$store.state.userInfo.userId, postId: this.posts.postId },
      // });
    },
  },
};
</script>

<style scoped>
</style>
