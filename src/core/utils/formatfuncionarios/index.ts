import { IFuncionario, IEmpresaReducer } from "../../interfaces";

export const formatFuncionarios = (state: IEmpresaReducer) => {
  let funcionarios_formatado: any = [];

  state.funcionarios.forEach((funcionario) => {
    const cargo = state.cargos.find((cargo) => cargo.id === funcionario.cargo)
      ?.nome;

    const modelo_contrato = state.modelos_contrato.find(
      (modelo) => modelo.id === funcionario.modelo_contrato
    )?.abreviatura;

    const departamento = state.departamentos.find(
      (departamento) => departamento.id === funcionario.departamento
    )?.nome;

    const faixa_horario = state.faixas_horario.find(
      (faixa_horario) => faixa_horario.id === funcionario.faixa_horario
    )?.faixa_horario;

    let mentor = null;
    const mentor_result = state.funcionarios.find(
      (funcionario2) => funcionario2.id === funcionario.mentor
    );

    if (mentor_result) {
      mentor = mentor_result.nome_completo;
    }

    let mentorado = null;
    const mentorado_result = state.funcionarios.find(
      (funcionario3) => funcionario3.id === funcionario3.mentorado
    );

    if (mentor_result) {
      mentorado = mentor_result.nome_completo;
    }

    funcionarios_formatado.push({
      ...funcionario,
      cargo,
      modelo_contrato,
      departamento,
      faixa_horario,
      mentor,
      mentorado,
    });
  });

  return funcionarios_formatado;
};
