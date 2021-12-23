<template>
    <div>
        Welcome username <br><br><br>
<div class="form-group">
  <fieldset>
    <input class="form-control" id="readOnlyInput" type="text" placeholder="이메일" readonly="">
  </fieldset>
</div>
<br><br>

<div class="form-group">
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="닉네임" aria-label="Recipient's username" aria-describedby="button-addon2">
      <button class="btn btn-primary" type="submit" id="button-addon2">변경</button>
    </div>
  </div>
  <br>

<div class="form-group">
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="프로필" aria-label="Recipient's username" aria-describedby="button-addon2">
      <button class="btn btn-primary" type="submit" id="button-addon2">변경</button>
    </div>
  </div>
  <br>

  <div class="form-group">
  <fieldset>
    <input class="form-control" id="readOnlyInput" type="text" placeholder="가입일자" readonly="">
  </fieldset>
</div>
<br><br>

  <div class="form-group">
  <fieldset>
    <input class="form-control" id="readOnlyInput" type="text" placeholder="가입경로" readonly="">
  </fieldset>
</div>
<br>

<div class="form-group">
      <label for="formFile" class="form-label mt-4">프로필 사진</label>
      <input class="form-control" type="file" id="formFile">
    </div>
    </div>
</template>

<script>
export default {
  
    
}
</script>

<style>
    
</style>