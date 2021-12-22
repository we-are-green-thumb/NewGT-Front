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
          <th scope="col" style="width:60%">제목</th>
          <th scope="col">작성자</th>
          <th scope="col">좋아요</th>
          <th scope="col">조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" class=titletd>&nbsp;&nbsp;Active</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row" class=titletd>&nbsp;&nbsp;Default</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row" class=titletd>&nbsp;&nbsp;Primary</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row" class=titletd>&nbsp;&nbsp;Secondary</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row" class=titletd>&nbsp;&nbsp;Success</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row" class=titletd>&nbsp;&nbsp;Danger</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row" class=titletd>&nbsp;&nbsp;Warning</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row" class=titletd>&nbsp;&nbsp;Info</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row" class=titletd>&nbsp;&nbsp;Light</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row" class=titletd>&nbsp;&nbsp;Dark</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
