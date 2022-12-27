<template>
  <div class="header position-fixed">
    <div class="fixed-top">
      <div class="sale-header align-items-center d-flex container-fluid justify-content-center">
        <p class="sale-text d-flex align-items-center">
          Безкоштовна доставка від 1800 грн
        </p>
      </div>
      <div class="main-header">
        <div class="container  d-flex justify-content-between">
          <div>
            <img src="/img/burger-desk.svg" alt="Burger desk">
            <img src="/img/search.svg" alt="Search icon">
          </div>
          <h1><img src="/img/logo.svg" alt="Perla Helsa logo"></h1>
          <div>
            <img src="/img/call.svg" alt="Call icon">
            <img src="/img/shopping-cart.svg" alt="Shoping cart">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.sale-header {
  height: 44px;
  background: #99AFFF;
}
.container {
  margin: 0 auto;
@media screen and (min-width: 1920px){
  width: 1296px;
}
}
.main-header {
  padding-top: 40px;
}
.sale-text{
  display: flex;
  color: #FFFFFF;
  font-weight: 500;
  margin-bottom: 0;
  &::before, &::after{
    content: "";
    display: inline-block;
    width: 22px;
    height: 22px;
    background: url("/img/drugs.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover ;
    vertical-align: middle;
  }
  &::before {
    margin-right: 15px;
  }
  &::after {
    margin-left: 15px;
  }
}

</style>
