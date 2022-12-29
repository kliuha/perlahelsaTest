<template>
  <footer class="section__container">
    <div class="footer__container justify-content-between align-items-center">
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
    @media screen and (max-width: 767px){
      padding: 33px;
  }
  @media screen and (min-width: 768px){
    padding: 38px 60px;
  }
  @media screen and (min-width: 1400px){
    padding: 20px 56px;
  }
}
.footer__container{
    width: 100%;
  @media screen and (min-width: 768px){
    display: flex;
  }
}
.footer__text{
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
    &:not(:last-of-type){
      @media screen and (max-width: 767px){
      margin-bottom: 26px;
  }
    }
    @media screen and (max-width: 767px){
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      line-height: 21px;
  }
  @media screen and (min-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    line-height: 24px;
  }
  @media screen and (min-width: 1400px){
    flex-direction: row;
  }
}
.free-delivery{
    @media screen and (max-width: 767px){
      width: 100%;
  }
  @media screen and (min-width: 768px){
    width: 156px;
  }
  @media screen and (min-width: 1400px){
    width: 300px;
  }
&::before{
    background: url('/img/delivery.svg');
    @media (min-width: 768px) and (max-width: 1399px){
    margin-bottom: 24px;
  }
}
}
.sending-parcels{
  @media screen and (max-width: 767px){
      width: 100%;
  }
  @media screen and (min-width: 768px){
    width: 216px;
  }
  @media screen and (min-width: 1400px){
    width: 344px;
  }
&::before{
    background: url('/img/parcel.svg');
    @media (min-width: 768px) and (max-width: 1399px){
    margin-bottom: 24px;
  }
}
}
.money-back-guarantee{
  @media screen and (max-width: 767px){
      width: 100%;
  }
  @media screen and (min-width: 768px){
    width: 156px;
  }
  @media screen and (min-width: 1400px){
    width: 300px;
  }
&::before{
  @media (min-width: 768px) and (max-width: 1399px){
    margin-bottom: 24px;
  }
    background: url('/img/money.svg');
}
}
</style>
