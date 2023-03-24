import React from 'react';
import Filter from '../tabs/Filter';
import About from '../tabs/About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import TabInfo from '../tabs/Tab';

function Panel({hoverInfo, sites, countSites}) {
    const [expanded, setExpanded] = React.useState(true);
    const handleClick = () => {
        console.log({expanded});
        setExpanded(!expanded)
    }
    console.log("panel right", hoverInfo, sites, countSites )

    return (
        <div className={clsx("panel-right-wrapper", { "active": expanded })}>
            <div class="right-container">
                <TabInfo info={hoverInfo} sites={sites} 
                    countSites={countSites} />
                <div
                    onClick={handleClick}
                    className={clsx("minimize-button", { "active": expanded })}
                >
                    <FontAwesomeIcon icon={faChevronRight} className={clsx("turn-icon-2", { "active": !expanded })} />
                </div>
            </div>

        </div>

    );

}


export default Panel;

