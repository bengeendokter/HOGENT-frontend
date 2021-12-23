import React from 'react';

export default function VoegToe({label="Voeg Toe", isDisabled=false, ...rest})
{
    return (

        <button type="submit" className="btn-voegtoe" disabled={isDisabled} {...rest}>
            {label}
        </button>

    );
};