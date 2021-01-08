const crypto = require("crypto");

let pbkdf2Async = (password, salt, iterations, keylen, digest) => {
  return new Promise((res, rej) => {
    crypto.pbkdf2(password, salt, iterations, keylen, digest, (err, key) => {
      err ? rej(err) : res(key.toString("base64"));
    });
  });
};

exports.pbkdf2Async = pbkdf2Async;
