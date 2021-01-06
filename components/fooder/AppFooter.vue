<template>
  <footer>
    <div class="FooterComponent FooterComponentGrid">
      <div class="FooterLogoGrid">
        <div class="FooterTitle FooterLogoGrid">www.apascualco.com</div>
        <div class="FooterTextR">®</div>
      </div>
      <div class="FooterUrlGrid">
        <div>
          blog:
          <a href="https://www.apascualco.com" target="_blank"
            >www.apascualco.com</a
          >
        </div>
        <div>
          New blog:
          <a href="https://blog.apascualco.com" target="_blank"
            >blog.apascualco.com</a
          >
        </div>
      </div>
      <div class="Apascual">Alberto pascual©</div>
    </div>
  </footer>
</template>

<style scoped>
a {
  color: inherit;
}
a:hover {
  font-weight: bold;
}
footer {
  border-top: 2px solid black;
  width: 100%;
  height: 50px;
  bottom: 0;
  position: fixed;
  background-color: #c5c7c8;
}
.FooterComponent {
  margin: auto;
  width: 990px;
  height: 50px;
}
.FooterTitle {
  font-size: 30px;
}
.FooterComponentGrid {
  display: grid;
  grid-template-columns: 40% 30% 29%;
}
.FooterLogoGrid {
  display: grid;
  grid-template-columns: 80% 20%;
}
.FooterUrlGrid {
  text-align: left;
  display: grid;
  grid-template-columns: 100%;
}
.FooterTextR {
  padding-top: 9px;
}
.Apascual {
  padding-top: 8px;
  font-size: 20px;
}
</style>