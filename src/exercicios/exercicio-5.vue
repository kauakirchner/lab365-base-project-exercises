<template>
  <div class="bg">
    Espaço para implementar o componente do Exercício 5
    <div>
       <div class="input-container">
          <input type="text" v-model="inputValueTodo" placeholder="Insira um todo"/>
          <button @click="addTodo">Add</button>
        </div>
        <div class="todos-container">
          <ul v-for="todo in todos" class="todos">
            <li>{{ todo }}</li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExercicioCinco",
  data() {
    return {
      inputValueTodo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      this.todos.push(this.inputValueTodo);
      this.inputValueTodo = ''
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bg {
  background-color: #eee;
  padding: 64px 32px;
}

.todos {
  list-style: none;
}
</style>
