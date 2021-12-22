import React, {useContext} from 'react';
import Lid from "./Lid"
import {LedenContext} from '../contexts/LedenProvider';

export default function Ledenlijst()
{
  const {leden, error, loading} = useContext(LedenContext);

  return (
    <>
    {loading && <h2>Laden...</h2>}
    {(error && !leden) && <pre className="text-red-600">{error.message}</pre>}
    {!leden && <p>Er zijn nog geen dagen</p>}
      {leden.sort((lid1, lid2) => lid1.voornaam < lid2.voornaam ? -1 : 1)
        .map((lid) => <Lid key={lid.id} props={lid} />)}
    </>
  );
};