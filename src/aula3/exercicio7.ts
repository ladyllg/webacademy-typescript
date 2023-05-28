enum Turno {
  manha = "Manhã",
  tarde = "Tarde",
  noite = "Noite",
}
class Turma {
  id: number;
  descricao: string;
  turno: Turno;
  curso: string;
  constructor(descricao: string, turno: Turno, curso: string) {
    this.id = Math.floor(Math.random() * (1000 - 2) + 2);
    this.descricao = descricao;
    this.turno = turno;
    this.curso = curso;
  }
}

class Curso {
  area: string;
  turmas: Turma[];
  constructor(area: string) {
    this.area = area;
    this.turmas = [];
  }

  adicionarTurma(descricao: string, turno: Turno) {
    let objTurma = new Turma(descricao, turno, this.area);
    this.turmas.push(objTurma);
  }

  removerTurma(descricao: string) {
    for (let i = 0; i < this.turmas.length; i++) {
      this.turmas[i].descricao === descricao
        ? this.turmas.splice(i, 1)
        : "Faz nada";
    }
  }

  // Altera o turno de uma turma
  alterarTurma(descricao: string, turno: Turno) {
    for (let i = 0; i < this.turmas.length; i++) {
      this.turmas[i].descricao === descricao
        ? (this.turmas[i].turno = turno)
        : "Faz nada";
      return;
    }
  }

  //Buscar uma turma
  buscarTurma(descricao: string) {
    for (let i = 0; i < this.turmas.length; i++) {
      if (this.turmas[i].descricao === descricao)
        return console.log(this.turmas[i]);
    }
    return console.log("Turma não existe");
  }

  mostrarTurmas() {
    for (let i = 0; i < this.turmas.length; i++) {
      console.log(this.turmas[i]);
    }
  }
}

const cursoExatas = new Curso("exatas");
cursoExatas.adicionarTurma("Calculo 2", Turno.noite);
cursoExatas.adicionarTurma("Calculo 1", Turno.tarde);
cursoExatas.adicionarTurma("Calculo 3", Turno.manha);
cursoExatas.mostrarTurmas();
cursoExatas.removerTurma("Calculo 1");
cursoExatas.alterarTurma("Calculo 2", Turno.manha);
cursoExatas.mostrarTurmas();
let buscaTurma = cursoExatas.buscarTurma("Calculo 3");
buscaTurma = cursoExatas.buscarTurma("Calculo 1");
