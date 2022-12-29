<template>
  <main class="main">
    <div class="section__container">
      <div class="product d-flex justify-content-between">
        <div class="product__desc">
          <h2 class="product__name d-flex">
            <span class="product__name-title fw-bolder">Омега-3 <span class="product__name-span fst-italic">Тріска</span></span> <span class="product__name-vitamins d-flex justify-content-center align-items-center">з вітамінами А і D3</span>
          </h2>
          <div class="product__desc-tabs position-relative">
            <input id="desc" class="product__desc-tabs-input" type="radio" name="product-tabs" checked>
            <label class="product__desc-tabs-label d-inline-block" for="desc">Опис</label>
            <input id="benefits" class="product__desc-tabs-input" type="radio" name="product-tabs">
            <label class="product__desc-tabs-label d-inline-block" for="benefits">Користь</label>
            <input id="ingredients" class="product__desc-tabs-input" type="radio" name="product-tabs">
            <label class="product__desc-tabs-label d-inline-block" for="ingredients">Інгрідієнти</label>
            <input id="application" class="product__desc-tabs-input" type="radio" name="product-tabs">
            <label class="product__desc-tabs-label d-inline-block" for="application">Спосіб застосування</label>
            <div id="desc-content" class="product__tabs-content product__tabs-content-desc">
              <p ref="description" class="product__tabs-content-desc-text">
                Комплекс EPA + DHA кислот і натуральних вітамінів А & D3 для здоров'я твоєї шкіри<span class="comma">,</span> волосся, зору, сну, міцних кісток, суглобів та імунітету.
              </p>
              <button ref="learnMoreButton" class="learn-more" @click="showFullDesc">
                Дізнатись більше
              </button>
            </div>
            <div id="benefits-content" class="product__tabs-content product__tabs-content-benefits">
              <ul class="benefits-list">
                <li class="benefits-item">
                  Покращують стан шкіри: борються з акне та сприяють її регенерації
                </li>
                <li class="benefits-item">
                  Зменшують випадіння волосся, стимулюють його ріст
                </li>
                <li class="benefits-item">
                  Підіймають настрій та полегшують симптоми депресії
                </li>
                <li class="benefits-item">
                  Зміцнюють імунітет: зменшують запальні процеси
                </li>
                <li class="benefits-item">
                  Поліпшують роботу гормонів, серця і ЦНС
                </li>
                <li class="benefits-item">
                  Зменшують болі в суглобах
                </li>
                <li class="benefits-item">
                  Покращують метаболізм і роботу ШКТ
                </li>
              </ul>
            </div>
            <div id="ingredients-content" class="product__tabs-content product__tabs-content-ingredients">
              <table class="ingridients-table">
                <tbody>
                  <tr>
                    <td class="ingridients-table__ing-name align-top">
                      <strong>Склад:</strong>
                    </td>
                    <td class="ingridients-table__ing-desc align-top">
                      100% риб'ячий жир з печінки тріски, желатин, гліцерин.
                    </td>
                  </tr>
                  <tr>
                    <td class="ingridients-table__ing-name align-top">
                      <strong>EPA / DHA</strong>
                    </td>
                    <td class="ingridients-table__ing-desc align-top">
                      170 мг / 205 мг
                    </td>
                  </tr>
                  <tr>
                    <td class="ingridients-table__ing-name align-top">
                      <strong>Вітамін-А</strong>
                    </td>
                    <td class="ingridients-table__ing-desc align-top">
                      656 мкг 2187 МО
                    </td>
                  </tr>
                  <tr>
                    <td class="ingridients-table__ing-name align-top">
                      <strong>Вітамін-D3</strong>
                    </td>
                    <td class="ingridients-table__ing-desc align-top">
                      5.2 мкг 210 МО
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div id="application-content" class="product__tabs-content product__tabs-content-application">
              <p class="product__tabs-content-application__text">
                Для профілактики, дорослим і дітям від 11 років – <strong><i>4 капсули на день</i></strong>, разом із їжею або одразу після. Бажано з іншими жирами <i>для кращого засвоєння</i>.
              </p>
              <p class="product__tabs-content-application__text">
                <strong>Курс прийому:</strong> 2-3 місяці, після чого зробити перерву 1-2 місяці або перейти на Омега-3 із Тунця.
              </p>
            </div>
          </div>
          <div class="vitamins-desc-block d-flex align-items-center">
            <div>
              <strong>В упаковці:</strong>
              <p>120 капсул по 500 мг</p>
              <p class="vitamins-desc-block__text">
                1 місяць прийому
              </p>
            </div>
            <div class="product-price__block align-items-center">
              <p class="last-price product-price position-relative">
                963 ₴
              </p>
              <p class="new-price product-price">
                489 ₴
              </p>
            </div>
          </div>
          <div class="add-to-cart__block d-flex justify-content-between">
            <div class="count-product align-items-center">
              <button class="minus d-inline-block" @click="changeCount('minus')" /><span class="count-span d-flex justify-content-center align-items-center">{{ itemCount }}</span><button class="plus d-inline-block" @click="changeCount('plus')" />
            </div>
            <button class="add-to-cart-btn d-block" @click="store.increment(itemCount)">
              До кошика <span class="btn-product-price">- 489 ₴</span>
            </button>
          </div>
        </div>
        <div>
          <TheSlider />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { useCartStore } from "@/stores/cart"
