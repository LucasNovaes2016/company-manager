import {
  IDepartamento,
  ICargo,
  IFaixaHorario,
  IFuncionario,
  IModeloContrato,
  IProjeto,
} from "../../interfaces";

export const departamentos: IDepartamento[] = [
  {
    id: 1,
    nome: "Recursos Humanos",
    abreviatura: "RH",
    descricao:
      "Departamento criado para atividades relacionadas a área de Recursos Humanos.",
    data_criacao: "18/05/2020",
    ativo: "S",
  },
  {
    id: 2,
    nome: "Administração Geral",
    abreviatura: "AG",
    descricao: "Departamento que cuida da administração geral da empresa.",
    data_criacao: "18/05/2020",
    ativo: "S",
  },
];

export const faixas_horario: IFaixaHorario[] = [
  { id: 1, faixa_horario: "08:00 - 18:00", ativo: "S" },
  { id: 2, faixa_horario: "07:00 - 17:00", ativo: "S" },
];

export const cargos: ICargo[] = [
  {
    id: 1,
    nome: "Programador Jr.",
    data_criacao: "18/05/2020",
    salario: 3500.5,
    ativo: "S",
  },
  {
    id: 2,
    nome: "Gestor de Colaboradores Jr.",
    data_criacao: "18/05/2020",
    salario: 3500.5,
    ativo: "S",
  },
];

export const modelos_contrato: IModeloContrato[] = [
  {
    id: 1,
    nome: "Consolidação das Leis de Trabalho - CLT",
    abreviatura: "CLT",
  },
  { id: 2, nome: "Pessoa Jurídica - PJ", abreviatura: "PJ" },
];

export const funcionarios: IFuncionario[] = [
  {
    id: 1,
    nome_completo: "Rafael Gonzales",
    data_nascimento: "01/01/1990",
    data_admissao: "18/05/2020",
    cpf: "642.755.484-26",
    tipo_sanguineo: "A+",
    cargo: 1,
    departamento: 1,
    faixa_horario: 1,
    mentor: null,
    mentorado: 2,
    modelo_contrato: 1,
  },
  {
    id: 2,
    nome_completo: "Josenaldo dos Santos",
    data_nascimento: "01/01/1994",
    data_admissao: "18/05/2020",
    cpf: "731.822.455-76",
    tipo_sanguineo: "O+",
    cargo: 1,
    departamento: 1,
    faixa_horario: 1,
    mentor: 1,
    mentorado: null,
    modelo_contrato: 1,
  },
];

export const projetos: IProjeto[] = [
  {
    id: 1,
    nome: "Contratação Mensal de Colaboradores",
    gerente: 1,
    membros: [1, 2],
    data_inicio: "18/05/2020",
    previsao_fim: "31/08/2020",
  },
];
