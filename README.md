<h1>CertChain – Certificate Management</h1>

<h2>Introduction:</h2>

Safe and permanent record storage is a property of blockchain, which can be utilized in many cases.
One of which is certificate management system, which we can implement in blockchain, as the data being stored is of high importance, as to be stored for a long time. The security of records is also guaranteed by the blockchain.
Blockchain makes the management decentralized, trustless, secure, and immutable.

Since all the necessary operations in such a system can be programmed in the “Smart contracts”, they are also automated, and proceed with the expected outcome.
_Smart contract is a code which runs on blockchain, and is analogous to a traditional contract, but also automatically enforce the required obligations._

_A smart contract is a computer protocol intended to digitally facilitate, verify, or enforce the negotiation or performance of a contract. Smart contracts allow the performance of credible transactions without third parties_

The current system of certificate management is centralized, and volatile, as if an attacker has to hack into the system, it can easily do so by attacking the central node running the system.
This system, when run on blockchain provides a far better security, as there is no single point of attack.
It also provides transparency to the participants, to make it an open and fair alternative to the current system.

**Note:** Smart contract can be also made open sourced, and available to all. 

Storing certificates on blockchain is a better approach, as it makes them available permanently and provides immutability(unalterable). These can be thought of as reliable proofs, online.

<h2>Prerequisites:</h2>
The system requires the participant to have an account on the blockchain ecosystem (Ethereum), and all the transactions that are to be performed, will be from the balance of the participant.
Ethers can be bought from many crypto exchange like coinbase, poloniex, etc.
The participant also need a way to connect their account to the system’s web application(DApp).

This could be done either by using web3 enabled browsers, like Mist, Brave; Chrome browser could also be used with the Metamask extension.
Working of the system:

<h2>How to Use:</h2>

Every user must first register themselves in the system, with their Ethereum accounts. All the gas fees of the transactions are done from the user’s accounts.
For storing user data, the system uses “IPFS”.

_InterPlanetary File System (IPFS) is a protocol and network designed to create a content-addressable, peer-to-peer method of storing and sharing hypermedia in a distributed file system_

To certify any recipient, an issuer first registers the certificate, and then issues the certificate using the registered recipient’s address.
At recipient’s end, it can get the details of all the certificates he is certified.

Also, if any third party wants to check the details of issuer, recipient, or the certificate, it can easily do so.
The function for registering, or issuing certificates is implemented in the form of transaction. The cost of any transaction done, is the “gas” cost.

_Gas is a transaction fee required when interacting with the smart contract. The gas depends on the logic implemented on the smart contract._

The system also provides any user to access the logs of the transactions. This provides a way to check the authenticity of the certificate, the recipient, and the issuer.

<h2>Checks:</h2>

1.	Only registered user (issuer/ recipient) can register certificates , issue certificates, be issued certificates or view certificates.
2.	The certificate which is to be issued, must be registered first.
3.	No single user can register twice.


<h2>Users:</h2>

There are 3 types of users the system provides support to:

**Issuer:** This is the certifying authority, which registers new certificates, then issues the desired recipient that certificate.
**Recipient:** This is the recipient of the certificate. It first registers itself in the system, then sends its address to the issuer, to get the certificate issued.
**Third Party:** This can be any anonymous user, which wants to verify the recipient’s certificate.

<h2>Events:</h2>

Events are the logs of all the transactions done in the blockchain. So for every function of the smart contract, we log its details in events.
Our system tracks these events:

1.	IssuerRegistered: logs details of every issuer registered.
2.	RecipientRegistered: logs details of every recipient registered.
3.	CertificateRegistered: logs details of every certificate registered.
4.	CertificateIssued: logs details of every certificate issued.

<h2>Process Flow:</h2>

1.	All the issuers/ recipients register themselves to the system.
2.	The profile details of the users are stored on IPFS, identified by some unique hash, which is stored in the blockchain.
3.	Issuer registers its certificate(s).
4.	Issuer asks for the address of the recipient, and then issues the certificate to the recipient.
5.	Issuer can also access recipient’s details from its address.
6.	After a certificate is issued, the recipient can check the list of all certificates its issued.
7.	Recipient can also access details of issuer, and the certificates.
8.	Whenever any recipient of the certificate must prove its certifications, he can simply send its address.
9.	The verifier can simple access the certifications of the recipient, and can get all the details of certificate, issuer, and the recipient.


<h2>Pros:</h2>

1.	Since the system runs on blockchain, there is no central body which runs the system. It is decentralized, and all its data is immutable.
2.	The system provides transparency to its participants, where each user can access the system transactions. This also provides a good way for auditing the system.
3.	The system provides pseudonymity. The identification of any participant can be done only based on its address on the blockchain.
4.	All the transactions done on the system are safe, and verified by a vast P2P global network (Ethereum).
5.	The system stores the user details on IPFS, which is expected to be the Future of the Web. The data is permanent, and never lost.

<h2>Cons:</h2>

1.	There is gas fees for each transaction while placing the bet depends on the smart contract code. So, if the code logic is complex(storage/memory-wise), the gas might be high.


<h2>Future Scope:</h2>

1.	For verification of the certificates, one more layer can be added. We plan to use Merkle hashes as advanced proof for the certificates’ authenticity.
2.	A feature of revoking a certificate can be added which can also be used for time-valid certificates.
3.	A system of privilege-based access to certificate can be implemented, where only the allowed users can access the certificates.
4.	For storing IPFS hashes in the blockchain, a more gas-efficient way (multihash) can be used.


<h2>How to run:</h2>

1. Clone the project

    `git clone https://github.com/sacros/CertChain.git`

2. Install dependencies

    `npm install`

3. Start [ganache](http://truffleframework.com/ganache/).

4. Compile the contract

    `truffle compile `

5. Migrate the contract

    `truffle migrate`

6. Start vue app

    `npm run start`

7. Interact with the app on `localhost:8000`
