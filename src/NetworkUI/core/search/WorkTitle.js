/* eslint-disable no-use-before-define */
import React from 'react';
import { useEffect, useState, useMemo } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import '../../Network.scss';
import { API_URL } from '../../../constants';


export default function SearchTitle({ workNetworkData, setWorkNetworkData, setSelectContent, setSearchID, setLoading={setLoading} }) {

    const [displayTitles, setDisplayTitles] = useState([]);
    const [workClassifications, setWorkClassifications] = useState([]);

    useEffect(() => { fetchWorkTitles();
    console.log("In search title") }, [])

    async function fetchWorkTitles() {
        const worksRes = await fetch(`${API_URL}/titles`);
        const worksJson = await worksRes.json();
        setDisplayTitles(worksJson);
        console.log({ worksJson })
        const workClassicationsRes = await fetch(`${API_URL}/work_classifications`);
        const workClassicationsJson = await workClassicationsRes.json();
        setWorkClassifications(workClassicationsJson)

    }

    async function fetchWorkNetWorkData(value) {
        setLoading(true)
        if (value != null) {
            let url = `${API_URL}/showWorkTitleConnections/${value.id}`;
            console.log(url)
            const worksRes = await fetch(url);
            const worksJson = await worksRes.json();
            setWorkNetworkData(worksJson);
            console.log("workNetworkData in Search", worksJson)
            setSearchID(value.id)

        }
        setSelectContent(1)
        setLoading(false)

    }

    async function fetchWorkClassificationData(value) {
        setLoading(true)
        if (value != null) {
            let url = `${API_URL}/advancedWorkSearch?wClassification=${value.id}`;
            console.log(url)
            const worksRes = await fetch(url);
            const worksJson = await worksRes.json();
            setWorkNetworkData(worksJson);
            console.log("workNetworkData in Search", worksJson)
            setSearchID(null)
        }
        setSelectContent(1)
        setLoading(false)

    }

    return (
        <div className='searchTitle-wrapper'>        
            <Autocomplete
                options={displayTitles}
                getOptionLabel={(option) => `${option.display_title}` || ""}
                id="auto-complete"
                autoComplete
                includeInputInList
                noOptionsText={'Loading Work Titles...'}
                renderInput={(params) => (
                    <TextField {...params} key={params.id} label="Works Title" variant="standard" />
                )}
                onChange={(event, value) =>  fetchWorkNetWorkData(value) }
            />
            <div>or</div>
            <Autocomplete
                options={workClassifications}
                getOptionLabel={(option) => ` ${option.name}` || ""}
                id="auto-complete"
                autoComplete
                noOptionsText={'Loading Work Classifications...'}
                includeInputInList
                renderInput={(params, i) => (
                    <TextField {...params} key={i} label="Work Classifications" variant="standard" />
                )}
                onChange={(event, value) => fetchWorkClassificationData(value)}
            />
        </div>
    );
}
