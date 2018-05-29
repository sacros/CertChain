<template>
<div>
<input v-model="address_eventIssuerRegistered" placeholder="Enter address of issuer"/>
<button @click="eventIssuerRegistered">Get details of registered issuer</button><br><br>
<span v-if="data_eventIssuerRegistered">{{data_eventIssuerRegistered | eventsFilter}}</span><br><br>

<input v-model="address_eventRecipientRegistered" placeholder="Enter address of recipient"/>
<button @click="eventRecipientRegistered">Get details of registered recipient</button><br><br>
<span v-if="data_eventRecipientRegistered">{{data_eventRecipientRegistered | eventsFilter}}</span><br><br>

<input v-model="address_eventCertificateRegistered" placeholder="Enter address of issuer"/>
<button @click="eventCertificateRegistered">Get details of registered certificate</button><br><br>
<span v-if="data_eventCertificateRegistered">{{data_eventCertificateRegistered | eventsFilter}}</span><br><br>

<input v-model="address_eventCertificateIssuedByCertificate" placeholder="Enter id of certificate"/>
<button @click="eventCertificateIssuedByCertificate">Get details of certificate by certificate id</button><br><br>
<span v-if="data_eventCertificateIssuedByCertificate">{{data_eventCertificateIssuedByCertificate | eventsFilter}}</span><br><br>

<input v-model="address_eventCertificateIssuedByIssuer" placeholder="Enter address of issuer"/>
<button @click="eventCertificateIssuedByIssuer">Get details of certificate by Issuer address</button><br><br>
<span v-if="data_eventCertificateIssuedByIssuer">{{data_eventCertificateIssuedByIssuer | eventsFilter}}</span><br><br>

<input v-model="address_eventCertificateIssuedByRecipient" placeholder="Enter address of recipient"/>
<button @click="eventCertificateIssuedByRecipient">Get details of certificate by Recipient address</button><br><br>
<span v-if="data_eventCertificateIssuedByRecipient">{{data_eventCertificateIssuedByRecipient | eventsFilter}}</span><br><br>

</div>
</template>
<script>
import CertChain from '@/js/certchain'
export default {
  name: 'eventsPage',
  data () {
    return {
      user: null,
      data_eventIssuerRegistered: null,
      address_eventIssuerRegistered: null,
      address_eventRecipientRegistered: null,
      data_eventRecipientRegistered: null,
      address_eventCertificateRegistered: null,
      data_eventCertificateRegistered: null,
      address_eventCertificateIssuedByCertificate: null,
      data_eventCertificateIssuedByCertificate: null,
      address_eventCertificateIssuedByIssuer: null,
      data_eventCertificateIssuedByIssuer: null,
      address_eventCertificateIssuedByRecipient: null,
      data_eventCertificateIssuedByRecipient: null
    }
  },
  filters: {
    eventsFilter (r) {
      return `${r.event} -> ${JSON.stringify(r.args)}`
    }
  },
  beforeCreate: function () {
    CertChain.init().then(() => {
      console.log('contract: ' + CertChain.contract.address)
      console.log('user: ' + window.web3.eth.accounts[0])
      this.user = window.web3.eth.accounts[0]
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    eventIssuerRegistered: function () {
      console.log(this.address_eventIssuerRegistered)
      CertChain.eventIssuerRegistered(this.address_eventIssuerRegistered).then((tx) => {
        this.data_eventIssuerRegistered = tx[0]
      })
    },
    eventRecipientRegistered: function () {
      console.log(this.address_eventIssuerRegistered)
      CertChain.eventRecipientRegistered(this.address_eventRecipientRegistered).then((tx) => {
        this.data_eventRecipientRegistered = tx[0]
      })
    },
    eventCertificateRegistered: function () {
      console.log(this.address_eventCertificateRegistered)
      CertChain.eventCertificateRegistered(this.address_eventCertificateRegistered).then((tx) => {
        this.data_eventCertificateRegistered = tx[0]
      })
    },
    eventCertificateIssuedByCertificate: function () {
      console.log(this.address_eventCertificateIssuedByCertificate)
      CertChain.eventCertificateIssuedByCertificate(this.address_eventCertificateIssuedByCertificate).then((tx) => {
        this.data_eventCertificateIssuedByCertificate = tx[0]
      })
    },
    eventCertificateIssuedByIssuer: function () {
      console.log(this.address_eventCertificateIssuedByIssuer)
      CertChain.eventCertificateIssuedByIssuer(this.address_eventCertificateIssuedByIssuer).then((tx) => {
        this.data_eventCertificateIssuedByIssuer = tx[0]
      })
    },
    eventCertificateIssuedByRecipient: function () {
      console.log(this.address_eventCertificateIssuedByRecipient)
      CertChain.eventCertificateIssuedByRecipient(this.address_eventCertificateIssuedByRecipient).then((tx) => {
        this.data_eventCertificateIssuedByRecipient = tx[0]
      })
    }
// address_eventCertificateIssuedByRecipient
// eventCertificateIssuedByRecipient
// data_eventCertificateIssuedByRecipient
  }
}
</script>

<style scoped>
div {
  padding-bottom: 50px;
  padding-top: 50px;
}
span {
    color: white;
    font-weight: bold;
    font-size: 25px;
}
</style>
