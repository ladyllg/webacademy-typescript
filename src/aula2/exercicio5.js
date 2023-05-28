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
var Produto = /** @class */ (function () {
    function Produto(nome, categoria, preco, status) {
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.status = status;
        this.code = Math.floor(Math.random() * (1000 - 2) + 2);
    }
    Object.defineProperty(Produto.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getCategoria", {
        get: function () {
            return this.categoria;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getPreco", {
        get: function () {
            return this.preco;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getStatus", {
        get: function () {
            return this.status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setNome", {
        set: function (nome) {
            this.nome = nome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setCategoria", {
        set: function (categoria) {
            this.categoria = categoria;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setPreco", {
        set: function (preco) {
            this.preco = preco;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setStatus", {
        set: function (status) {
            this.status = status;
        },
        enumerable: true,
        configurable: true
    });
    return Produto;
}());
var ProdutoInfantil = /** @class */ (function (_super) {
    __extends(ProdutoInfantil, _super);
    function ProdutoInfantil(nome, categoria, preco, status, faixa_etaria) {
        var _this = _super.call(this, nome, categoria, preco, status) || this;
        if (_this.checkFaixaEtaria(faixa_etaria)) {
            _this.setFaixaEtaria = faixa_etaria;
        }
        else {
            console.log("Produto Infantil não válido");
        }
        _this.setCategoria = "Higiene";
        return _this;
    }
    Object.defineProperty(ProdutoInfantil.prototype, "setFaixaEtaria", {
        set: function (idade) {
            this._faixa_etaria = idade;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProdutoInfantil.prototype, "getFaixaEtaria", {
        get: function () {
            return this._faixa_etaria;
        },
        enumerable: true,
        configurable: true
    });
    ProdutoInfantil.prototype.checkFaixaEtaria = function (idade) {
        if (idade >= 12) {
            return false;
        }
        return true;
    };
    return ProdutoInfantil;
}(Produto));
var novoProdutoInfantil = new ProdutoInfantil("Shampoo", "Cuidados Pessoais", 30, "ESGOTADO", 3);
console.log(novoProdutoInfantil);
var novoProdutoInfantil2 = new ProdutoInfantil("Condicionador", "Cuidados Pessoais", 23.3, "EM_ESTOQUE", 4);
console.log(novoProdutoInfantil2);