const store = useCartStore()
const itemCount = ref(1)
const description = ref()
const learnMoreButton = ref()

function changeCount (operation) {
  if (operation === "plus") {
    itemCount.value++
  } else if (operation === "minus" & itemCount.value > 0) {
    itemCount.value--
  }
}
function showFullDesc () {
  if (description.value.style.display === "-webkit-box") {
    description.value.style.display = "block"
    description.value.style.height = "100%"
  } else {
    description.value.style.display = "-webkit-box"
    description.value.style.height = "42px"
  }
}
</script>
<style lang="scss" scoped>
.main{
  @media screen and (max-width: 767px){
    margin-top: 127px;
  }
  @media screen and (min-width: 768px){
    margin-top: 223px;
  }
  @media screen and (min-width: 1400px){
    margin-top: 235px;
  }
}
.product-price__block,
.count-product{
  display: flex;
  @media screen and (max-width: 767px){
    display: none;
  }
}
.btn-product-price{
  @media screen and (min-width: 768px){
    display: none;
  }
}
.product{
  @media screen and (max-width: 767px){
    padding: 44px 0 32px;
    flex-direction: column-reverse;
    align-items: center;
  }
  @media screen and (min-width: 768px){
    padding: 5px 0 56px;
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 1399px){
    align-items: center;
  }
  @media screen and (min-width: 1400px){
    padding: 64px 0 121px;
    flex-direction: row;
  }
}
.product__desc{
  @media screen and (max-width: 767px){
    width: 100%;
  }
  @media screen and (min-width: 768px){
    width: 100%;
  }
  @media screen and (min-width: 1400px){
    width: 634px;
  }
}
.product__tabs-content{
  display: none;
}
.product__desc-tabs{
  &::after{
    content: '';
    display: block;
    height: 1px;
    background: rgb(0, 40, 79, 0.4);
    position: absolute;
    @media screen and (max-width: 767px){
    width: 100%;
    top: 29px;
  }
  @media screen and (min-width: 768px){
    width: 100%;
    top: 33px;
  }
  @media screen and (min-width: 1400px){
    width: 597px;
    top: 34px;
  }
  }
}
.product__desc-tabs-label{
    text-transform: uppercase;
    font-weight: 700;
    padding-bottom: 8px;
    opacity: 0.4;
    cursor: pointer;
    @media screen and (max-width: 767px){
        font-size: 11px;
        line-height: 14.02px;
  }
  @media screen and (min-width: 768px){
    letter-spacing: 0.03em;
    font-size: 17px;
    line-height: 21.67px;
  }
    &:not(:last-of-type){
      @media screen and (max-width: 767px){
        margin-right: 29px;
  }
  @media screen and (min-width: 768px){
    margin-right: 73.7px;
  }
  @media screen and (min-width: 1400px){
    margin-right: 40px;
  }
    }
  }

