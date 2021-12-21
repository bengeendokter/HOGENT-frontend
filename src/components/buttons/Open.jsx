import React from 'react';
import {Link} from "react-router-dom";
import {useLocation} from 'react-router-dom';

export default function Open({id})
{
    const {pathname} = useLocation();

    return (
        <>
            <Link className="btn-open" to={`${pathname}/${id}`} >
                Open
            </Link>
        </>
    );
};