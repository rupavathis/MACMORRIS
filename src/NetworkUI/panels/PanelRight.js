import React from 'react';
import { useEffect, useState } from "react";
import Info from '../tabs/Info';
import '../Network.scss';
import InfoLink from '../tabs/InfoLink'

function PanelRight({info, type}) {
    console.log({info})
    return (
        <div className='panel-right-info'>
            {type==="node" && info.length != 0 && <Info info={info} />}
            {type==="link" && info.length != 0 && <InfoLink info={info} />}
        </div>
    )
}

export default PanelRight;