.product__desc-tabs-input{
    display: none;
    &:checked + .product__desc-tabs-label{
        color: #00284F;
        border-bottom: 3px solid #00284F;
        opacity: 100%;
    }
}
#desc:checked ~ #desc-content,
#benefits:checked ~ #benefits-content,
#ingredients:checked ~ #ingredients-content,
#application:checked ~ #application-content{
  display: block;
  align-self:flex-end;
}
.product__tabs-content {
  margin-top: 12px;
}
.product__name{
    color: #00284F;
    @media screen and (max-width: 767px){
    margin-bottom: 24px;
    flex-direction: column;
    align-items: start;
  }
  @media screen and (min-width: 768px){
    margin-bottom: 32px;
    flex-direction: row;
    align-items: center;
  }
}
.product__name-title{
    @media screen and (max-width: 767px){
    font-size: 25px;
    line-height: 31.87px;
    font-weight: 700;
  }
  @media screen and (min-width: 768px){
    margin-right: 24px;
    font-size: 40px;
    line-height: 48px;
    font-weight: 500;
  }
  @media screen and (min-width: 1400px){
    line-height: 51px;
    font-weight: 700;
  }
}
.product__name-vitamins{
    border-radius: 50px;
    background: #FFFFFF;
    @media screen and (max-width: 767px){
      width: 186px;
    height: 24px;
    font-size: 16px;
    line-height: 20.4px;
    padding: 2px 19px;
    margin-top: 4px;
  }
  @media screen and (min-width: 768px){
    width: 258px;
    height: 32px;
    font-size: 22px;
    line-height: 22px;
    padding: 5px 24px;
  }
  @media screen and (min-width: 1400px){
    width: 306px;
    height: 38px;
    padding: 10px 12px;
  }
}
.product__name-span{
  font-family: 'Piazolla';
  font-weight: 500;
  @media screen and (max-width: 767px){
    line-height: 35.5px;
  }
  @media screen and (min-width: 768px){
    line-height: 56.8px;
  }
}
.vitamins-desc-block{
  width: 100%;
  &::before{
    content: '';
    display: block;
    flex-shrink: 0;
    background: url('/img/foil.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (max-width: 767px){
    width: 40px;
    height: 42px;
    margin-right: 26px;
  }
  @media screen and (min-width: 768px){
    width: 43px;
    height: 44px;
    margin-right: 32px;
  }
  }
  @media screen and (max-width: 767px){
    justify-content: center;
  }
  p,
  strong{
    margin-bottom: 0;
    margin-top: 0;
  }
  .vitamins-desc-block__text{
    opacity: 50%;
  }
  @media screen and (max-width: 767px){
    margin-top: 32px;
  }
  @media screen and (min-width: 768px){
    margin-top: 44px;
  }
  @media screen and (min-width: 1400px){
    margin-top: 56px;
  }
}
.product__tabs-content-desc-text{
  @media screen and (max-width: 767px){
    height: 42px;
    margin-bottom: 8px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .three-points{
    @media screen and (max-width: 767px){
    display: inline;
    }
  }
  .comma{
    @media screen and (max-width: 767px){
    display: none;
    }
  }
}
.learn-more{
  display: none;
  background-color: transparent;
  padding: 0;
  font-size: 14px;
  line-height: 18.04px;
  font-weight: 500;
  padding-bottom: 4px;
  border: none;
  border-bottom: 1.5px solid #1D1D1B;
  opacity: 100%;
  transition: all 0.3s;
  @media screen and (max-width: 767px){
    display: block;
  }
  &:hover,
  &:focus{
    cursor: pointer;
    opacity: 60%;
  }
}
.last-price{
    font-weight: 900;
    color: rgba(0, 40, 79, 0.3);
    &::before{
      content: '';
      display: inline-block;
      position: absolute;
  width: 76.68px;
  height: 2px;
  top: 15px;
  background:  #00284F;
  transform: matrix(0.99, 0.25, -0.11, 0.99, 0, 0);
    }
    @media screen and (min-width: 768px){
      font-size: 28px;
    line-height: 35.7px;
    letter-spacing: -0.03em;
    margin-right: 18px;
  }
  @media screen and (min-width: 1400px){
    margin-right: 30px;
  }
  }
  .product-price__block{
  @media screen and (min-width: 768px){
    font-size: 28px;
    line-height: 35.7px;
    letter-spacing: -0.03em;
    margin-left: 218px;
  }
  @media screen and (min-width: 1400px){
    line-height: 36px;
    font-weight: 900;
    margin-left: 154px;
  }
  }
  .new-price{
    font-weight: 700;
    color: #00284F;
    @media screen and (min-width: 768px){
      font-size: 40px;
    line-height: 48px;
  }
  @media screen and (min-width: 1400px){
    line-height: 51px;
  }
  }
  .count-product{
    .count-span{
      width: 46px;
      height: 46px;
      background: #fff;
      border-radius: 7px;
      font-size: 28px;
      line-height: 35px;
    }
  }
  .add-to-cart__block{
    @media screen and (max-width: 767px){
      margin-top: 24px;
  }
  @media screen and (min-width: 768px){
    margin-top: 40px;
  }
  @media screen and (min-width: 1400px){
    margin-top: 69px;
  }
  }
  .minus{
    margin-right: 17px;
    background: url('/img/minus.svg');
  }
  .plus{
    margin-left: 17px;
    background: url('/img/plus.svg');
    height: 12px;
  }
  .minus, .plus{
    width: 12px;
    border: none;
    outline: none;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .add-to-cart-btn{
    border: none;
    background-color: #69C522;
    border-radius: 40px;
    color: #fff;
    text-align: center;
    transition: all 0.5s;
    &:hover{
      background-color: #1a25a6;
    }
    @media screen and (max-width: 767px){
    width: 100%;
    padding: 17px 100px 18px;
    font-size: 18px;
    line-height: 22.95px;
  }
  @media screen and (min-width: 768px){
    padding: 17px 150px 16px;
    font-size: 18px;
    line-height: 23px;
  }
  @media screen and (min-width: 1400px){
    padding: 15px 173px 14px;
    line-height: 27px;
  }
  }
  .ingridients-table{
    tr{
      border-bottom: 1px solid black;
      padding-top: 7px;
      padding-bottom: 7px;
    }
  }
  .ingridients-table__ing-name{
    width: 282px;
  }
  .ingridients-table__ing-desc{
    color: #335371;
    opacity: 80%;
  }
  .three-points{
    display: none;
  }
</style>
