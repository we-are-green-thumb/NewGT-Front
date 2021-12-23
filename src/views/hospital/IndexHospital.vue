<template>
  <div>
    <form>
      <fieldset style="float: left">
        <legend>식물병원이에요</legend>

        <div class="form-group">
          <label for="formFile" class="form-label mt-4"
            >식물을 진단합니다</label
          >
          <input class="form-control" type="file" id="input_img" accept="image/*" v-bind="fileList"  @change="fileChange"/>
        
          <button type="button" class="btn btn-primary"  @click="uploadFile" >Submit</button>

          <div class="resultform">
        <ul>
            <div>
              <img class="imgSizeA" :src="this.file" width="60%"/>
            </div>
            <div>
              <h3>당신의 식물은 {{ Hospital.disease }}</h3>
              을 앓고 있습니다.
              <p>{{ Hospital.content }}</p>
            </div>
        </ul>
      </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>


<script>
import http from "@/util/http-common";
import $ from "jquery";

export default {
name: "Hospital",
  data() {
    return {
      fileList: [],
      Hospital: [],
      file: "",
    };
  },

  methods: {
    //식물 이미지 링크 받아오는 api
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
    //식물 이미지 보내는 rest api
    uploadFile() {
      this.file = localStorage.getItem("fileUrl");
      http
        .post("http://localhost:80/plant-hospital", { imageUrl: this.file })
        .then((res) => {
          this.Hospital = res.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {});
    },
  },
};
</script>
<style></style>
