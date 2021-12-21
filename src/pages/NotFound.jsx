import {useLocation} from 'react-router-dom';

export default function NotFound()
{
    const {pathname} = useLocation();

    return (
        <>
            <h2>Pagina niet gevonden</h2>
            <p>
                De pagina {pathname} is niet gevonden. Gebruik de navigatie knoppen om de juiste pagina te vinden.
            </p>
        </>
    );

}