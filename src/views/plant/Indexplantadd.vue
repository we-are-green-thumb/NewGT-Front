<template>
  <div>
    <form>
      <fieldset>
        <legend>🌱식물 등록🌱</legend>
        <div class="form-group row">
          <label for="staticEmail" class="col-sm-6 col-form-label"
            >식물의 별명을 지어주세요</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="staticEmail"
              placeholder="레몬"
              v-model="nickName"
            />
          </div>
        </div>
        <div class="form-group" style="text-align: left">
          <label for="formFile" class="col-sm-6 col-form-label"
            >식물의 사진을 등록해주세요</label
          >
          <!-- <label for="staticEmail" class="col-sm-6 col-form-label">마지막으로 물을 언제주셨나요</label> -->

          <input
            class="form-control"
            type="file"
            v-bind="fileList"
            id="input_img"
            @change="fileChange"
          />
          <div>
            <img class="imgSizeA" :src="imageUrl" />
          </div>
        </div>
        <div class="form-group row" style="text-align: left">
          <label for="staticEmail" class="col-sm-4 col-form-label"
            >식물의 종</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="staticEmail"
              placeholder="선인장"
              v-model="name"
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="staticEmail" class="col-sm-6 col-form-label"
            >마지막으로 물을 언제주셨나요</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="staticEmail"
              placeholder="1"
              v-model="water"
            />
          </div>
        </div>
        <div class="form-group row" style="text-align: left">
          <label for="staticEmail" class="col-sm-3 col-form-label">온도</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="staticEmail"
              placeholder="1"
              v-model="temp"
            />
          </div>
        </div>
        <p class="mb-3"></p>
        <button @click="registerPlant()" class="btn btn-primary">등록</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import http from "@/util/http-common";

export default {
  name: "Content",
  data() {
    return {
      name: "",
      nickName: "",
      water: "",
      temp: "",
      imageUrl: "",
      fileList: [],
    };
  },
  methods: {
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
        this.imageUrl = data.data.url;
      } catch (error) {
        console.log(error);
        this.imageUrl = "";
      }
    },
    registerPlant() {
      let userId = localStorage.getItem("getId");
      let token = localStorage.getItem("getToken");
      var data = {
        name: this.name,
        nickName: this.nickName,
        water: this.water,
        temp: this.temp,
        imageUrl: this.imageUrl,
      };
      http
        .post("/user/" + userId + "/plant", data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data);
          this.$router.go(this.$router.currentRoute, alert("저장완료"));
          // alert("저장완료")
          // this.$router.push({name:"IndexMain"});
          localStorage.removeItem("fileUrl");
        })
        .catch((err) => {
          console.log(err);
          alert("저장실패");
        });
    },
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
