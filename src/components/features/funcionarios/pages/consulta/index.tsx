import React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { useSelector } from "react-redux";
import { formatFuncionarios } from "../../../../../core/utils";

export default function FuncionariosConsulta(): React.ReactElement {
  const empresaState = useSelector((state: any) => state.empresa);
  const [funcionarios, setFuncionarios] = React.useState([]);

  React.useEffect(() => {
    setFuncionarios(formatFuncionarios(empresaState));
  }, []);

  return (
    <>
      <h1 className="display-4">Funcionários</h1>
      <hr className="my-2" />
      <Grid style={{ height: "400px", marginTop: "20px" }} data={funcionarios}>
        <Column field="id" title="ID" width="80px" />
        <Column field="nome_completo" title="Nome Completo" />
        <Column field="departamento" title="Departamento" />
        <Column field="cargo" title="Cargo" />
        <Column field="modelo_contrato" title="Contrato" />
      </Grid>
    </>
  );
}
