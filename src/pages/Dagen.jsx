import Dagenlijst from "../components/Dagenlijst";
import Nieuw from '../components/buttons/Nieuw';

export default function Dagen()
{
  return (
    <>
      <Dagenlijst />
      <Nieuw data-cy="add_dag_btn" ></Nieuw>
    </>
  )
}