<template>
  <div class="hello">
    <h1>{{ msg }}1111</h1>
    <p v-if="zt"  v-bind:id="'list-' + id">现在你看到我了</p>
    <!-- <button v-on:click="greet">Greet</button>     -->
    <a v-bind:href="url" >111111</a>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        zt:true,
        zt2:false,
        id:22,
        url:"#/ww"
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
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
