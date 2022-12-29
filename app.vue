<template>
  <div class="app">
    <TheHeader />
    <TheMain />
    <TheFooter />
  </div>
</template>

<style lang="scss">
@font-face {
    font-family: 'Onest';
    src: url('/fonts/OnestRegular1602-hint.woff2') format('woff2'),
        url('/fonts/OnestRegular1602-hint.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Onest';
    src: url('/fonts/OnestMedium1602-hint.woff2') format('woff2'),
        url('/fonts/OnestMedium1602-hint.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Onest';
    src: url('/fonts/OnestBold1602-hint.woff2') format('woff2'),
        url('/fonts/OnestBold1602-hint.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Onest';
    src: url('/fonts/OnestBlack1602-hint.woff2') format('woff2'),
        url('/fonts/OnestBlack1602-hint.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Piazolla';
    src: url('/fonts/AnyConv.com__Piazzolla-MediumItalic.woff2') format('woff2'),
        url('/fonts/AnyConv.com__Piazzolla-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
}
body {
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(200, 224, 149, 0.8) -5.17%, rgba(221, 238, 239, 0.8) 47.96%, rgba(255, 255, 255, 0.8) 100%);
  font-family: 'Onest';
  font-weight: 400;
  color: #00284F;
  @media screen and (max-width: 767px){
    font-size: 16px;
    line-height: 21px;
  }
  @media screen and (min-width: 768px){
    font-size: 18px;
    line-height: 26px;
  }
  @media screen and (min-width: 1400px){
    line-height: 28px;
  }
}
.section__container {
  margin: 0 auto;
  @media screen and (max-width: 767px){
    width: 384px;
  }
  @media screen and (min-width: 768px){
    width: 696px;
  }
  @media screen and (min-width: 1400px){
  width: 1296px;
  }
}
h1, h2, h3, h4, h5, h6, p, ul{
    margin: 0;
    padding: 0;
}
</style>
