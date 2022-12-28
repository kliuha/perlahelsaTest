<template>
  <footer class="container">
    <div class="footer__container d-flex justify-content-between align-items-center">
      <p class="footer__text free-delivery">
        Безкоштовна доставка від 1800 грн
      </p>
      <p class="footer__text sending-parcels">
        Відправки в день оформлення замовлення до 16:00
      </p>
      <p class="footer__text money-back-guarantee">
        Гарантія повернення грошових коштів
      </p>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer{
    background: linear-gradient(270deg, rgba(255, 255, 255, 0.81) 0%, rgba(255, 255, 255, 0.54) 100%);
    border-radius: 15px;
    padding: 20px 56px;
}
.footer__container{
    width: 100%;
}
.footer__text{
    display: flex;
    align-items: center;
    line-height: 24px;
    &::before{
        content: '';
        display: inline-block;
        width: 56px;
        height: 36px;
        margin-right: 24px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        flex-shrink: 0;
    }
}
.free-delivery{
    width: 300px;
&::before{
    background: url('/img/delivery.svg');
}
}
.sending-parcels{
    width: 344px;
&::before{
    background: url('/img/parcel.svg');
}
}
.money-back-guarantee{
    width: 300px;
&::before{
    background: url('/img/money.svg');
}
}
</style>
