/* eslint-disable no-use-before-define */
import React from 'react';
import { useEffect, useState, useMemo } from "react";
import Container from "@mui/material/Container";
import AsyncSelect from 'react-select/async';
import AdvancedSearch from './AdvancedSearch';
import { API_URL } from '../../constants';


export default function BasicSearch({ setWorksData, setSearchData, displayTitles, setLoading }) {

  console.log("basic")
  const [inputValue, setInputValue] = useState("");


  const onSearchChange = async (
    event
  ) => {
    setLoading(true)
    const workRes = await fetch(`${API_URL}/search/works/${event.id}`);
    const workJson = await workRes.json();
    console.log("works json", workJson);
    setWorksData(workJson);
    setSearchData('works');
    setLoading(false)
  };

  const filterNames = (inputValue) => {
    return (displayTitles.map((d) => ({
      label: d.display_title,
      id: d.id
    }))).filter((i) => i.label.toLowerCase().startsWith(inputValue))
  }   

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
      {displayTitles.length != 0 && <AsyncSelect
        className="react-select-container"
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onInputChange={handleInputChange}
        // onChange={(event) => onSearchChange(event)}
        onChange={onSearchChange}
        getOptionValue={(option) => option.label}
      />}
    </>
  );
}
