import {useLocation} from 'react-router-dom';

export default function NotFound()
{
    const {pathname} = useLocation();

    return (
        <>
            <h1>Pagina niet gevonden</h1>
            <p>
            De pagina {pathname} is niet gevonden. Gebruik de navigatie knoppen om de juiste pagina te vinden. 
            </p>
        </>
    );

}