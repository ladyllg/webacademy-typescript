var Turno;
(function (Turno) {
    Turno["manha"] = "Manh\u00E3";
    Turno["tarde"] = "Tarde";
    Turno["noite"] = "Noite";
})(Turno || (Turno = {}));
var Turma = /** @class */ (function () {
    function Turma(descricao, turno, curso) {
        this.id = Math.floor(Math.random() * (1000 - 2) + 2);
        this.descricao = descricao;
        this.turno = turno;
        this.curso = curso;
    }
    return Turma;
}());
var Curso = /** @class */ (function () {
    function Curso(area) {
        this.area = area;
        this.turmas = [];
    }
    Curso.prototype.adicionarTurma = function (descricao, turno) {
        var objTurma = new Turma(descricao, turno, this.area);
        this.turmas.push(objTurma);
    };
    Curso.prototype.removerTurma = function (descricao) {
        for (var i = 0; i < this.turmas.length; i++) {
            this.turmas[i].descricao === descricao
                ? this.turmas.splice(i, 1)
                : "Faz nada";
        }
    };
    // Altera o turno de uma turma
    Curso.prototype.alterarTurma = function (descricao, turno) {
        for (var i = 0; i < this.turmas.length; i++) {
            this.turmas[i].descricao === descricao
                ? (this.turmas[i].turno = turno)
                : "Faz nada";
            return;
        }
    };
    //Buscar uma turma
    Curso.prototype.buscarTurma = function (descricao) {
        for (var i = 0; i < this.turmas.length; i++) {
            if (this.turmas[i].descricao === descricao)
                return console.log(this.turmas[i]);
        }
        return console.log("Turma não existe");
    };
    Curso.prototype.mostrarTurmas = function () {
        for (var i = 0; i < this.turmas.length; i++) {
            console.log(this.turmas[i]);
        }
    };
    return Curso;
}());
var cursoExatas = new Curso("exatas");
cursoExatas.adicionarTurma("Calculo 2", Turno.noite);
cursoExatas.adicionarTurma("Calculo 1", Turno.tarde);
cursoExatas.adicionarTurma("Calculo 3", Turno.manha);
cursoExatas.mostrarTurmas();
cursoExatas.removerTurma("Calculo 1");
cursoExatas.alterarTurma("Calculo 2", Turno.manha);
cursoExatas.mostrarTurmas();
var buscaTurma = cursoExatas.buscarTurma("Calculo 3");
buscaTurma = cursoExatas.buscarTurma("Calculo 1");
