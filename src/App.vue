<script setup>
import { reactive, ref } from 'vue'
let todoList = ref([])
let todoInput = ref('')

const addTodo = () => {
  if (todoInput.value.trim() !== '') {
    todoList.value.push(todoInput.value)
    todoInput.value = ''
  }
}

const removeTodo = (index) => {
  todoList.value.splice(index, 1)
}
</script>

<template>
  <div class="grid place-items-center min-h-screen">
    <div class="bg-white p-6 border rounded shadow-md">
      <h1 class="text-2xl font-bold mb-4">Todo List</h1>
      <div class="flex gap-2">
        <input
          type="text"
          placeholder="Add new Todo"
          class="p-2 border rounded"
          v-model="todoInput"
        />
        <button
          class="p-2 bg-blue-500 text-white rounded cursor-pointer transition-all duration-300 hover:bg-blue-600"
          @click="addTodo"
        >
          Add
        </button>
      </div>
      <div class="mx-5 mt-5">
        <ul class="space-y-2 list-disc">
          <li v-for="(todo, index) in todoList" :key="index">
            <div class="flex justify-between items-center">
              <span>{{ todo }}</span>
              <button
                class="p-2 bg-red-500 text-white rounded cursor-pointer transition-all duration-300 hover:bg-red-600"
                @click="removeTodo(index)"
              >
                Remove
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
