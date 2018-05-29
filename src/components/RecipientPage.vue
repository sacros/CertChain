<template>
    <div style="margin-top:18%, padding-bottom:50px;">
        <div v-if="is_registered===''">
            <h1>You are not a registered recipient</h1>
            <h1>Register here..</h1>
            Enter your Name:<input v-model="recipient_name" type="text"/><br><br>
            <!-- Entr Type:<input v-model="recipient_type" type="text"/> -->
            <!-- Entr identity:<input v-model="recipient_identity" type="text"/> -->
            Enter your email:<input v-model="recipient_email" type="text"/><br><br>
            Enter your phone:<input v-model="recipient_phone" type="text"/><br><br>
            <button @click="registerRecipient">Submit</button>
        </div>
        <div v-else>
            <h1>View your certificates</h1>
            <button @click="getRecipientCertificates">Get All Certificates</button>
            <br><span v-if="data_getRecipientCertificates != []">{{data_getRecipientCertificates}}</span><br><br>
            <button @click="getProfileDetails">Get Your Details</button>
            <br><span v-if="data_getProfileDetails">{{data_getProfileDetails | details}}</span><br><br>

            <input v-model="certID" placeholder="Enter certificate id"/>
            <button @click="getCertificateIdentifier">Get Certificate Details</button>
            <br><span v-if="data_getCertificateIdentifier">{{data_getCertificateIdentifier}}</span><br><br>

            <input v-model="address_issuer" placeholder="Enter address of issuer"/>
            <button @click="getIssuer">Get Issuer Details</button>
            <br><span v-if="data_getIssuer">{{data_getIssuer}}</span><br><br>

            <input v-model="hash_contract" placeholder="Enter hash of certificate"/>
            <button @click="getIssuerOfCertificate">Get Issuer of certificate</button>
            <br><span v-if="data_getIssuerOfCertificate">{{data_getIssuerOfCertificate}}</span><br><br>
        </div>
    </div>
</template>

<script>
import CertChain from '@/js/certchain'
const ipfs = require('nano-ipfs-store').at('https://ipfs.infura.io:5001')
export default {
  name: 'recipientPage',
  data () {
    return {
      user: null,
      is_registered: null,
      recipient_name: null,
      recipient_email: null,
      recipient_phone: null,
      data_getRecipientCertificates: null,
      data_getProfileDetails: null,
      data_getCertificateIdentifier: null,
      certID: null,
      address_issuer: null,
      data_getIssuer: null,
      data_getIssuerOfCertificate: null,
      hash_contract: null
    }
  },
  filters: {
    details (user) {
      return `Name: ${user.recipient_name}, Email: ${user.recipient_email}, Phone: ${user.recipient_phone}`
    //   return `${user['recipient_name']}`
    }
  },
  beforeCreate: function () {
    CertChain.init().then(() => {
      console.log('contract: ' + CertChain.contract.address)
      console.log('user: ' + window.web3.eth.accounts[0])
      this.user = window.web3.eth.accounts[0]
      CertChain.getRecipient(this.user).then((ans) => {
        this.is_registered = ans
      })
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    registerRecipient: function () {
      let data = JSON.stringify({'recipient_name': this.recipient_name, 'recipient_email': this.recipient_email, 'recipient_phone': this.recipient_phone})
      console.log(data)
      ipfs.add(data).then(ipfsHash => {
        console.log(ipfsHash)
        CertChain.registerRecipient(ipfsHash).then(tx => {
          console.log(tx)
          alert('Recipient registered')
          this.is_registered = true
        })
      })
    },
    getRecipientCertificates: function () {
      CertChain.getRecipientCertificates(this.user).then((tx) => {
        this.data_getRecipientCertificates = tx
        console.log(JSON.stringify(this.data_getRecipientCertificates))
      })
    },
    getProfileDetails: function () {
      CertChain.getRecipient(this.user).then((tx) => {
        console.log(tx)
        ipfs.cat(tx).then((data) => {
          this.data_getProfileDetails = JSON.parse(data)
          console.log(JSON.stringify(this.data_getProfileDetails))
        })
      })
    },
    getCertificateIdentifier: function () {
      console.log(this.certID)
      CertChain.getCertificateIdentifier(this.certID).then((tx) => {
        if (tx[0] !== '') {
          this.data_getCertificateIdentifier = tx
        }
        console.log(this.data_getCertificateIdentifier)
      })
    },
    getIssuer: function () {
      console.log(this.address_issuer)
      CertChain.getIssuer(this.address_issuer).then((tx) => {
        if (tx[0] !== '') {
          this.data_getIssuer = tx
        }
        console.log(this.data_getIssuer)
      })
    },
    getIssuerOfCertificate: function () {
      console.log(this.hash_contract)
      CertChain.getIssuerOfCertificate(this.hash_contract).then((tx) => {
        this.data_getIssuerOfCertificate = tx
      })
      console.log(this.data_getIssuerOfCertificate)
    }
  }
}
</script>

<style scoped>
span {
    color: white;
    font-weight: bold;
    font-size: 25px;
}
</style>
