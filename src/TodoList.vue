<template>
  <div class="todolist-container">
    <h1 class="funky-title">80s Funky Todo</h1>
    <form @submit.prevent="addTodo" class="todo-form">
      <input
        v-model="newTodo"
        placeholder="Add something rad..."
        class="funky-input"
        maxlength="48"
      />
      <button class="funky-btn">Let’s Go!</button>
    </form>
    <ul class="todo-list">
      <li
        v-for="todo in todos"
        :key="todo.id"
        :class="{done: todo.done}"
      >
        <span @click="toggleDone(todo)" class="funky-checkbox">
          <span v-if="todo.done">✔️</span>
          <span v-else>⬜</span>
        </span>
        <span class="todo-text">{{ todo.text }}</span>
        <button @click="removeTodo(todo)" class="delete-btn">✖</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      newTodo: '',
      todos: []
    }
  },
  methods: {
    addTodo() {
      const text = this.newTodo.trim();
      if (!text) return;
      this.todos.push({
        id: Date.now(),
        text,
        done: false
      });
      this.newTodo = '';
    },
    removeTodo(todo) {
      this.todos = this.todos.filter(t => t.id !== todo.id);
    },
    toggleDone(todo) {
      todo.done = !todo.done;
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.todolist-container {
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  border: 6px solid #ff5f6d;
  box-shadow:
    0 0 40px #fff70088,
    0 0 60px #ff5f6dbc;
  padding: 2rem 2.5rem;
  border-radius: 40px 10px 50px 5px/20px 40px 10px 50px;
  width: 370px;
  position: relative;
  z-index: 2;
}

.funky-title {
  font-size: 2rem;
  font-family: 'Press Start 2P', cursive;
  color: #fff700;
  letter-spacing: 2px;
  text-shadow: 2px 2px 0 #000, 0 0 10px #00ffe7;
  margin-bottom: 1.2rem;
}

.todo-form {
  display: flex;
  margin-bottom: 1.2rem;
}

.funky-input {
  flex: 1;
  background: #000;
  color: #00ffe7;
  font-family: inherit;
  font-size: 1rem;
  border: 2px solid #fff700;
  border-right: none;
  border-radius: 16px 0 0 16px;
  padding: 0.6rem;
  outline: none;
  box-shadow: 0 0 8px #00ffe7aa;
  transition: border 0.2s;
}

.funky-input:focus {
  border-color: #ff5f6d;
  color: #ff5f6d;
}

.funky-btn {
  background: linear-gradient(90deg, #ff5f6d 20%, #fff700 100%);
  color: #000;
  font-weight: bold;
  font-family: inherit;
  font-size: 1rem;
  border: none;
  border-radius: 0 16px 16px 0;
  padding: 0 1rem;
  box-shadow: 0 0 12px #fff700b4;
  cursor: pointer;
  transition: background 0.2s;
}

.funky-btn:hover {
  background: linear-gradient(90deg, #fff700 20%, #ff5f6d 100%);
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-list li {
  background: rgba(0, 0, 0, 0.36);
  border: 2px solid #00ffe7;
  border-radius: 15px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  font-family: inherit;
  font-size: 1rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 1px 10px #fff7007a;
  transition: background 0.3s;
}
.todo-list li.done {
  background: #fff700cc;
  color: #333;
  text-decoration: line-through;
  border-color: #ff5f6d;
  box-shadow: 0 0 20px #ff5f6d99;
}

.funky-checkbox {
  margin-right: 1rem;
  font-size: 1.3em;
  cursor: pointer;
  user-select: none;
}

.todo-text {
  flex:1;
  word-break: break-word;
  font-family: inherit;
  letter-spacing: 0.3px;
}

.delete-btn {
  background: none;
  border: none;
  color: #ff5f6d;
  font-size: 1.2em;
  cursor: pointer;
  margin-left: 0.8rem;
  transition: color 0.2s;
}
.delete-btn:hover {
  color: #fff700;
}
</style>