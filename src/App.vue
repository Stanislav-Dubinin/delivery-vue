<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Modal from '@/components/Modal.vue';
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<template>
  <div class="page-wrapper">
    <Header @toggleModal="isOpen = !isOpen" />

    <main class="main">
      <!-- 
      В этот тег на основании роутинга будет выводится определённый компонент (main-контент, страницы неповторяющиеся).
      Например: HomeView.vue при роуте: '/' 

      <router-view> — это точка вставки.
      Vue Router подставляет HomeView вместо <router-view>, если он имеется.
      -->
      <router-view></router-view>
    </main>

    <Modal :isOpen="isOpen" @toggleModal="isOpen = !isOpen" />
    <Footer />
  </div>
</template>

<style scoped></style>
