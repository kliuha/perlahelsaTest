<template>
  <main class="main">
    <div class="container">
      <div class="product">
        <div class="product__desc">
          <h2 class="product__name d-flex align-items-center">
            <span class="product__name-title fw-bolder">Омега-3 <span class="product__name-span fst-italic fw-normal">Тріска</span></span> <span class="product__name-vitamins d-flex justify-content-center align-items-center">з вітамінами А і D3</span>
          </h2>
          <div class="product__desc-tabs d-flex">
            <input id="desc" class="product__desc-tabs-input" type="radio" name="product-tabs" checked>
            <label class="product__desc-tabs-label" for="desc">Опис</label>
            <input id="benefits" class="product__desc-tabs-input" type="radio" name="product-tabs">
            <label class="product__desc-tabs-label" for="benefits">Користь</label>
            <input id="ingredients" class="product__desc-tabs-input" type="radio" name="product-tabs">
            <label class="product__desc-tabs-label" for="ingredients">Інгрідієнти</label>
            <input id="application" class="product__desc-tabs-input" type="radio" name="product-tabs">
            <label class="product__desc-tabs-label" for="application">Спосіб застосування</label>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
.main{
    margin-top: 236px;
}
.product{
    padding: 64px 0;
}
.product__desc-tabs-input{
    display: none;
    &:checked + .product__desc-tabs-label{
        color: #00284F;
        border-bottom: 3px solid #00284F;
        padding-bottom: 8px;
    }
}
.product__name{
    color: #00284F;
    margin-bottom: 32px;
}
.product__name-title{
    margin-right: 24px;
    font-size: 40px;
}
.product__name-vitamins{
    border-radius: 50px;
    width: 306px;
    height: 38px;
    background: #FFFFFF;
    font-size: 22px;
}
.product__desc-tabs-label{
    text-transform: uppercase;
    font-size: 17px;
    cursor: pointer;
    &:not(:last-of-type){
        margin-right: 40px;
    }
}
</style>
