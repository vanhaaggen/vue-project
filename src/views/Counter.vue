<!-- Counter section -->
<script setup>
import Section from '../components/Section.vue'
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>

<template>
  <Section>
    <template #heading>Counter</template>
    <template #skills>Basic Vue concepts like data binding, methods, and event handling.</template>
    <template #description>
      Build a simple counter that can increment and decrement a number when you click buttons. Add a
      reset button to set it back to zero.
    </template>
    <template #list>
      <li>Display a number</li>
      <li>Increment and decrement buttons</li>
      <li>Reset button</li>
    </template>
    <template #logic>
      <div class="container-counter">
        <button class="bttn-styl" @click="counterStore.decrement">-</button>
        <div class="count-wrapper">
          <p class="count-wrapper__p">{{ counterStore.count }}</p>
        </div>
        <button class="bttn-styl" @click="counterStore.increment">+</button>
        <button class="bttn-styl reset" @click="counterStore.reset">reset</button>
      </div>
    </template>
  </Section>
</template>

<style lang="scss" scoped>
button {
  border: none;
  margin: 0;

  width: auto;
  overflow: visible;
  background: transparent;
  cursor: pointer;
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
}

.count-wrapper {
  width: 100px;
  text-align: center;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 0 1rem;
  background-color: #f5f5f5;

  &__p {
    font-size: 20px;
    font-weight: 500;
    color: #101010;
  }
}

.container-counter {
  display: flex;
  align-items: center;
}

.bttn-styl {
  background-color: #42b883;
  min-width: 25px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid transparent;

  &:hover {
    background-color: #429771;
  }
  &:active {
    background-color: #42b883;
    border-color: #55db9f;
  }
}
.reset {
  margin-left: 1rem;
  background-color: #f73838;
  &:hover {
    background-color: #cc3434;
  }
  &:active {
    background-color: #f73838;
    border-color: #fc3c3f;
  }
}
</style>
