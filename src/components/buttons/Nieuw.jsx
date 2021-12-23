import React from 'react';
import {Link} from "react-router-dom";
import {useLocation} from 'react-router-dom';

export default function Nieuw({...rest})
{
    const {pathname} = useLocation();

    return (
        <>
            <Link className="btn-add" to={`${pathname}/nieuw`} {...rest} >
                +
            </Link>
        </>
    );
};