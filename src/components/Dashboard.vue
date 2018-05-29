<template>
  <div id="outer">
    <span id="h1">CERT(ch)AIN - </span><span id="h2">Certificate Management</span>
    <div id="inner" style="padding-top: 50px;"><img src="/static/CertChain_big.png"></div>
    <div id="inner" style="margin-top:9%">
      <p>Storing certificates on blockchain.</p>
      <p>CertChain uses Ethereum blockchain to keep a record of all your certificates, and makes them permanent.</p><br>
      <p>Are you a recipient? Click <router-link to="/recipientPage">here</router-link></p>
      <p>or, are you an issuer? Click <router-link to="/issuerPage">here</router-link></p>
    </div>

  </div>

</template>

<script>

</script>


<style scoped>

#inner {
    float: left;
    clear: right;
    width: 50%;

}
#outer {
    overflow: auto;
}
#h1 {
  font-weight: bold;
  color: #2e7a58;
  font-size: 80px;
}
#h2 {
  font-weight: bold;
  color: #2e7a58;
  font-size: 50px;
}
p {
  font-size: 25px;
  font-weight: bold;
  color: #2e7a58;
}
</style>
