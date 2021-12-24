<template>
  <div class="contents">
    <br>
    <div
      class="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio1"
        autocomplete="off"
        checked=""
      />
      <label class="btn btn-outline-primary" for="btnradio1">자유 게시판</label>
      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio2"
        autocomplete="off"
        checked=""
      />
      <label class="btn btn-outline-primary" for="btnradio2">질문 게시판</label>
      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio3"
        autocomplete="off"
        checked=""
      />
      <label class="btn btn-outline-primary" for="btnradio3">거래 게시판</label>
    </div>

    <br><br><br>

    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col" style="width:55%">제목</th>
          <th scope="col">작성자</th>
          <th scope="col">좋아요</th>
          <th scope="col">조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" class=titletd>&nbsp;&nbsp;<a href="postdetail">내식물</a></th>
          <td>삥뽕</td>
          <td>22</td>
          <td>222</td>
        </tr>
        <tr>
          <th scope="row" class=titletd>&nbsp;&nbsp;Default</th>
          <td>삥뽕</td>
          <td>22</td>
          <td>222</td>
        </tr>
        <tr>
          <th scope="row" class=titletd>&nbsp;&nbsp;Primary</th>
          <td>삥뽕</td>
          <td>22</td>
          <td>222</td>
        </tr>
        <tr>
          <th scope="row" class=titletd>&nbsp;&nbsp;Secondary</th>
          <td>삥뽕</td>
          <td>22</td>
          <td>222</td>
        </tr>
        <tr>
          <th scope="row" class=titletd>&nbsp;&nbsp;Success</th>
          <td>삥뽕</td>
          <td>22</td>
          <td>222</td>
        </tr>
        <tr>
          <th scope="row" class=titletd>&nbsp;&nbsp;Danger</th>
          <td>삥뽕</td>
          <td>22</td>
          <td>222</td>
        </tr>
        <tr>
          <th scope="row" class=titletd>&nbsp;&nbsp;Warning</th>
          <td>삥뽕</td>
          <td>22</td>
          <td>222</td>
        </tr>
        <tr>
          <th scope="row" class=titletd>&nbsp;&nbsp;Info</th>
          <td>삥뽕</td>
          <td>22</td>
          <td>222</td>
        </tr>
        <tr>
          <th scope="row" class=titletd>&nbsp;&nbsp;Light</th>
          <td>삥뽕</td>
          <td>22</td>
          <td>222</td>
        </tr>
        <tr>
          <th scope="row" class=titletd>&nbsp;&nbsp;Dark</th>
          <td>삥뽕</td>
          <td>22</td>
          <td>222</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
