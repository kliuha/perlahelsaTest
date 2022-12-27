<template>
  <header class="header position-fixed fixed-top">
    <div class="header__sale-block align-items-center d-flex container-fluid justify-content-center">
      <p class="header__sale-block-text d-flex align-items-center">
        Безкоштовна доставка від 1800 грн
      </p>
    </div>
    <div class="main-header">
      <div class="container main-header__container  d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <a href="#" class="main-header__link-img">
            <svg class="main-header__img burger-menu-img" width="26" height="20" viewBox="0 0 30 24">
              <use href="/img/sprite-header.svg#burger" />
            </svg>
          </a>
          <!-- <img class="main-header__img search-img" src="/img/search.svg" alt="Search icon" width="24"> -->
          <svg class="main-header__img search-img" width="24" height="24" viewBox="0 0 30 24">
            <use href="/img/sprite-header.svg#search" />
          </svg>
        </div>
        <h1><img class="main-header__img logo-img" src="/img/logo.svg" alt="Perla Helsa logo" width="196"></h1>
        <div class="d-flex align-items-center">
          <!-- <img class="main-header__img call-img" src="/img/call.svg" alt="Call icon" width="24"> -->
          <svg class="main-header__img call-img" width="24" height="24" viewBox="0 0 30 24">
            <use href="/img/sprite-header.svg#call" />
          </svg>
          <div class="main-header__cart-block position-relative">
            <!-- <img class="main-header__img cart-img" src="/img/cart.svg" alt="Shoping cart"> -->
            <svg class="main-header__img cart-img" width="27" height="25" viewBox="0 0 30 24">
              <use href="/img/sprite-header.svg#cart" />
            </svg>
            <div class="main-header__cart-count-block d-flex justify-content-center align-items-center position-absolute">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="header__navigation">
      <div class="container header__navigation-container">
        <ul class="header__navigation-list d-flex justify-content-between list-unstyled">
          <li class="header__navigation-item">
            <a href="#" class="header__navigation-link text-decoration-none">Омега-3</a>
          </li>
          <li class="header__navigation-item">
            <a href="#" class="header__navigation-link text-decoration-none">Вітаміни</a>
          </li>
          <li class="header__navigation-item">
            <a href="#" class="header__navigation-link text-decoration-none">Добавки</a>
          </li>
          <li class="header__navigation-item">
            <a href="#" class="header__navigation-link text-decoration-none">Доставка</a>
          </li>
          <li class="header__navigation-item">
            <a href="#" class="header__navigation-link text-decoration-none">Про нас</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.header{
  min-height: 216px;
  padding-bottom: 32px;
  z-index: 10;
}
.header__sale-block {
  min-height: 44px;
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
  margin-bottom: 46px;
}
.main-header__img{
  margin-right: 40px;
  stroke: #1D1D1B;
  fill: #1D1D1B;
  display: block;
  transition: stroke 0.3s, fill 0.3s;
  &:hover{
    stroke: #797973;
    fill: #797973;
    cursor: pointer;
  }
}
.call-img{
  margin-right: 37px;
}
.header__sale-block-text{
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
.main-header__cart-count-block{
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background:#F5F352;
  top: -12px;
  left: 19px;
  font-family: 'Onest';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #1D1D1B;
  letter-spacing: 0.04em;
  z-index: 10;
}
.header__navigation-list{
  width: 636px;
  margin: 0 auto;
}
.header__navigation-link{
  color: #1D1D1B;
  font-size: 23px;
  line-height: 29.32px;
  font-weight: 400;
  transition: color 0.3s;
  &:hover{
    color: #797973;
  }
}
</style>
