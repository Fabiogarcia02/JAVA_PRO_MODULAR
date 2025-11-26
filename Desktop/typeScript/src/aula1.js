"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Automovel {
    ligar() {
        console.log("Ligando automovel");
    }
    desligar() {
        console.log("Desligando automovel");
    }
}
class Especificações {
    descricao;
    constructor(descricao) {
        this.descricao = descricao;
    }
}
class Carro {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
