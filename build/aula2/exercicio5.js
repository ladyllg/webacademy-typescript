class Produto {
    constructor(nome, categoria, preco, status) {
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.status = status;
        this.code = Math.random();
    }
    get getNome() {
        return this.nome;
    }
    get getCategoria() {
        return this.categoria;
    }
    get getPreco() {
        return this.preco;
    }
    get getStatus() {
        return this.status;
    }
    set setNome(nome) {
        this.nome = nome;
    }
    set setCategoria(categoria) {
        this.categoria = categoria;
    }
    set setPreco(preco) {
        this.preco = preco;
    }
    set setStatus(status) {
        this.status = status;
    }
}
class ProdutoInfantil extends Produto {
    constructor(nome, categoria, preco, status, faixa_etaria) {
        super(nome, categoria, preco, status);
        this._faixa_etaria = faixa_etaria;
    }
}
const novoProdutoInfantil = new ProdutoInfantil("Shampoo", "Cuidados Pessoais", 30, "ESGOTADO", 12);
console.log(novoProdutoInfantil);
