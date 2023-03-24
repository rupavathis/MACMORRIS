import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './home.scss';

export default function Search() {
  return (
    <Autocomplete
      id="combo-box-demo"
      open={false}
      disablePortal
      // autoHighlight
      options={displayNames}
      renderInput={(params) => <TextField {...params} label="Search People" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const displayNames = [
{ label : "James fitz Maurice Fitzgerald" } ,
{ label : "Richard Delahide" } ,
{ label : "William Brereton" } ,
{ label : "Leonard Grey" } ,
{ label : "Margaret Butler" } ,
{ label : "Máire Óg inghean Mheic Chárthaigh" } ,
{ label : "Judith fitz Maurice Fitzgerald" } ,
{ label : "Jenet Delahide" } ,
{ label : "Seaán Ó Cearnaigh" } ,
{ label : "Domhnall Mac Murchadha Caomhánach" } ,
{ label : "Gearóid Caomhánach" } ,
{ label : "Toirdhealbhach Ó Tuathail" } ,
{ label : "Art Óg Ó Tuathail" } ,
{ label : "George Cromer" } ,
{ label : "Richard Nangle" } ,
{ label : "Tadhg Ó Broin" } ,
{ label : "Eóghan (mac Donnchaidh Mhaoil) Mac Craith" } ,
{ label : "Domhnall Mac an Bhaird" } ,
{ label : "Somhairle (mac Fearghail) Mac an Bhaird" } ,
{ label : "Donnchadh Mac Craith" } ,
{ label : "Eóghan Ó Dubhthaigh" } ,
{ label : "Aibhilín inghean Chathaoir" } ,
{ label : "Caitlín inghean Thaidhg" } ,
{ label : "Aimhín " } ,
{ label : "Conchobhar Mac Conghalaigh" } ,
{ label : "Donnchadh Óg Ó Conchobhair" } ,
{ label : "Uilleag de Burgh" }]

