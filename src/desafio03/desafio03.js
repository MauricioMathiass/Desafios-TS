"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldototal01 = 0;
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldototal01 += soma;
        campoSaldo.innerHTML = saldototal01.toString();
        limparcamposoma();
    }
}
function limparcamposoma() {
    soma.value = '';
}
function limparSaldo() {
    if (campoSaldo) {
        saldototal01 = 0;
        campoSaldo.innerHTML = saldototal01.toString();
    }
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
