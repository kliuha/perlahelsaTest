<template>
  <header ref="header" class="header position-fixed fixed-top">
    <div class="header__sale-block align-items-center d-flex container-fluid justify-content-center">
      <p class="header__sale-block-text d-flex align-items-center">
        Безкоштовна доставка від 1800 грн
      </p>
    </div>
    <div class="main-header">
      <div class="section__container main-header__container  d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <a href="#" class="main-header__link-img">
            <svg class="main-header__img burger-menu-img" viewBox="0 0 30 24">
              <use href="/img/sprite-header.svg#burger" />
            </svg>
          </a>
          <svg class="main-header__img search-img" viewBox="0 0 30 24">
            <use href="/img/sprite-header.svg#search" />
          </svg>
        </div>
        <h1><img class="main-header__img logo-img" src="/img/logo.svg" alt="Perla Helsa logo"></h1>
        <div class="d-flex align-items-center cart-call-block">
          <svg class="main-header__img call-img" viewBox="0 0 30 24">
            <use href="/img/sprite-header.svg#call" />
          </svg>
          <div class="main-header__cart-block position-relative">
            <svg class="main-header__img cart-img" viewBox="0 0 30 24">
              <use href="/img/sprite-header.svg#cart" />
            </svg>
            <div class="main-header__cart-count-block d-flex justify-content-center align-items-center position-absolute">
              {{ store.getCount }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="header__navigation">
      <div class="section__container header__navigation-container">
        <ul class="header__navigation-list justify-content-between list-unstyled">
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
import { useCartStore } from "@/stores/cart"
const store = useCartStore()
const header = ref(null)

if (process.client) {
  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop// текущая позиция скролла
    const scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    ) - innerHeight
    const percent = scrollTop / scrollHeight
    if (percent > 0.4) {
      header.value.classList.add("header--scrolling")
    } else {
      header.value.classList.remove("header--scrolling")
    }
  })
}
// function addToCart() {

// }
</script>

<style lang="scss" scoped>
.header{
  z-index: 10;
  @media screen and (max-width: 767px){
    min-height: 85px;
  }
  @media screen and (min-width: 768px){
    min-height: 159px;
  }
  @media screen and (min-width: 1400px){
    min-height: 216px;
    padding-bottom: 32px;
  }
}
.header__sale-block {
  background: #99AFFF;
  @media screen and (max-width: 767px){
    min-height: 28px;
  }
  @media screen and (min-width: 768px){
    min-height: 30px;
  }
  @media screen and (min-width: 1400px){
    min-height: 44px;
  }
}
.main-header {
  @media screen and (max-width: 767px){
    margin-top: 30px;
    margin-bottom: 12px;
  }
  @media screen and (min-width: 768px){
    margin-top: 30px;
    margin-bottom: 46px;
  }
  @media screen and (min-width: 1400px){
    margin-top: 33px;
  }
}
.main-header__img{
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
  @media screen and (max-width: 767px){
    width: 16px;
    height: 16px;
    margin-right: 15px;
  }
  @media screen and (min-width: 768px){
    width: 25px;
    height: 25px;
  }
  @media screen and (min-width: 1400px){
    width: 24px;
    height: 24px;
    margin-right: 37px;
  }
}
.header__sale-block-text{
  display: flex;
  color: #FFFFFF;
  font-weight: 500;
  @media screen and (max-width: 767px){
    font-size: 14px;
    line-height: 22px;
  }
  @media screen and (min-width: 768px){
    font-size: 14px;
    line-height: 20px;
  }
  @media screen and (min-width: 1400px){
    font-size: 20px;
    line-height: 24px;
  }
  margin-bottom: 0;
  &::before, &::after{
    content: "";
    display: inline-block;
    background: url("/img/drugs.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover ;
    vertical-align: middle;
    @media screen and (max-width: 767px){
      width: 14px;
      height: 14px;
  }
    @media screen and (min-width: 768px){
      width: 16px;
      height: 16px;
  }
    @media screen and (min-width: 1400px){
      width: 22px;
      height: 22px;
  }
  }
  &::before {
    @media screen and (max-width: 767px){
      margin-right: 12px;
  }
  @media screen and (min-width: 768px){
    margin-right: 12px;
  }
  @media screen and (min-width: 1400px){
    margin-right: 13px;
  }
  }
  &::after {
    @media screen and (max-width: 767px){
      margin-left: 12px;
  }
  @media screen and (min-width: 768px){
    margin-left: 12px;
  }
  @media screen and (min-width: 1400px){
    margin-left: 13px;
  }
  }
}
.logo-img{
  @media screen and (max-width: 767px){
    width: 120px;
    height: 20px;
  }
  @media screen and (min-width: 768px){
    width: 150px;
    height: 24px;
  }
  @media screen and (min-width: 1400px){
    width: 196px;
    height: 32px;
  }
}
.main-header__cart-count-block{
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
  @media screen and (max-width: 767px){
      width: 14px;
      height: 14px;
  }
  @media screen and (min-width: 768px){
    width: 26px;
  height: 26px;
  }
}
.burger-menu-img{
  @media screen and (max-width: 767px){
      width: 21px;
      height: 21px;
      margin-right: 12px;
  }
  @media screen and (min-width: 768px){
    width: 26px;
      height: 20px;
    margin-right: 33px;
  }
    @media screen and (min-width: 1400px){
      margin-right: 40px;
  }
}
.search-img{
  @media screen and (max-width: 767px){
      width: 14.4px;
      height: 14.4px;
  }
  @media screen and (min-width: 768px){
    width: 23px;
      height: 23px;
  }
    @media screen and (min-width: 1400px){
      width: 24px;
      height: 24px;
  }
}
.cart-img{
  @media screen and (max-width: 767px){
      width: 17px;
      height: 16px;
  }
  @media screen and (min-width: 768px){
    width: 27px;
      height: 25px;
  }
}
.cart-call-block{
  @media (min-width: 768px) and (max-width: 1399px){
    flex-direction: row-reverse;
  }
}
.main-header__cart-block{
  @media screen and (min-width: 768px){
    margin-right: 36px;
  }
}
.header__navigation-list{
  @media screen and (max-width: 767px){
      display: none;
  }
  @media screen and (min-width: 768px){
    width: 100%;
    display: flex;
  }
    @media screen and (min-width: 1400px){
      width: 636px;
      margin: 0 auto;
  }
}
.header__navigation-link{
  color: #1D1D1B;
  font-size: 23px;
  line-height: 29.32px;
  transition: color 0.3s;
  &:hover{
    color: #797973;
  }
  @media screen and (min-width: 768px){
    color: #000;
  }
    @media screen and (min-width: 1400px){
      color: #1D1D1B;
  }
}
.header--scrolling {
  transition: 0.2s;
  background: #FFFFFF;
}
</style>
