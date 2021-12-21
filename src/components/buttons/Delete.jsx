import React from 'react';
import {IoTrashOutline} from "react-icons/io5";

export default function Delete({handleRemove})
{
    return (
        <>
            <button className="btn-dlt" onClick={handleRemove}>
            <IoTrashOutline />
            </button>
        </>
    );
};