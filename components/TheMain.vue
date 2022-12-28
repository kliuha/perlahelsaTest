<template>
  <main class="main">
    <div class="container">
      <div class="product d-flex justify-content-between">
        <div class="product__desc">
          <h2 class="product__name d-flex align-items-center">
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
              <p class="product__tabs-content-desc-text">
                Комплекс EPA + DHA кислот і натуральних вітамінів А & D3 для здоров'я твоєї шкіри, волосся, зору, сну, міцних кісток, суглобів та імунітету.
              </p>
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
            <div class="product-price__block d-flex align-items-center">
              <p class="last-price product-price position-relative">
                963 ₴
              </p>
              <p class="new-price product-price">
                489 ₴
              </p>
            </div>
          </div>
          <div class="add-to-cart__block d-flex justify-content-between">
            <div class="count-product d-flex align-items-center">
              <button class="minus d-inline-block" @click="changeCount('minus')" /><span class="count-span d-flex justify-content-center align-items-center">{{ itemCount }}</span><button class="plus d-inline-block" @click="changeCount('plus')" />
            </div>
            <button class="add-to-cart-btn d-block" @click="store.increment(itemCount)">
              До кошика
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

function changeCount (operation) {
  if (operation === "plus") {
    itemCount.value++
  } else if (operation === "minus" & itemCount.value > 0) {
    itemCount.value--
  }
}
</script>
<style lang="scss" scoped>
.main{
    margin-top: 236px;
}
.product{
    padding: 64px 0;
}
.product__desc{
  width: 634px;
}
.product__tabs-content{
  display: none;
}
.product__desc-tabs{
  &::after{
    content: '';
    display: block;
    width: 574px;
    height: 1px;
    background: rgb(0, 40, 79, 0.4);
    position: absolute;
    top: 34px;
  }
}
.product__desc-tabs-label{
    text-transform: uppercase;
    font-size: 17px;
    font-weight: 700;
    line-height: 21.67px;
    padding-bottom: 8px;
    opacity: 0.4;
    cursor: pointer;
    &:not(:last-of-type){
        margin-right: 40px;
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
  margin-top: 30px;
}
.product__name{
    color: #00284F;
    margin-bottom: 32px;
}
.product__name-title{
    margin-right: 24px;
    font-size: 40px;
    line-height: 51px;
    font-weight: 700;
}
.product__name-vitamins{
    border-radius: 50px;
    width: 306px;
    height: 38px;
    background: #FFFFFF;
    font-size: 22px;
    line-height: 22px;
}
.product__name-span{
  font-family: 'Piazolla';
  font-weight: 500;
  line-height: 56.8px;
}
.vitamins-desc-block{
  width: 100%;
  margin-top: 56px;
  &::before{
    content: '';
    display: block;
    width: 43px;
    height: 44px;
    background: url('/img/foil.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 32px;
  }
  p,
  strong{
    margin-bottom: 0;
    margin-top: 0;
  }
  .vitamins-desc-block__text{
    opacity: 50%;
  }
}
.last-price{
    font-size: 28px;
    line-height: 36px;
    font-weight: 900;
    letter-spacing: -0.03em;
    margin-right: 30px;
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
  }
  .product-price__block{
    margin-left: 162px;
  }
  .new-price{
    font-weight: 700;
    font-size: 40px;
    line-height: 51px;
    color: #00284F;
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
    margin-top: 69px;
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
    font-size: 18px;
    line-height: 27px;
    padding: 15px 173px 14px;
    text-align: center;
    transition: all 0.5s;
    &:hover{
      background-color: #1a25a6;
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
</style>
