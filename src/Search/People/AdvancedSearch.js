import * as React from "react";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// import Button from 'react-bootstrap/Button';
import Button from '@mui/material/Button';
import '../search.scss'
import { API_URL } from '../../constants';


import Spinner from 'react-bootstrap/Spinner';

export default function AdvancedSearch({ setSearchData, setPeopleData, setLoading }) {

  const [genders, setGenders] = useState([]);
  const [rDesignations, setRDesignations] = useState([]);
  const [rOrders, setROrders] = useState([]);
  const [rSubTypes, setRSubTypes] = useState([]);
  const [roles, setRoles] = useState([]);
  const [roleAttribs, setRoleAttribs] = useState([]);
  const [search, setSearch] = useState(false);
  const [selectedGender, setSelectedGender] = useState();
  const [selectedRDesignations, setsSelectedRDesignations] = useState([]);
  const [selectedROrder, setSelectedROrder] = useState();
  const [selectedAttribs, setSelectedAttribs] = useState([]);
  const [selectedRSubtype, setSelectedRSubtype] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);


  const handleSearch = async () => {
    console.log('handle search aync')

    setSearch(true)
    setLoading(true)
    let url = `${API_URL}/advancedSearch/people?`;
    if (selectedGender != null) url += `gender=${selectedGender}`
    if (!(selectedRSubtype && selectedRSubtype.length === 0)) url += `&rSubtypes=${selectedRSubtype}`
    if (selectedROrder != null) url += `&rOrder=${selectedROrder}`
    if (!(selectedAttribs && selectedAttribs.length === 0)) url += `&attribs=${selectedAttribs}`

    console.log({ url })
    const peopleRes = await fetch(url);
    const peopleJson = await peopleRes.json();

    // convert ids to names
    // const peopleWithAttribNames = peopleJson.map(person => {
    //   const attribNames = person.attribs.map(attrib => {
    //     const nameObj = roleAttribs.find(obj => obj.id === attrib.id);
    //     return nameObj ? nameObj.name : null;
    //   }
    //   )
    //   return { ...person, attribNames };
    // });

    // const peopleWithGender = peopleWithAttribNames.map(g => {
    //   const genderId = genders.find(gender => gender.id === g.gender)
    //   const genderNames = genderId ? genderId.name : ""
    //   return { ...g, genderNames }
    // }
    // )

    setPeopleData(peopleJson);
    setSearchData('people');
    setLoading(false)
    console.log({ peopleJson })
  };


  const fetchData = async () => {
    const res = await fetch(`${API_URL}/genders`);
    const resJson = await res.json();
    console.log("I'm in fetchGenders");
    setGenders(resJson);

    const rDesignation = await fetch(`${API_URL}/religious_designations`);
    const rDesignationJson = await rDesignation.json();
    setRDesignations(rDesignationJson);

    const rOrders = await fetch(`${API_URL}/religious_orders`);
    const rOrdersJson = await rOrders.json();
    setROrders(rOrdersJson);

    // const rSubTypes = await fetch("/religious_subtypes");
    // const rSubTypesJson = await rSubTypes.json();
    // setRSubTypes(rSubTypesJson);

    const roles = await fetch(`${API_URL}/roles`);
    const rolesJson = await roles.json();
    setRoles(rolesJson);
  };

  const onRoleChange = async (e, v) => {
    const attribsRes = await fetch(`${API_URL}/attribs`);
    const attribsJson = await attribsRes.json();
    if (v != null) {
      const attribs = v.map(item => attribsJson.filter(a => a.role_id === item.id)).reduce((a, c) => a.concat(c), [])
      setRoleAttribs([...attribs]);
    }
    else setRoleAttribs([]);
  }

  const onChangeRDesignation = async (v) => {
    console.log("RDesign", v)
    const rSubTypes = await fetch(`${API_URL}/religious_subtypes`);
    const rSubTypesJson = await rSubTypes.json();
    const rSubtypes = rSubTypesJson.filter((r) => r.religious_designation_id === v)
    console.log({ rSubtypes })
    setRSubTypes(rSubtypes);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>

      {
        [
          {
            options: genders,
            fun: setSelectedGender,
            label: "Gender"
          },
          {
            options: rOrders,
            fun: setSelectedROrder,
            label: "Religious Order"
          },
          {
            options: rDesignations,
            fun: onChangeRDesignation,
            label: "Religious Designation"
          }
        ].map(item =>
          <Autocomplete
            filterSelectedOptions
            options={item.options}
            id="auto-complete"
            autoComplete
            getOptionLabel={(option) => option.name || ""}
            includeInputInList
            renderInput={(params) => (
              <TextField {...params} label={item.label} variant="standard" />
            )}
            onChange={(event, value) => {
              if (value === null) {
                item.fun()
              }

              else item.fun(value.id)
            }}
          />)
      }

      {rSubTypes && <Autocomplete
        id="auto-complete"
        multiple
        options={rSubTypes}
        noOptionsText={"Select Religious Designations to filter Sub types"}
        getOptionLabel={(option) => option.name || ""}
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField
            {...params}
            label="Religious Subtype"
            variant="standard"
          />
        )}
        onChange={(event, value) => setSelectedRSubtype(value.map(t => t.id))}
      />}

      <Autocomplete
        id="auto-complete"
        multiple
        options={roles}
        getOptionLabel={(option) => option.name || ""}
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="Roles" variant="standard" />
        )}
        onChange={(event, value) => onRoleChange(event, value)}
      />

      {roleAttribs && <Autocomplete
        id="auto-complete"
        multiple
        options={roleAttribs}
        noOptionsText={"Select Roles to filter Attributes"}
        getOptionLabel={(option) => option.name || ""}
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="Attributes" variant="standard" />
        )}
        onChange={(event, value) => setSelectedAttribs(value.map(t => t.id))}
      />}

      {<Button
        // sx={{border: "1px solid orange"}} 
        variant="outlined" onClick={handleSearch}>Search</Button>}
      {/* {!loading && <Button 
        onClick={handleSearch} >
        Search
      </Button>}
      {loading && <Button variant="primary"
        disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>} */}
    </>
  );
}
