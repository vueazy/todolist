<script setup>
import { useTodoStore } from '@/stores/TodoStore'

const todoStore = useTodoStore()
</script>

<template>
  <div class="grid place-items-center min-h-screen">
    <div class="bg-white p-6 border rounded shadow-md">
      <h1 class="text-2xl font-bold mb-4">Todo List - {{ todoStore.todoCount }}</h1>
      <div class="flex gap-2">
        <input
          type="text"
          placeholder="Add new Todo"
          class="p-2 border rounded"
          v-model="todoStore.todoInput"
        />
        <button
          :class="{
            'p-2 bg-blue-500 text-white rounded cursor-pointer transition-all duration-300 hover:bg-blue-600':
              !todoStore.isTodoCountHitTheLimit,
            'p-2 bg-gray-500 text-white rounded cursor-not-allowed transition-all duration-300':
              todoStore.isTodoCountHitTheLimit,
          }"
          @click="todoStore.addTodo"
          :disabled="todoStore.isTodoCountHitTheLimit"
        >
          Add
        </button>
      </div>
      <div class="mx-5 mt-5">
        <ul class="space-y-2 list-disc">
          <li v-for="(todo, index) in todoStore.getTodoList" :key="index">
            <div class="flex justify-between items-center">
              <span>{{ todo }}</span>
              <button
                class="p-2 bg-red-500 text-white rounded cursor-pointer transition-all duration-300 hover:bg-red-600"
                @click="todoStore.removeTodo(index)"
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
