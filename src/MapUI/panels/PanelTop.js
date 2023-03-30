import React from 'react';
import Filter from '../tabs/Filter';
import About from '../tabs/About';

function Panel() {
    return (
        <div className="panel-left">
            <div className="top">
              {/* <Filter /> */}
            </div>
            <div className="bottom">
                <About />
            </div>
        </div>

    );

}


export default Panel;

