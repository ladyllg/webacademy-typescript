type Status = "EM_ESTOQUE" | "ESGOTADO";

class Produto {
  private code: number;
  private nome: string;
  private categoria: string;
  private preco: number;
  private status: Status;

  constructor(nome: string, categoria: string, preco: number, status: Status) {
    this.nome = nome;
    this.categoria = categoria;
    this.preco = preco;
    this.status = status;
    this.code = Math.floor(Math.random() * (1000 - 2) + 2);
  }

  protected get getNome() {
    return this.nome;
  }
  protected get getCategoria() {
    return this.categoria;
  }
  protected get getPreco() {
    return this.preco;
  }
  protected get getStatus() {
    return this.status;
  }
  protected set setNome(nome: string) {
    this.nome = nome;
  }
  protected set setCategoria(categoria: string) {
    this.categoria = categoria;
  }
  protected set setPreco(preco: number) {
    this.preco = preco;
  }
  protected set setStatus(status: Status) {
    this.status = status;
  }
}

class ProdutoInfantil extends Produto {
  private _faixa_etaria: number;
  constructor(
    nome: string,
    categoria: string,
    preco: number,
    status: Status,
    faixa_etaria: number
  ) {
    super(nome, categoria, preco, status);

    if (this.checkFaixaEtaria(faixa_etaria)) {
      this.setFaixaEtaria = faixa_etaria;
    } else {
      console.log("Produto Infantil não válido");
    }

    this.setCategoria = "Higiene"
  }

  set setFaixaEtaria(idade: number) {
    this._faixa_etaria = idade;
  }

  get getFaixaEtaria() {
    return this._faixa_etaria;
  }

  checkFaixaEtaria(idade: number) {
    if (idade >= 12) {
      return false;
    }
    return true;
  }
}

const novoProdutoInfantil = new ProdutoInfantil(
  "Shampoo",
  "Cuidados Pessoais",
  30,
  "ESGOTADO",
  3
);
console.log(novoProdutoInfantil);

const novoProdutoInfantil2 = new ProdutoInfantil(
  "Condicionador",
  "Cuidados Pessoais",
  23.3,
  "EM_ESTOQUE",
  4
);
console.log(novoProdutoInfantil2);