export abstract class Funcionario {
  constructor(
    public matricula: number,
    public nome: string,
    public idade: number,
    public email: string,
    public salario: number
  ) {}

  abstract validaEmail(): boolean;
  abstract calcSalario(): number;
  abstract calcINSS(): number;
}
