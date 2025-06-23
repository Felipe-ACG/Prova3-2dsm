import { Funcionario } from "./Funcionario";
import { calcularINSSFaixas } from "./inssUtils";

export class Horista extends Funcionario {
  constructor(
    matricula: number,
    nome: string,
    idade: number,
    email: string,
    salario: number, 
    public horas: number,
    public funcao: string
  ) {
    super(matricula, nome, idade, email, salario);
  }

  validaEmail(): boolean {
    const regex = /^[^\s@]+@(adm|dev|vendas)\.xpto\.tec\.br$/;
    return regex.test(this.email);
  }

  calcSalarioBruto(): number {
    return this.salario * this.horas;
  }

  calcDsr(): number {
    return (this.calcSalarioBruto() / 25) * 4;
  }

  calcINSS(): number {
    const salarioContribuicao = this.calcSalarioBruto() + this.calcDsr();
    return calcularINSSFaixas(salarioContribuicao);
  }

  calcSalario(): number {
    return this.calcSalarioBruto() + this.calcDsr() - this.calcINSS();
  }
}




