import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import TabInfo from './Tab';

export default function InfoContainer({info, countSites, sites, tabClose, setTabClose}) {

  console.log("image", image);


  function onLearnMore(){
    window.open('http://localhost:3000', '_blank', 'noopener,noreferrer');
  };

  return (
   <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`../../images/map/places/${image}.tiff`}
        title="green iguana"
      />
      <CardContent>       
        <TabInfo info={info} countSites={countSites} sites={sites} />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => {return setTabClose(false)}}>Close</Button>
        <Button size="small" onClick={() => onLearnMore()}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
