import {
  funcionarios,
  cargos,
  departamentos,
  faixas_horario,
  modelos_contrato,
  projetos,
} from "../../../../core/data/initialstoredata";
// import { RECEBER_FUNCIONARIOS_FORMATADO } from "../../types";
import { IEmpresaReducer } from "../../../interfaces";

const initialState: IEmpresaReducer = {
  funcionarios,
  cargos,
  departamentos,
  faixas_horario,
  modelos_contrato,
  projetos,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    // case RECEBER_FUNCIONARIOS_FORMATADO:
    //   console.log("state = ", state);
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
};
