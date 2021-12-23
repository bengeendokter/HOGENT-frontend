import LedenLijst from '../components/Ledenlijst';
import Nieuw from '../components/buttons/Nieuw';

export default function Leden()
{
  return (
    <>
      <LedenLijst />
      <Nieuw data-cy="add_lid_btn"></Nieuw>
    </>
  )
}