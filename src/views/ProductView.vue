<script setup>
import { goodArray } from '@/constants/goods';
import { getUrl } from '@/utils/get-url';
</script>

<template>
  <section class="products-page">
    <div class="container">
      <div class="products-wrapper" id="goods-container">
        <div class="products-card" v-for="good in goodArray" :key="good.id">
          <div class="products-card__image">
            <img :src="getUrl(good.image, 'goods')" :alt="`${good.type}: ${good.name}`" />
          </div>
          <div class="products-card__description">
            <div class="products-card__description-row">
              <h5 class="products-card__description--name">{{ good.title }}</h5>
            </div>
            <div class="products-card__description-row">
              <p class="products-card__description--text">
                {{ good.description }}
              </p>
            </div>
            <div class="products-card__description-row">
              <div class="products-card__description-controls">
                <button class="btn btn-primary">
                  В корзину
                  <img src="@/assets/images/icons/shopping-cart-white.svg" alt="Корзина товаров" />
                </button>
                <span class="products-card__description-controls--price">{{ good.price }} ₽</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
