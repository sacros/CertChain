<template>
    <div style="margin-top:5%; padding-bottom:50px;">
        <div v-if="is_registered===''">
            <h1>You are not a registered issuer</h1>
            <h1>Register here..</h1>
            Enter your Name:<input v-model="issuer_name" type="text"/><br><br>
            Enter your email:<input v-model="issuer_email" type="text"/><br><br>
            Enter your phone:<input v-model="issuer_phone" type="text"/><br><br>
            Enter your url:<input v-model="issuer_url" type="text"/><br><br>
            <button @click="registerIssuer">Submit</button>
        </div>
        <div v-else>
            <h1>Register certificates</h1>
            Type <input v-model="cert_type" placeholder="Enter type of the certificate"><br><br>
            Name <input v-model="cert_name" placeholder="Enter name of the certificate"><br><br>
            Description <input v-model="cert_desc" placeholder="Enter description of the certificate"><br><br>
            <button @click="registerCertificate">Register a new certificate</button>

            <h1>Issue certificates</h1>
            Address of Recipient <input v-model="address_recipient" placeholder="Enter the address of the recipient"><br><br>
            Select certificate <select v-model="cert_hash"><option v-for="certificate in certificates" v-bind:value="certificate">{{certificate}}</option> </select>
            <button @click="issueCertificate">Issue new certificate</button>

            <h1>View your certificates</h1>


            <input v-model="view_address_recipient" placeholder="Enter recipient's address"/>
            <button @click="getRecipient">Get recipient details </button>
            <br><span v-if="data_getRecipient">{{data_getRecipient | details}}</span><br><br>

            <button @click="getIssuerCertificates">Get all your issued certificates</button>
            <br><span v-if="all_certs != []">{{all_certs}}</span><br><br>

            <input v-model="certID" placeholder="Enter certificate id"/>
            <button @click="getCertificateIdentifier">Get Certificate Details</button>
            <br><span v-if="data_getCertificateIdentifier">{{data_getCertificateIdentifier}}</span><br><br>

            <input v-model="view_cert_hash" placeholder="Enter certificate hash"/>
            <button @click="getAllRecipientOfCertificate">Get all recipient of certificate</button>
            <br><span v-if="data_getAllRecipientOfCertificate">{{data_getAllRecipientOfCertificate}}</span><br><br>
        </div>
    </div>
</template>

<script>
import CertChain from '@/js/certchain'
const ipfs = require('nano-ipfs-store').at('https://ipfs.infura.io:5001')
export default {
  name: 'issuerPage',
  data () {
    return {
      user: null,
      is_registered: null,
      issuer_name: null,
      issuer_email: null,
      issuer_phone: null,
      issuer_url: null,
      cert_type: null,
      cert_name: null,
      cert_desc: null,
      address_recipient: null,
      certificates: [],
      cert_hash: null,
      view_address_recipient: null,
      data_getRecipient: null,
      all_certs: null,
      data_getCertificateIdentifier: null,
      view_cert_hash: null,
      certID: null,
      data_getAllRecipientOfCertificate: null
    }
  },
  filters: {
    details (user) {
      return `Name: ${user.recipient_name}, Email: ${user.recipient_email}, Phone: ${user.recipient_phone}`
    }
  },
  beforeCreate: function () {
    CertChain.init().then(() => {
      console.log('contract: ' + CertChain.contract.address)
      console.log('user: ' + window.web3.eth.accounts[0])
      this.user = window.web3.eth.accounts[0]
      CertChain.getIssuer(this.user).then((ans) => {
        this.is_registered = ans
      })
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    registerIssuer: function () {
      let data = JSON.stringify({'issuer_name': this.issuer_name, 'issuer_email': this.issuer_email, 'issuer_phone': this.issuer_phone, 'issuer_url': this.issuer_url})
      console.log(data)
      ipfs.add(data).then(ipfsHash => {
        console.log(ipfsHash)
        CertChain.registerIssuer(ipfsHash).then(tx => {
          console.log(tx)
          alert('Issuer registered')
          this.is_registered = true
        })
      })
    },
    registerCertificate: function () {
      let data = JSON.stringify({'cert_type': this.cert_type, 'cert_name': this.cert_name, 'cert_desc': this.cert_desc})
      console.log(data)
      ipfs.add(data).then(ipfsHash => {
        console.log(ipfsHash)
        CertChain.registerCertificate(ipfsHash).then(tx => {
          console.log(tx)
          alert('Certificate registered')
          this.certificates.push(ipfsHash)
        })
      })
    },
    issueCertificate: function () {
      CertChain.issueCertificate(this.address_recipient, this.cert_hash).then(tx => {
        console.log(tx)
        alert('Certificate issued')
      })
    },
    getRecipient: function () {
      CertChain.getRecipient(this.view_address_recipient).then((tx) => {
        ipfs.cat(tx).then((data) => {
          this.data_getRecipient = JSON.parse(data)
          console.log(JSON.stringify(this.data_getRecipient))
        })
      })
    },
    getIssuerCertificates: function () {
      CertChain.getIssuerCertificates(this.user).then((tx) => {
        this.all_certs = tx
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
    getAllRecipientOfCertificate: function () {
      console.log('here')
      CertChain.getAllRecipientOfCertificate(this.view_cert_hash).then((tx) => {
        this.data_getAllRecipientOfCertificate = tx
      })
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
