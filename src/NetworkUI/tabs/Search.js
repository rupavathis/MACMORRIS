import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SearchName from '../core/search/PeopleName';
import SearchTitle from '../core/search/WorkTitle';
import '../Network.scss';
import AdvancedSearchPeople from '../core/search/PeopleAdvanced';
import AdvancedSearchWork from '../core/search/WorkAdvanced';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Search({ networkData, setNetworkData, workNetworkData, setWorkNetworkData, setSelectContent,
    setDisplayNames, displayNames, setLoading, id, setSearchID }) {
    const [value, setValue] = React.useState(0);
    library.add(fas)
    const [showAdvanced, setShowAdvanced] = React.useState(false);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='tab-wrapper-network'>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                        <Tab label="People" {...a11yProps(0)} />
                        <Tab label="Works" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                {!showAdvanced && <TabPanel value={value} index={0}>
                    <SearchName setNetworkData={setNetworkData} setSelectContent={setSelectContent} setLoading={setLoading}
                    setDisplayNames={setDisplayNames} displayNames={displayNames} id={id} setSearchID={setSearchID}
                    />
                </TabPanel>}
                {!showAdvanced &&
                    <TabPanel value={value} index={1}>
                        <SearchTitle setWorkNetworkData={setWorkNetworkData} setSelectContent={setSelectContent} setLoading={setLoading}
                        setSearchID={setSearchID}/>
                    </TabPanel>
                }

                <div className='advanced-search-wrapper' onClick={() => setShowAdvanced(!showAdvanced)}>
                    <div>Advanced Search</div>
                    <div>
                        {!showAdvanced && <FontAwesomeIcon icon={["fas", "chevron-up"]} />}
                        {showAdvanced && <FontAwesomeIcon icon={["fas", "chevron-down"]} />}
                    </div>
                </div>
               
                {showAdvanced && value === 0 && <AdvancedSearchPeople setNetworkData={setNetworkData} setSearchID={setSearchID}
                 setSelectContent={setSelectContent} setLoading={setLoading} />}
                {showAdvanced && value === 1 && <AdvancedSearchWork setWorkNetworkData={setWorkNetworkData} setLoading={setLoading} 
                setSearchID={setSearchID} setSelectContent={setSelectContent} />}
            </Box>
        </div>
    );
}
