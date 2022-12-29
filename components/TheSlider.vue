<template>
  <div id="carouselExampleControls" class="carousel slide position-relative" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/img/products/1_cod.png" class="d-block product-img product-img-1" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/img/products/2_cod.png" class="d-block product-img product-img-2" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/img/products/3_cod.png" class="d-block product-img product-img-3" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/img/products/4_cod.png" class="d-block product-img product-img-4" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/img/products/5_cod.png" class="d-block product-img product-img-5" alt="...">
      </div>
    </div>
    <div class="arrow-buttons justify-content-end arrows-down-block">
      <button class="carousel-control carousel-control-prev position-static carousel-control-down" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <svg class="arrows arrow-left">
          <use href="/img/arrows.svg#left" />
        </svg>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control carousel-control-next position-static carousel-control-down" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <svg class="arrows arrow-right">
          <use href="/img/arrows.svg#right" />
        </svg>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="arrow-buttons arrows-side-block position-absolute">
      <button class="carousel-control carousel-control-prev position-static carousel-control-side" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <svg class="arrows arrows-side arrow-side-left">
          <use href="/img/arrows.svg#side-left" />
        </svg>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control carousel-control-next position-static carousel-control-side" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <svg class="arrows arrows-side arrow-side-right">
          <use href="/img/arrows.svg#side-right" />
        </svg>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.product-img{
  width: 100%;
}
.product-img-1{
  @media screen and (min-width: 1400px){
    width: 496px;
        height: 345px;
  }
}
.product-img-2{
  @media screen and (min-width: 1400px){
    width: 503px;
        height: 350px;
  }
}
.product-img-3{
  @media screen and (min-width: 1400px){
    width: 479px;
        height: 360px;
  }
}
.product-img-4{
  @media screen and (min-width: 1400px){
    width: 449px;
        height: 365px;
  }
}
.product-img-5{
  @media screen and (min-width: 1400px){
    width: 504px;
        height: 378px;
  }
}
    .carousel-inner{
        @media screen and (max-width: 767px){
    width: 250px;
    height: 200px;
  }
  @media screen and (min-width: 768px){
        height: 290px;
        width: 370px;
  }
  @media screen and (min-width: 1400px){
    width: 542px;
        height: 400px;
  }
    }
    .carousel-control{
        width: 22px;
    }
    .carousel-control-prev{
        margin-right: 42px;
    }
    .arrows{
        fill: rgba(0, 40, 79, 0.5);
        height: 16px;
        width: 22px;
        transition: fill 0.3s;
        &:hover{
            fill: #69C522;
        }
    }
    .arrows-side-block{
      display: flex;
      justify-content: space-between;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      @media screen and (max-width: 767px){
    width: 384px;
  }
  @media screen and (min-width: 768px){
    width: 696px;
  }
  @media screen and (min-width: 1400px){
    display: none;
  }
    }
    .arrows-down-block{
      display: none;
      @media screen and (min-width: 1400px){
    display: flex;
  }
    }
    .arrows-side{
      width: 12px;
      height: 20px;
    }
</style>
