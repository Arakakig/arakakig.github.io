const crypto = require("crypto");

const DADOS_CRIPTOGRAFAR = {
    algorithm : "aes256",
    key : "chaves",
    tipo: "hex"
};

function criptografar(senha) {
    const cipher = crypto.createDecipheriv(DADOS_CRIPTOGRAFAR.algorithm , DADOS_CRIPTOGRAFAR.key);
   // crypto.createDecipheriv(algorithm, key, iv[, options])
    cipher.update(senha);
    return cipher.final(DADOS_CRIPTOGRAFAR.tipo);
};
let senha = "arakaki34";
let senha_criptografada = criptografar(senha);

console.log(senha);
console.log(senha_criptografada);
function descriptografar(senha) {
    const decipher = crypto.createDecipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
    decipher.update(senha, DADOS_CRIPTOGRAFAR.tipo);
    return decipher.final();
};