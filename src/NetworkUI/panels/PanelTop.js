import React from 'react';
import { useEffect, useState } from "react";
import '../Network.scss';
import { Link } from 'react-router-dom';
function PanelTop() {
    return (
        <div className='panel-top'>
            <Link to='/' href="index.html">
                <img style={{
                    objectFit: 'contain', 'width': '200px', height: '80px', margin: '10px',
                    // position: 'absolute', top: 10, right: 15, margin: 10, 
                    opacity: '0.8'
                }} alt="" src="/images/logos/macmorris.png" />
            </Link>
        </div>
    )
}

export default PanelTop;
