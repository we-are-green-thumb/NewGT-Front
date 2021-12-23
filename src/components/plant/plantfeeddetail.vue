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
                       <router-link :to="{ name: 'plant'}">
            <li style="text-decoration: none; color: black;"><small>👑식물 주인: ***</small></li>
                       </router-link>
          </ul>
        </div>
        <p class="mb-1">
     
        </p>
      </a>
      <a
        
        class="
          list-group-item list-group-item-action
          flex-column
          align-items-start
        "
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
        <small class="text-muted">Donec id elit non mi porta.</small>
                  <li style="text-align: right">
            <a href="" class="text-muted">수정하기</a>
          </li>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Plantfeeddetail",
};
</script>
<style scoped>

small{
  text-decoration: none;
  color: black;
}
</style>