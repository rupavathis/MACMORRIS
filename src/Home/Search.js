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
      autoHighlight
      options={displayNames}
      renderInput={(params, i) => <TextField key={i} {...params} label="Search People" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const displayNames = [
  { label : "Róis inghean Uí Thuathail"},
  { label : "Gráinne inghean Uí Mháille"},
  { label : "Christopher Nugent"},
  { label : "Lodowick Bryskett"},
  { label : "Humphrey Gilbert"},
  { label : "John Derricke"},
  { label : "Fearghal Óg Mac an Bhaird"},
  { label : "Walter Raleigh"},
  { label : "Domhnall Mac Cárthaigh Mór"},
  { label : "Tadhg Dall Ó hUigínn"},
  { label : "Luke Wadding"},
  { label : "Richard Stanihurst"},
  { label : "Giolla Brighde Ó hEódhasa"},
  { label : "Margaret Ball"},
  { label : "Caitlin Dubh"},
  { label : "Edmund Spenser"},
  { label : "Aodh Ó Néill"},
  { label : "Pilib Ó Súilleabháin Béirre"},
  { label : "Pedro López de Soto"},
  { label : "Donnchadh O’Bhriain"},
  { label : "Thomas Butler"}]
  


// { label : "James fitz Maurice Fitzgerald" } ,
// { label : "Richard Delahide" } ,
// { label : "William Brereton" } ,
// { label : "Leonard Grey" } ,
// { label : "Margaret Butler" } ,
// { label : "Máire Óg inghean Mheic Chárthaigh" } ,
// { label : "Judith fitz Maurice Fitzgerald" } ,
// { label : "Jenet Delahide" } ,
// { label : "Seaán Ó Cearnaigh" } ,
// { label : "Domhnall Mac Murchadha Caomhánach" } ,
// { label : "Gearóid Caomhánach" } ,
// { label : "Toirdhealbhach Ó Tuathail" } ,
// { label : "Art Óg Ó Tuathail" } ,
// { label : "George Cromer" } ,
// { label : "Richard Nangle" } ,
// { label : "Tadhg Ó Broin" } ,
// { label : "Eóghan (mac Donnchaidh Mhaoil) Mac Craith" } ,
// { label : "Domhnall Mac an Bhaird" } ,
// { label : "Somhairle (mac Fearghail) Mac an Bhaird" } ,
// { label : "Donnchadh Mac Craith" } ,
// { label : "Eóghan Ó Dubhthaigh" } ,
// { label : "Aibhilín inghean Chathaoir" } ,
// { label : "Caitlín inghean Thaidhg" } ,
// { label : "Aimhín " } ,
// { label : "Conchobhar Mac Conghalaigh" } ,
// { label : "Donnchadh Óg Ó Conchobhair" } ,
// { label : "Uilleag de Burgh" }]

