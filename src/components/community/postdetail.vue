<template>
  <div class="contents">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Card title</h4>
        <h6 class="card-subtitle mb-2 text-muted">작성자는~빙봉~</h6>
        <div>
          <span style="float: right">좋아요 7 조회수 54</span>
        </div>
        <br /><br />
        <br />
        <div>
          <p class="card-text">아따 이거 하나 하는데 시간이 얼마냐</p>
        </div>
        <div class="heart">
          <p>하트</p>
          <br />
        </div>
        <br />
      </div>
    </div>

    <div class="con reply">
      <div class="form-group">
        <div class="form-group">
          <div class="input-group mb-3">
            <input type="text" class="form-control" />
            <button class="btn btn-primary" type="button" id="button-addon2">
              댓글 등록
            </button>
          </div>
        </div>
      </div>
      <section class="reply-list table-common">
        <table class="commenttable" border="1">
          <colgroup>
            <col width="100px" />
          </colgroup>
          <tbody>
            <tr>
              <td>빙봉</td>
              <td class="commentd">아따 css 어렵구만</td>
            </tr>
            <tr>
              <td>내용1</td>
              <td class="commentd">내용2</td>
            </tr>
            <tr>
              <td>내용1</td>
              <td class="commentd">내용2</td>
            </tr>
            <tr>
              <td>내용1</td>
              <td class="commentd">내용2</td>
            </tr>
            <tr>
              <td>내용1</td>
              <td class="commentd">내용2</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
