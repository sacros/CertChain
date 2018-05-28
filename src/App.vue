<template>
  <div id="app">
    <header>
      <table>
        <tr>
          <td><router-link to="/" style="color: #58dba0;">Home Page</router-link></td>
          <td><router-link to="/issuerPage" style="color: #58dba0;">Issuer Page</router-link></td>
          <td><router-link to="/recipientPage" style="color: #58dba0;">Recipient Page</router-link></td>
          <td><router-link to="/events" style="color: #58dba0;">Events</router-link></td>
      </tr>
      </table>
    </header>
    <h1>Certificate Management</h1>
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <footer>Copyright © 2016 North Shore Technologies, Inc.</footer>
    <!-- <footer>Copyright © sacros™ ALL RIGHTS ~UN~RESERVED</footer> -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
table {
  width: 100%;
  float: left;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
footer {
  margin-top: 20px;
  /* background: #42b983; */
  background: #2c3e50;
  color: white;
  padding:10px;
  /* position: fixed; */
  width: 100%;
  bottom: 0;

  position: fixed;
  height: auto;
  width: 100%;
  z-index: 100;
}
header {
  /* margin-top: 20px; */
  /* background: #42b983; */
  background: #2c3e50;
  color: white;
  padding: 10px;
  /* position: fixed; */
  width: 100%;
  top: 0;
  position: fixed;
  height: auto;
  width: 100%;
  z-index: 100;
  /* text-align: center; */
  align-content: center;
  /* position: fixed;
  height: auto;
  width: 100%;
  z-index: 100; */
}
h1 {
  padding-top: 100px;
  color: #2e7a58;
  font-size: 80px;
}

</style>
