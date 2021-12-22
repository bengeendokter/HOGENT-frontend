import {useLocation} from 'react-router-dom';

export default function NotFound()
{
    const {pathname} = useLocation();

    return (
        <>
            <h2>Pagina niet gevonden</h2>
            <p className='main-container text-xl'>
                De pagina <em className='inline'>{pathname}</em> kon niet gevonden worden. Gebruik de navigatie knoppen om de juiste pagina te vinden.
            </p>
        </>
    );

}