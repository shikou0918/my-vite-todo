import { ref } from 'vue';

export const useTodoList = (id) => {
  const todoListRef = ref([]);
  const ls = localStorage.todoList
  todoListRef.value = ls ? JSON.parse(ls) : [];

  const todo = todoListRef.value.find((todo) => todo.id === id);
  const idx = todoListRef.value.findIndex((todo) => todo.id === id);

  return { todo, idx};
}
