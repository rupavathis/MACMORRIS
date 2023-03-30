import React, { useEffect, useState } from 'react';
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from '@mui/material/Button';
import '../../Network.scss';
import { API_URL } from '../../../constants';


function AdvancedSearchPeople({ setNetworkData,setSelectContent, setLoading, setSearchID}) {

    const [rOrders, setROrders] = useState([]);
    const [attribs, setAttribs] = useState([]);
    const [gender, setGender] = useState([]);
    const [selectedROrder, setSelectedROrder] = useState([]);
    const [selectedAttribs, setSelectedAttribs] = useState([]);
    const [selectedGender, setSelectedGender] = useState([]);

    useEffect(() => { fetchData() }, []);

    const fetchData = async () => {
        const rOrders = await fetch(`${API_URL}/religious_orders`);
        const rOrdersJson = await rOrders.json();
        console.log(rOrdersJson)
        setROrders(rOrdersJson);

        const attribsRes = await fetch(`${API_URL}/attribs`);
        const attribsJson = await attribsRes.json();
        console.log(attribsJson)
        setAttribs(attribsJson);

        const genderRes = await fetch(`${API_URL}/genders`);
        const genderJson = await genderRes.json();
        console.log(genderJson)
        setGender(genderJson);
    }

    async function handleSearch() {
        setLoading(true)
        console.log("selectedROrder Length", selectedROrder.length, selectedAttribs.length)
        if (selectedROrder.length != 0 || selectedAttribs.length != 0 || selectedGender.length != 0) {
            let url = `advancedPeopleSearch?`;
            if (selectedROrder.length != 0) url += `rOrder=${selectedROrder}&`
            if (selectedAttribs.length != 0) url += `attribs=${selectedAttribs}&`
            if (selectedGender.length != 0) url += `gender=${selectedGender}`
            console.log({url})
            const res = await fetch(`${API_URL}/${url}`);
            const output = await res.json();
            setNetworkData(output);
        }
        setSearchID(null);
        setSelectContent(0)
        setLoading(false)
    }

    return (
        <div className='advanced-search-list'>
             {[{
                "type": "Attributes",
                "args": attribs,
                "func": setSelectedAttribs
            },
            {
                "type": "Religious Order",
                "args": rOrders,
                "func": setSelectedROrder
            },
            {
                "type": "Gender",
                "args": gender,
                "func": setSelectedGender
            }].map((type) => (
                <Autocomplete
                    id="auto-complete"
                    multiple
                    options={type.args}
                    getOptionLabel={(option) => `${option.name}` || ""}
                    autoComplete
                    includeInputInList
                    renderInput={(params, i) => (
                        <TextField {...params} key={i} label={type.type} variant="standard" />
                    )}
                    onChange={(event, value) => type.func(value.map((v) => v.id))}
                />))}              
                <Button className='search-button' variant="outlined" onClick={handleSearch}>Search</Button>
        </div>
    );
};

export default AdvancedSearchPeople;
