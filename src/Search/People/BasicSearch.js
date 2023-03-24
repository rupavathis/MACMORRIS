/* eslint-disable no-use-before-define */
import React from 'react';
import { useEffect, useState, useMemo } from "react";
import Container from "@mui/material/Container";
import AsyncSelect from 'react-select/async';
import AdvancedSearch from './AdvancedSearch';
import Content from './Content1';

export default function BasicSearch({ setSearchData, setPeopleData, displayNames, setLoading }) {

  console.log("basic")
 
  const [inputValue, setInputValue] = React.useState("");


  const onSearchChange = async (
    newValue,
    actionMeta
  ) => {
    setLoading(true)
    const peopleRes = await fetch(`/search/people/${newValue.id}`);
    const peopleJson = await peopleRes.json();
    console.log("people json", peopleJson);
    setPeopleData(peopleJson);
    setSearchData('people');
    setLoading(false)
  };

  const filterNames = (inputValue) => {
    console.log("Filter names", inputValue)
    const getDisplayDOB = (d) => {

      if (d.date_of_birth != null && d.date_of_death != null)
        return `${d.date_of_birth} - ${d.date_of_death}`

      else if (d.date_of_birth == null && d.date_of_death == null && d.flourishing_date == null)
        return ""

      else if (d.date_of_birth == null && d.date_of_death != null)
        return `D. ${d.date_of_death}`

      else if (d.date_of_birth == null && d.date_of_death == null)
        return `FL. ${d.flourishing_date}`

      else return ""
    }
    return (displayNames.map((d) => ({
      label: d.display_name + ` (${getDisplayDOB(d)})`,
      others: d.other_names, id: d.id
    }))).filter((i) => (i.others !== null &&
      i.others.toLowerCase().includes(inputValue.toLowerCase()) || (i.label.toLowerCase().includes(inputValue.toLowerCase())))
    );
  };

  // const _loadOptions = (
  //   inputValue,
  //   callback
  // ) => {
  //   console.log("inputValue", inputValue)
  //   setTimeout(() => {
  //     callback(filterNames(inputValue));
  //   }, 1000);
  // };
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
      debounce(() => resolve(filterNames(inputValue)), 500)()
    })
  }

  // const loadOptions = debounce(_loadOptions, 300);

  const handleInputChange = (newValue) => {
    // const newInput = newValue.replace(/\W/g, '');
    const newInput = newValue;
    setInputValue(newInput);
    return newInput;
  };

  return (
    <>
      {displayNames.length != 0 && <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onInputChange={handleInputChange}
        onChange={onSearchChange}
        getOptionValue={(option) => option.label}
      />}
      {/* <PeopleSearch isNetworkSearch={true} isNetworkFilter={false}/> */}
      {/* {searchData && <Network data={peopleData}/>} */}
      
    </>
  );
}
