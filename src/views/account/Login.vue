<template>
  <div>
    <form>
      <fieldset>
        <legend>
          <img src="../../assets/images/logo.png" width="500" height="100">
        </legend>
        <div class="form-group row">
          <br>
        <v-img src="https://i.ibb.co/1ZYtvQ8/logo.png" height="100px" width="500px"/>
          <br>
        </div>
        <div class="form-group">
          <label for="exampleSelect1" class="form-label mt-4" style="float:left;">
            이메일
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <br>
        </div>
        <div class="form-group">
        <label for="exampleSelect1" class="form-label mt-4" style="float:left;">
            비밀번호
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
          <br><br><br>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </fieldset>
    </form>
  </div>
</template>

<script>
// import OAuth2Login from '../../components/account/OAuth2Login.vue';

export default {
  // components : {
  //   OAuth2Login
  // },
}
</script>

<style></style>
