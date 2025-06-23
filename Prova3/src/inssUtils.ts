export function calcularINSSFaixas(salarioContribuicao: number): number {
  let inss = 0;

  const faixas = [
    { limite: 1412.00, aliquota: 0.075 },
    { limite: 2666.68, aliquota: 0.09 },
    { limite: 4000.03, aliquota: 0.12 },
    { limite: 7786.02, aliquota: 0.14 },
  ];

  let baseAnterior = 0;

  for (const faixa of faixas) {
    if (salarioContribuicao > faixa.limite) {
      inss += (faixa.limite - baseAnterior) * faixa.aliquota;
    } else {
      inss += (salarioContribuicao - baseAnterior) * faixa.aliquota;
      break;
    }
    baseAnterior = faixa.limite;
  }

  return Math.min(inss, 908.85);
}

