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
          <h5 class="mb-1">나는 선선선이에요.</h5>
          <ul>
            <router-link :to="{ name: 'plant' }">
              <li style="text-decoration: none; color: black">
                <small>👑식물 주인: ***</small>
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
          <li>한달에 *번 물을 주세요!</li>
          <li>저는 *도를 가장 좋아합니다!</li>
          <small class="text-muted">닉네임**의 가족은 **식물종 입니다.</small>
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
        <div class="card border-warning mb-3" style="max-width: 20rem">
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
export default {
  name: "Plantfeeddetail",


    watch: {
    $route(to, from) {
      if (to.path != from.path) {
        this.$router.go(this.$router.currentRoute);
      }
    },
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