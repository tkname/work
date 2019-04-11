<template>
  
  <div class="index">
    <ul>
      <li v-for="todo in projects"> 
        <router-link :to="todo.src">{{todo.name}}</router-link>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      projects: [
        {"name":"聊天室","src":"message"},
        {"name":"todoList","src":"todoList"},
        {"name":"答题","src":"problem/login"},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  font-size: 0.12rem;
  text-align: center;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
