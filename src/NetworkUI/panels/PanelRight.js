import React from 'react';
import { useEffect, useState } from "react";
import Info from '../tabs/Info';
import '../Network.scss';
import InfoLink from '../tabs/InfoLink'
import WorkInfo from '../tabs/WorkInfo';
import WorkInfoLink from '../tabs/WorkInfoLink';

function PanelRight({info, type, setClose, nodeType}) {
    console.log({info, type, nodeType})
    return (
        <div className='panel-right-info'>
            {type==="node" && nodeType === "people" && info != 0 && <Info info={info} setClose={setClose} />}
            {type==="node" && nodeType === "work" && info != 0 && <WorkInfo info={info} setClose={setClose} />}
            {type==="link" && nodeType === "people" && info != 0 && <InfoLink info={info} setClose={setClose} />}
            {type==="link" && nodeType === "work" && info != 0 && <WorkInfoLink info={info} setClose={setClose} />}
        </div>
    )
}

export default PanelRight;
