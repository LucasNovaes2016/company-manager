import {
  funcionarios,
  cargos,
  departamentos,
  faixas_horario,
  modelos_contrato,
  projetos,
} from "../../../../core/data/initialstoredata";
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
    // case GET_EMPLPOYEES_FORMATTED:
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
};
