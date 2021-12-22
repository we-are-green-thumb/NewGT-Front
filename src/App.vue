<template>
  <div id="basr">
    <!-- nav class에 navbar-dark 삭제함 -->
    <nav class="navbar navbar-expand-lg bg-logInNav">
      <!--div class에 collapse 삭제 -->
      <div class="navbar-collapse" id="navbarColor">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link" href="/auth/login">
              <img src="./assets/images/user.png"  width="30" height="30">
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/auth/signup">
              <img src="./assets/images/dsBuffe.png"  width="25" height="24">
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div id="app">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <!-- <img src="../src/assets/images/logo.png" alt=""> -->
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" href="/"
                  >홈
                  <!-- <img src="./assets/images/miniLogo.png" width="50" height="50"> -->
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">내식물</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/community">커뮤니티</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">식물 MBTI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">식물병원</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">식물등록</a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-sm-2"
                type="text"
                placeholder="식물 이름 검색"
              />
              <button class="btn btn-secondary my-2 my-sm-0" type="submit">
                <img src="./assets/images/natural.png" width="30" height="30" style="filter:invert(100%);">
              </button>
            </form>
          </div>
        </div>
      </nav>
      <br><br>
      <div class="body">
        <br>
      <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  component: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#bar {
  padding: 30px;
  color: rgb(167, 82, 82);
}

#nav a.router-link-exact-active {
  color: #4297b9;
}

.body {
    width: 70%;
    min-height: 800px;
    margin-right: auto;
    margin-left: auto;
    background-color: white;
    border: 1px solid burlywood;
    display: flex;
    flex-direction: column;
    align-items: center;
    word-break: break-all;
}

</style>
