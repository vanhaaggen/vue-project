<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <div id="aside">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <Header msg="vue projects" />
    </header>
    <div>
      <nav class="wrapper">
        <RouterLink to="/counter">Counter</RouterLink>
        <RouterLink to="/to-do-list">To-Do List</RouterLink>
      </nav>
    </div>
  </div>

  <div class="router-wrapper">
    <RouterView />
  </div>
</template>

<style>
body {
  color: #171717;
  width: 100%;
  height: 100%;
  margin: 0;
}
#app {
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
}

#aside {
  width: 250px;
  height: 100vh;
  border-right: 1px solid #171717;
  padding: 1rem;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 3rem;
}

.logo {
  width: 50px;
  height: auto;
}
.wrapper {
  display: flex;
  flex-direction: column;
}
.router-wrapper {
  padding-left: 5rem;
}
</style>
