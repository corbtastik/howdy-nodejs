## Simple nodejs example app

A how to push nodejs app to CF example kinda thing.

Starts a server that has encryption/decryption endpoints.

### Encryption

To encrypt using [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)

Post a request body of text and a key as last path variable.  Also use text/plain content type.

So:  
```
curl -X POST -d 'One fish two fish' \
-H 'Content-Type: text/plain' \
https://howdy-nodejs.cfapps.io/crypto/aes/encrypt/foo
```

Will produce a response that contains the encrypted value.  

``
U2FsdGVkX1+2Exo8X2AsRbUTrkoiz+9WTWg18C5zEVnwVQSBKZD5O4mHc7blAfW8
``

### Decryption

To decrypt using [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)

So:  
```
curl -X POST -d 'U2FsdGVkX1+2Exo8X2AsRbUTrkoiz+9WTWg18C5zEVnwVQSBKZD5O4mHc7blAfW8' \
-H 'Content-Type: text/plain' \
https://howdy-nodejs.cfapps.io/crypto/aes/decrypt/foo
```  

Will produce the decrypted value.

``
One fish two fish
``

Howdy Boot, Howdy Kotlin, Howdy Nodejs and Howdy Python are all simple microservices that each expose a different random API implemented in a different language.  For example, Howdy Boot exposes a random name API, Howdy Kotlin exposes a random address API, Howdy Nodejs exposes enpoints to encrypt and decrypt text and Howdy Python exposes a random number API.  All examples that show the power of PCF to run microservices in a language-agnostic manner ( awe yeah).  
