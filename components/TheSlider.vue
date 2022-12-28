<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/img/products/1_cod.png" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/img/products/2_cod.png" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/img/products/3_cod.png" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/img/products/4_cod.png" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/img/products/5_cod.png" class="d-block w-100" alt="...">
      </div>
    </div>
    <div class="arrow-buttons d-flex justify-content-end">
      <button class="carousel-control carousel-control-prev position-static d-inline-block" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <svg class="arrows arrow-left">
          <use href=".img/arrows.svg#left" />
        </svg>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control carousel-control-next position-static d-inline-block" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <svg class="arrows arrow-right">
          <use href="/img/arrows.svg#right" />
        </svg>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
    .carousel-inner{
        width: 542px;
        height: 450px;
    }
    .carousel-control{
        width: 22px;
    }
    .carousel-inner{
        margin-bottom: 24px;
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
</style>
