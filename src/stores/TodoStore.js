import { defineStore } from 'pinia'

export let useTodoStore = defineStore('todo', {
  state: () => ({
    todoList: [],
    todoInput: '',
    todoCount: 0,
    maxTodoCount: 5,
  }),

  actions: {
    addTodo() {
      if (this.todoInput.trim() !== '' && this.todoCount < this.maxTodoCount) {
        this.todoList.push(this.todoInput)
        this.todoCount++
        this.todoInput = ''
      }
    },
    removeTodo(index) {
      this.todoList.splice(index, 1)
      this.todoCount--
    },
  },

  getters: {
    getTodoList() {
      return this.todoList
    },
    isTodoCountHitTheLimit() {
      return this.todoCount >= this.maxTodoCount
    },
  },
})
