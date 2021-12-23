<template>
  <div>
    <div class="list-group">
      <a
        href="#"
        class="
          list-group-item list-group-item-action
          flex-column
          align-items-start
          active
        "
      >
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">닉네임의 식물</h4>
          <ul>
            <li><small>팔로우 하기</small></li>
          </ul>
        </div>
      </a>

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
              <a href="" class="text-muted">팔로우수: 00명</a>
              &nbsp;&nbsp;
              <a href="" class="text-muted">팔로잉 수: 00명</a>
            </li>
          </ul>
        </div>
        <p class="mb-1" style="text-align:left;">이곳은 저의 자기소개 란 입니다.</p>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Myprofile",
};
</script>
<style>
li {
  list-style: none;
}
</style>