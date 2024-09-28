<!-- Counter section -->
<script setup>
import Section from '../components/Section.vue'
import { useToDoListStore } from '@/stores/toDoList'

const todoListStore = useToDoListStore()
</script>

<template>
  <Section>
    <template #heading>To-Do List</template>
    <template #skills>
      Data handling, form inputs, and Vue directives like v-for and v-model</template
    >
    <template #description>
      Create a basic to-do list app where users can add, remove, and mark tasks as completed.
    </template>
    <template #list>
      <li>Add new tasks</li>
      <li>Mark tasks as complete/incomplete</li>
      <li>Remove tasks</li>
      <li>Filter tasks (all, completed, pending)</li>
    </template>
    <template #logic>
      <input v-model.trim="todoListStore.newItem" type="text" />
      <button class="bttn-styl" @click="todoListStore.addItem">Add task</button>
      <ol>
        <li v-for="{ input, id } in todoListStore.list" :key="id">
          <div class="list-item">
            <p>{{ input }}</p>
            <div>
              <button class="reset" @click="todoListStore.removeItem(id)">Remove item</button>
            </div>
          </div>
        </li>
      </ol>
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
.bttn-styl {
  min-width: 25px;
  height: 25px;
  margin-left: 1rem;
  border-radius: 5px;
  background-color: #42b883;
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
  min-width: 25px;
  height: 25px;
  margin-left: 1rem;
  border-radius: 5px;
  background-color: #f73838;
  border: 1px solid transparent;
  &:hover {
    background-color: #cc3434;
  }
  &:active {
    background-color: #f73838;
    border-color: #fc3c3f;
  }
}
.list-item {
  display: flex;
  align-items: center;
}
</style>
