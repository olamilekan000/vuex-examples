<template>
  <div id="app">
    <router-link to="/"> <img src="./assets/logo.png"> </router-link>
    <h1>
      <router-link to="/">{{ msg }}</router-link>
    </h1>
    <ul>
      <li>
        <div>
          <router-link to="/">Change Route</router-link>
        </div>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Vuex Examples'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color: #42b983;
}

h1 {
  font-weight: normal;
}

h1>a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style-type: none;
  padding: 0;
}

li>div {
  margin-top: 10px;
}
</style>
