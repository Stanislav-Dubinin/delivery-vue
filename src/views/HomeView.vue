<template>
  <div class="index-page">
    <section class="banner">
      <div class="container">
        <div class="banner-item">
          <h2 class="banner-item--title">Онлайн-сервис доставки еды на дом</h2>
          <p class="banner-item--subtitle">
            Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
          </p>
        </div>
      </div>
    </section>
    <section class="products">
      <div class="container">
        <div class="products-header">
          <h3 class="products-header--title">Рестораны</h3>
          <input
            type="text"
            name="search"
            class="products-header--search"
            placeholder="Поиск блюд и ресторанов"
          />
        </div>
        <div class="products-wrapper" id="rests-container">
          <router-link
            class="products-card"
            v-for="rest in store.rests"
            :key="rest.id"
            :to="`/goods?id=${rest.id}`"
          >
            <div class="products-card__image">
              <img :src="getUrl(rest.image, 'rests')" :alt="`${rest.rest}: ${rest.title}`" />
            </div>
            <div class="products-card__description">
              <div class="products-card__description-row">
                <h4 class="products-card__description--title">{{ rest.title }}</h4>
                <div class="products-card__description--badge">{{ rest.time }} мин</div>
              </div>
              <div class="products-card__description-row">
                <div class="products-card__description-info">
                  <div class="products-card__description-info--rating">
                    <img src="@/assets/images/icons/star.svg" alt="Star" />
                    {{ rest.rating }}
                  </div>
                  <div class="products-card__description-info--price">От {{ rest.price }} ₽</div>
                  <div class="products-card__description-info--group">{{ rest.type }}</div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { store } from '@/store/index';
import { getUrl } from '@/utils/get-url';
</script>
