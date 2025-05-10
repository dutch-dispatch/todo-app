<template>
  <div id="funky-bg">
    <TodoList />
  </div>
</template>

<script>
import TodoList from './TodoList.vue';

export default {
  name: 'App',
  components: { TodoList }
};
</script>

<style scoped>
#funky-bg {
  min-height: 100vh;
  background: linear-gradient(135deg, #ff5f6d 0%, #ffc371 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Press Start 2P', 'Arial Black', cursive;
  position: relative;
  overflow: hidden;
}
#funky-bg::before, #funky-bg::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  opacity: 0.15;
}
#funky-bg::before {
  width: 400px; height: 400px;
  background: repeating-linear-gradient(
    45deg,
    #0ff, #0ff 10px,
    #fff 10px, #fff 20px
  );
  left: -100px; top: -100px;
}
#funky-bg::after {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #f0f 50%, #0ff 100%);
  right: -80px; bottom: -80px;
}
</style>