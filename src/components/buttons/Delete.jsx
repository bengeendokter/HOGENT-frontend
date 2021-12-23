import React from 'react';
import {IoTrashOutline} from "react-icons/io5";

export default function Delete({handleRemove, ...rest})
{
    return (
        <>
            <button className="btn-dlt" onClick={handleRemove} {...rest}>
            <IoTrashOutline />
            </button>
        </>
    );
};