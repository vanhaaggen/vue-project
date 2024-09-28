import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useToDoListStore = defineStore('toDoList', () => {
  const list = ref([])
  const newItem = ref('')

  function addItem() {
    if (newItem.value.trim !== '') {
      list.value.push({ id: Date.now(), input: newItem.value })
      cleanInput()
    }
  }

  function removeItem(id) {
    list.value = list.value.filter((item) => item.id !== id)
  }

  function cleanInput() {
    newItem.value = ''
  }
  console.warn(list.value)
  return { newItem, list, addItem, removeItem, cleanInput }
})
