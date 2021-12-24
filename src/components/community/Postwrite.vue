<template>
  <div>
    <div class="form-group">
      <label for="exampleSelect1" class="form-label mt-4">Example select</label>
      <select class="form-select" v-model="cate">
        <option value="free">자유</option>
        <option value="QnA">질문</option>
        <option value="share">나눔거래</option>
      </select>

      <label for="exampleTextarea" class="form-label mt-4"
        >Example textarea</label
      >
      <textarea class="form-control" rows="3" v-model="title"></textarea>
      <textarea class="form-control" rows="3" v-model="content"></textarea>
      <input
        v-bind="fileList"
        id="input_img"
        type="file"
        accept="image/*"
        multiple
        @change="fileChange"
      />
       <button @click="addPost" class="btn btn-primary">완료</button>
    </div>
  </div>
</template>
<script>
import http from "@/util/http-common";
import $ from "jquery";

export default {
  name: "postwrite",
  data: () => ({
    cate: "",
    title: "",
    content: "",
    userId: "",
    fileList: [],
    fileUrl: "",
  }),
  created() {
    this.userId = localStorage.getItem("getId");
  },
  methods: {
    fileChange() {
      var file = document.getElementById("input_img");
      var form = new FormData();
      form.append("image", file.files[0]);

      var settings = {
        url: "https://api.imgbb.com/1/upload?key=076f41cee131349132a08f6320271a31",
        method: "POST",
        timeout: 0,
        processData: false,
        mimeType: "multipart/form-data",
        contentType: false,
        data: form,
      };
      $.ajax(settings).done(function (response) {
        console.log(response);
        var jx = JSON.parse(response);
        this.fileUrl = jx.data.url + "";
        localStorage.setItem("fileUrl", this.fileUrl);
      });
    },

    addPost() {
      let token = localStorage.getItem("getToken");
      let userId = localStorage.getItem("getId");
      let fileUrl = localStorage.getItem("fileUrl");
      let data = {
        title: this.title,
        category: this.cate,
        content: this.content,
        fileUrl: fileUrl + "",
      };
      http
        .post(
          "user/" + userId + "/post",
          data,
          // {headers: { Authorization: `Bearer ${token}`,'Content-Type': 'multipart/form-data'}
          { headers: { Authorization: `Bearer ${token}`, userId: userId } }
        ) //게시글을 추가
        .then((response) => {
          console.log(response);

          alert("저장 성공");
          // alert(localStorage.getItem('fileUrl'))
          localStorage.removeItem("fileUrl");
          this.$router.go(-1);
          // this.$router.go(this.$router.go(-1), alert('저장완료'))
        })
        .catch((error) => {
          console.log(error);
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
  min-width: 800px;
  position: relative;
  float: center;
}
</style>