<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Modal from '@/components/Modal.vue';
import { store } from '@/store/index';
</script>

<template>
  <div class="page-wrapper">
    <Header @toggleModal="store.toggleModal(true)" />

    <main class="main">
      <!-- 
      В этот тег на основании роутинга будет выводится определённый компонент (main-контент, страницы неповторяющиеся).
      Например: HomeView.vue при роуте: '/' 

      <router-view> — это точка вставки.
      Vue Router подставляет HomeView вместо <router-view>, если он имеется.
      -->
      <router-view></router-view>
    </main>

    <Modal :isOpen="store.isOpen" @toggleModal="store.toggleModal(false)" />
    <Footer />
  </div>
</template>

<style scoped></style>
