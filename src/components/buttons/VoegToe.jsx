import React from 'react';

export default function VoegToe({label="Voeg Toe", isDisabled=false})
{
    return (

        <button type="submit" className="btn-voegtoe" disabled={isDisabled} >
            {label}
        </button>

    );
};