import { NextResponse } from "next/server";

const caronas = [
  {
    id: "carona-1",
    origem: "Centro de Caraguatatuba",
    destino: "IFSP — Campus Caraguatatuba",
    horario: "07:10",
    data: "Todos os dias úteis",
    vagas: 3,
    motorista: "Rafa",
    observacao: "Saída perto da praça central."
  },
  {
    id: "carona-2",
    origem: "Indaiá",
    destino: "IFSP — Campus Caraguatatuba",
    horario: "07:25",
    data: "Segunda a sexta",
    vagas: 2,
    motorista: "Lucas",
    observacao: "Combinar ponto exato pelo chat."
  },
  {
    id: "carona-3",
    origem: "Porto Novo",
    destino: "Centro de Caraguatatuba",
    horario: "08:00",
    data: "A combinar",
    vagas: 1,
    motorista: "Marina",
    observacao: "Pode combinar o horário com antecedência."
  }
];

export async function GET() {
  return NextResponse.json({ caronas });
}
