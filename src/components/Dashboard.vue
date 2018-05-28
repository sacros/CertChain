<template>
  <div>
      <p>Are you a recipient? Click <router-link to="/recipientPage">here</router-link></p>
      <p>or, are you an issuer? Click <router-link to="/issuerPage">here</router-link></p>
  </div>
  <!-- <div class="dashboard">
    <h1>{{ msg }}</h1>
    <div v-if="userExists">
      Welcome {{ pseudo }}. Destroy your account by clicking <a href="#" @click="destroyAccount">here</a>.
    </div>
    <div v-else>Sign up <router-link to="/signup">here</router-link>.</div>
  </div> -->
</template>

<script>
// import Users from '@/js/users'

// export default {
//   name: 'dashboard',
//   data () {
//     return {
//       msg: 'Welcome to your truffle-vue dApp',
//       pseudo: undefined
//     }
//   },
//   computed: {
//     userExists: function () {
//       return (typeof this.pseudo !== 'undefined')
//     }
//   },
//   beforeCreate: function () {
//     Users.init().then(() => {
//       Users.exists(window.web3.eth.accounts[0]).then((exists) => {
//         if (exists) {
//           Users.authenticate().then(pseudo => {
//             this.pseudo = pseudo
//           })
//         }
//       })
//     }).catch(err => {
//       console.log(err)
//     })
//   },
//   methods: {
//     destroyAccount: function (e) {
//       e.preventDefault()
//       Users.destroy().then(() => {
//         this.pseudo = undefined
//       }).catch(err => {
//         console.log(err)
//       })
//     }
//   }
// }
</script>


<style scoped>
/* h1, h2 {
  font-weight: normal;
  display: block;
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
} */
</style>
