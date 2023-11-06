'use strict';

function createHash(key, secret) {
   const hash = btoa(key + secret);
   return hash;
}

console.log(createHash(`key`, `secret`));