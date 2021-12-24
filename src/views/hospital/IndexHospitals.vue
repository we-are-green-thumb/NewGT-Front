<template>
  <div>
    <form>
      <fieldset style="float: left">
        <legend>식물병원이에요</legend>

        <div class="form-group">
          <label for="formFile" class="form-label mt-4"
            >식물을 진단합니다</label
          >
          <input
            class="form-control"
            type="file"
            id="input_img"
            accept="image/*"
            v-bind="fileList"
            @change="fileChange"
          />

          <button type="button" class="btn btn-primary" @click="uploadFile">
            Submit
          </button>

          <div class="resultform">
            <ul>
              <div></div>

              <div>
                <img class="imgSizeA" :src="this.file" />
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
    async fileChange() {
      let file = document.getElementById("input_img");
      var form = new FormData();
      form.append("image", file.files[0]);
      try {
        const res = await http.post(
          "https://api.imgbb.com/1/upload?key=076f41cee131349132a08f6320271a31",
          form
        );
        const { data } = res;
        this.file = data.data.url;
      } catch (error) {
        console.log(error);
        this.file = "";
      }
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
    // async getAnswer() {
    //   const filesurls = this.file;
    //   //(2)vuex의 스토어에 저장해둔 dataId를 가져온다.
    //   const { data } = await checkId(dataId);
    //   //(3)async await로 checkId API 호출.
    //   if (data.status == "done") {
    //     //(4)해당 status 값이 done이면 아래 코드 실행
    //     clearInterval(this.loading);
    //     //(5)clearInterval()에 setInterval에서 반환한 인스턴스를 넣는다.
    //     this.status = data.status;
    //   }
    // },
  },
};
</script>
<style scoped>
.imgSize {
  width: 180px;
  height: 180px;
  vertical-align: center;
  padding: 10px 10px 10px 10px;
  border-radius: 15px;
}
</style>
