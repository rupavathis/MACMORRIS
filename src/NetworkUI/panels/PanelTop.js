import React from 'react';
import { useEffect, useState } from "react";
import '../Network.scss';
import { Link } from 'react-router-dom';
function PanelTop() {
    return (
        <div className='panel-top'>
            {/* Panel-top*/}
            <Link to='/' href="index.html">
                <img style={{ 'objectFit': 'contain', 'width': '200px', height: '80px', margin: '10px', opacity: '0.8' }} alt="" src="/images/logos/macmorris.png" />
            </Link>
        </div>
    )
}

export default PanelTop;
