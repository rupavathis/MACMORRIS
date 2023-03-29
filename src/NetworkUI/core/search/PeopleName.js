/* eslint-disable no-use-before-define */
import React from 'react';
import { useEffect } from "react";
import AsyncSelect from 'react-select/async';
import '../../Network.scss';
import { API_URL } from '../../../constants';


export default function SearchName({ setNetworkData, setSelectContent, setDisplayNames, displayNames, id,
    setSearchID}) {


    const [searchData, setSearchData] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");
    const [randomInput, setRandomInput] = React.useState();
    const [displayNames1, setDisplayNames1] = React.useState([]);

    const getDisplayDOB = (d) => {

        if (d.date_of_birth != null && d.date_of_death != null) {
            return `${d.date_of_birth} - ${d.date_of_death}`
        }


        else if (d.date_of_birth == null && d.date_of_death == null && d.flourishing_date == null)
            return ""

        else if (d.date_of_birth == null && d.date_of_death != null)
            return `D. ${d.date_of_death}`

        else if (d.date_of_birth == null && d.date_of_death == null)
            return `FL. ${d.flourishing_date}`

        else return ""
    }

    const fetchNames = async () => {

        const start = new Date();
        const displayNamesRes = await fetch(`${API_URL}/names`);
        var displayNamesJson = await displayNamesRes.json();
        // setDisplayNames(displayNamesJson.slice(0, 100))

        const displayNames1 = displayNamesJson.map((d) => ({
            label: d.display_name + ` (${getDisplayDOB(d)})`,
            others: d.other_names,
            id: d.id
        }))
        const end = new Date();
        setDisplayNames(displayNamesJson)
        setDisplayNames1(displayNames1);
        console.log('disp', { displayNamesJson })
        console.log('Time taken for fetch', end - start);
    };

    const fetchNetworkData = async() => {
        await fetchNames();
         if (id != '-1') {
             setSearchData(true);
             fetchData(id)
             setSelectContent(0)
         }
     }

    useEffect(() => {
        fetchNetworkData()
    }, [id!='-1'])

    const fetchData = async(id) => {
        const peopleRes = await fetch(`${API_URL}/showConnection/${id}`);
        const peopleJson = await peopleRes.json();
        console.log("people json in 12345", peopleJson);
        setNetworkData(peopleJson);
        setSearchID(() => id)
    }

    const onSearchChange = async (
        newValue,
        actionMeta
    ) => {
        setSearchData(true);
        await fetchData(newValue.id)
        setSelectContent(0)
    };

    const filterNames = (inputValue) => {
        const start = new Date();
        const ret = displayNames1.filter((i) => {
            return i.others !== null &&
                i.others.toLowerCase().includes(inputValue.toLowerCase()) || (i.label.toLowerCase().includes(inputValue.toLowerCase()))
        });
        const end = new Date();
        console.log('Time taken for filter', end - start);
        return ret;
    };


    let timeoutId

    const debounce = (func, delay) => {
        return function () {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(() => {
                func()
            }, delay)
        }
    }


    const loadOptions = (inputValue) => {
        return new Promise((resolve) => {
            debounce(() => resolve(filterNames(inputValue)), 200)();
        })
    }

    // const loadOptions = debounce(_loadOptions, 300);

    const handleInputChange = (newValue) => {
        // const newInput = newValue.replace(/\W/g, '');
        const newInput = newValue;
        setInputValue(newInput);
        return newInput;
    };

    // let x = 0;
    // if (id != '-1') {
    //     console.log('doing uid', { id })
    //     x = id
    // }
    // else {
    //     console.log('doing uid in else', { id })
    //     x = ~~(Math.random() * displayNames.length)
    // }

    const x = ~~(Math.random() * displayNames.length)

    return (
        <div className='searchTitle-wrapper'>
            {displayNames1.length != 0 && <AsyncSelect
                cacheOptions
                placeholder={"Type 3 letters to search or Choose Random"}
                loadOptions={loadOptions}
                defaultOptions={
                    [{
                        label: displayNames[x].display_name,
                        id: displayNames[x].id,
                    }]}
                onInputChange={handleInputChange}
                onChange={onSearchChange}
                getOptionValue={(option) => option.label}
            />}
        </div>
    );
}
