import React from 'react';
import { useEffect, useState } from "react";
import Info from '../tabs/Info';
import '../Network.scss';
import InfoLink from '../tabs/InfoLink'
import WorkInfo from '../tabs/WorkInfo';

function PanelRight({info, type, setClose, nodeType}) {
    console.log({info})
    return (
        <div className='panel-right-info'>
            {type==="node" && nodeType === "people" && info.length != 0 && <Info info={info} setClose={setClose} />}
            {type==="node" && nodeType === "work" && info.length != 0 && <WorkInfo info={info} setClose={setClose} />}
            {type==="link" && info.length != 0 && <InfoLink info={info} setClose={setClose} />}
        </div>
    )
}

export default PanelRight;
