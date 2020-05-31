export interface IDepartamento {
  id: number;
  nome: string;
  abreviatura: string;
  descricao: string;
  data_criacao: string;
  ativo: string;
}

export interface IFaixaHorario {
  id: number;
  faixa_horario: string;
  ativo: string;
}

export interface ICargo {
  id: number;
  nome: string;
  data_criacao: string;
  salario: number;
  ativo: string;
}

export interface IModeloContrato {
  id: number;
  nome: string;
  abreviatura: string;
}

export interface IFuncionario {
  id: number;
  nome_completo: string;
  data_nascimento: string;
  data_admissao: string;
  cpf: string;
  tipo_sanguineo: string | null;
  cargo: number;
  departamento: number | null;
  faixa_horario: number;
  mentor: number | null;
  mentorado: number | null;
  modelo_contrato: number;
}

export interface IProjeto {
  id: number;
  nome: string;
  gerente: number;
  membros: number[];
  data_inicio: string | null;
  previsao_fim: string | null;
}

export interface IMenuReducer {
  visibilidade_menu: boolean;
}

export interface IEmpresaReducer {
  funcionarios: IFuncionario[];
  cargos: ICargo[];
  departamentos: IDepartamento[];
  faixas_horario: IFaixaHorario[];
  modelos_contrato: IModeloContrato[];
  projetos: IProjeto[];
}
