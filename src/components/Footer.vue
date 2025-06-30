<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-box">
        <router-link to="/" class="footer-logo logo">
          <img src="@/assets/images/logo.png" alt="logo" />
        </router-link>
        <div class="footer-nav">
          <ul>
            <li><router-link to="/goods" class="footer-link">Ресторанам</router-link></li>
            <li><router-link to="/goods" class="footer-link">Курьерам</router-link></li>
            <li><router-link to="/goods" class="footer-link">Пресс-центр</router-link></li>
            <li><router-link to="/goods" class="footer-link">Контакты</router-link></li>
          </ul>
        </div>
        <div class="footer-social">
          <img src="@/assets/images/social/INST.png" alt="Instagram" />
          <img src="@/assets/images/social/FB.png" alt="FaceBook" />
          <img src="@/assets/images/social/VK.png" alt="VK" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 156px;
  padding: 60px 0;
}

.footer-box {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  align-items: center;
  gap: 36px;
}

.footer-nav {
  flex-grow: 1;
}

.footer-nav ul {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  gap: 15px;
  padding: 0;
  margin: 0;
}

.footer-link {
  text-decoration: none;
  color: #595959;
  font-size: 18px;
}

.footer-social {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}
</style>
