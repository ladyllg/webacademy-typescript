class Cliente {
  nome: string;
  sobrenome: string;
  constructor(nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

type DadosConta = {
  cliente: Cliente;
  conta: string;
  saldo: number;
  endereco?: string;
};

abstract class ContaBanco {
  dados: DadosConta;
  abstract abrirConta(dados: DadosConta): boolean;

  sacar(valor: number) {
    if (this.dados.saldo >= valor) {
      this.dados.saldo -= valor;
      return valor;
    }
  }

  depositar(valor: number) {
    if (valor <= 100) {
      return;
    }
    this.dados.saldo += valor;
  }
}

class PessoaFisica extends ContaBanco {
  abrirConta(dados: DadosConta): boolean {
    this.dados = dados;
    console.log(
      `Nova conta P.Fisica criada com sucesso em nome de ${dados.cliente.nome} ${dados.cliente.sobrenome}`
    );
    return true;
  }
}

class PessoaJuridica extends ContaBanco {
  abrirConta(dados: DadosConta): boolean {
    this.dados = dados;
    console.log(
      `Nova conta P.Juridica criada com sucesso em nome de ${dados.cliente.nome} ${dados.cliente.sobrenome}`
    );
    return true;
  }
}

const joana = new Cliente("Joana", "Silva");
const dados1: DadosConta = {
  cliente: joana,
  conta: "12345",
  saldo: 10.56,
  endereco: "Rua bpo. praga",
};

const enrique = new Cliente("Enrique", "Rodriges");
const dados2: DadosConta = {
  cliente: enrique,
  conta: "55556",
  saldo: 500,
  endereco: "Rua marques, n 4",
};

const cliente1 = new PessoaFisica();
cliente1.abrirConta(dados1);

const cliente2 = new PessoaJuridica();
cliente2.abrirConta(dados2);

let banco = [];
banco.push(cliente1);
banco.push(cliente2);

console.log(banco);

cliente1.depositar(200);
let saque = cliente2.sacar(200);

console.log(banco);
