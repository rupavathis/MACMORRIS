import * as React from "react";
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Container from "@mui/material/Container";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';


export default function AdvancedSearch({ setSearchData, setWorksData, setLoading }) {

  const [workFormats, setWorkFormats] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [workClassifications, setWorkClassifications] = useState([]);
  const [dateRange, setDateRange] = useState([
    {
      name: "1600 - 1610",
      id: 1
    },
    {
      name: "1610 - 1620",
      id: 1
    },
    {
      name: "1620 - 1630",
      id: 1
    },
    {
      name: "1630 - 1640",
      id: 1
    },
  ]);
  const [places, setPlaces] = useState([]);
  const [displayTitles, setDisplayTitles] = useState([]);
  const [peopleData, setPeopleData] = useState([]);
  const [search, setSearch] = useState(false);

  const [selectedWorkFormats, setSelectedWorkFormats] = useState();
  const [selectedLanguages, setSelectedLanguages] = useState();
  const [selectedWorkClassifications, setSelectedWorkClassifications] = useState();
  const [selectedPlaces, setSelectedPlaces] = useState();
  const [selectBardic, setSelectedBardic] = useState(false);

  const handleSearch = async () => {
    setLoading(true)
    setSearch(true);
    let url = 'advancedSearch/works?';
    if (selectedWorkFormats != null) url += `&wFormat=${selectedWorkFormats}`
    if (selectedLanguages != null) url += `&language=${selectedLanguages}`
    if (selectedWorkClassifications != null) url += `&wClassification=${selectedWorkClassifications}`
    if (selectedPlaces != null) url += `&place=${selectedPlaces}`
    if (selectBardic === true) url += `&bardic=${selectBardic}`

    console.log({ url })
    const workRes = await fetch(url);
    const worksJson = await workRes.json();
    setWorksData(worksJson);
    setSearchData('works');
    setLoading(false)
  };


  const fetchData = async () => {
    const workFormatRes = await fetch("/work_formats");
    const workFormatJson = await workFormatRes.json();
    setWorkFormats(workFormatJson);

    const languages = await fetch("/languages");
    const languagesJson = await languages.json();
    setLanguages(languagesJson)

    const workClassificationsRes = await fetch("/work_classifications");
    const workClassificationsJson = await workClassificationsRes.json();
    setWorkClassifications(workClassificationsJson);

    const placesRes = await fetch("/places");
    const placesJson = await placesRes.json();
    setPlaces(placesJson);

  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {
        [
          {
            id: 1,
            options: workFormats,
            label: "Work Formats",
            fun: setSelectedWorkFormats
          },
          {
            id: 2,
            label: "Bardic Poem",
            fun: setSelectedBardic
          },
          {
            id: 3,
            options: languages,
            label: "Language",
            fun: setSelectedLanguages
          },
          {
            id: 4,
            options: workClassifications,
            label: "Work Classification",
            fun: setSelectedWorkClassifications
          },
          {
            id: 5,
            options: places,
            label: "Place",
            fun: setSelectedPlaces
          },
          {
            id: 6,
            options: dateRange,
            label: "Date Range",
            fun: setDateRange
          }
        ].map(item =>
          <>
            {item.id !== 2 && <Autocomplete
              id="auto-complete"
              options={item.options}
              getOptionLabel={(option) => option.name || ""}
              autoComplete
              includeInputInList
              renderInput={(params) => (
                <TextField {...params} label={item.label} variant="standard" />
              )}
              onChange={(event, value) => 
                {
                  if(value === null) {
                    item.fun()}

                  else item.fun(value.id)
                }}
            />}
            {item.id === 2 && <FormGroup className="FormBardic" sx={{ paddingTop: "10px", color: "rgb(0 0 1 / 62%)" }}>
              <FormControlLabel control={<Checkbox checked={selectBardic}
                onChange={(event) => item.fun(!selectBardic)}
                inputProps={{ 'aria-label': 'controlled' }}
              />}
                label="Bardic poem" />
            </FormGroup>}
          </>
        )
      }

      {/* <div className="DateRange">
            <div className="DateRangeLabel">Date Range</div>
            <TextField
              id="standard-search"
              label="From"
              type="search"
              variant="standard"
              size="small"
            />
            <div className="DateRangeHyphen">-</div> <TextField
              id="standard-search"
              label="To"
              type="search"
              variant="standard"
              size="small"
            />
          </div>  */}


      <Button variant="outlined" onClick={handleSearch}>Search</Button>
    </>
  );
}
