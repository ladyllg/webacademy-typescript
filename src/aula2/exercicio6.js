var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cliente = /** @class */ (function () {
    function Cliente(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    return Cliente;
}());
var ContaBanco = /** @class */ (function () {
    function ContaBanco() {
    }
    ContaBanco.prototype.sacar = function (valor) {
        if (this.dados.saldo >= valor) {
            this.dados.saldo -= valor;
            return valor;
        }
    };
    ContaBanco.prototype.depositar = function (valor) {
        if (valor <= 100) {
            return;
        }
        this.dados.saldo += valor;
    };
    return ContaBanco;
}());
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PessoaFisica.prototype.abrirConta = function (dados) {
        this.dados = dados;
        console.log("Nova conta P.Fisica criada com sucesso em nome de " + dados.cliente.nome + " " + dados.cliente.sobrenome);
        return true;
    };
    return PessoaFisica;
}(ContaBanco));
var PessoaJuridica = /** @class */ (function (_super) {
    __extends(PessoaJuridica, _super);
    function PessoaJuridica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PessoaJuridica.prototype.abrirConta = function (dados) {
        this.dados = dados;
        console.log("Nova conta P.Juridica criada com sucesso em nome de " + dados.cliente.nome + " " + dados.cliente.sobrenome);
        return true;
    };
    return PessoaJuridica;
}(ContaBanco));
var joana = new Cliente("Joana", "Silva");
var dados1 = {
    cliente: joana,
    conta: "12345",
    saldo: 10.56,
    endereco: "Rua bpo. praga"
};
var enrique = new Cliente("Enrique", "Rodriges");
var dados2 = {
    cliente: enrique,
    conta: "55556",
    saldo: 500,
    endereco: "Rua marques, n 4"
};
var cliente1 = new PessoaFisica();
cliente1.abrirConta(dados1);
var cliente2 = new PessoaJuridica();
cliente2.abrirConta(dados2);
var banco = [];
banco.push(cliente1);
banco.push(cliente2);
console.log(banco);
cliente1.depositar(200);
var saque = cliente2.sacar(200);
console.log(banco);
