import React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";

export default function FuncionariosConsulta(): React.ReactElement {
  return (
    <>
      <h1 className="display-4">Funcionários</h1>
      <hr className="my-2" />
      <Grid
        style={{ height: "400px", marginTop: "20px" }}
        data={[
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
        ]}
      >
        <Column field="id" title="ID" width="80px" />
        <Column field="nome_completo" title="Nome Completo" />
        <Column field="departamento" title="Departamento" />
        <Column field="cargo" title="Cargo" />
        <Column field="modelo_contrato" title="Contrato" />
      </Grid>
    </>
  );
}
