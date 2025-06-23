import { Funcionario } from "./Funcionario";
import { calcularINSSFaixas } from "./inssUtils";

export class Mensalista extends Funcionario {
  constructor(
    matricula: number,
    nome: string,
    idade: number,
    email: string,
    salario: number,
    public faltas: number,
    public cargo: string
  ) {
    super(matricula, nome, idade, email, salario);
  }

  validaEmail(): boolean {
    const regex = /^[^\s@]+@(adm|dev|vendas)\.xpto\.tec\.br$/;
    return regex.test(this.email);
  }

  calcFaltas(): number {
    return (this.salario / 30) * this.faltas;
  }

  calcINSS(): number {
    const salarioContribuicao = this.salario - this.calcFaltas();
    return calcularINSSFaixas(salarioContribuicao);
  }

  calcSalario(): number {
    return this.salario - this.calcFaltas() - this.calcINSS();
  }
}



