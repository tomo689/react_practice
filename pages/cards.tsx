import React, {useEffect, useMemo, useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ManIcon from '@mui/icons-material/Man';
import jsonReader from './api/jsonHandler';
import BusinessIcon from '@mui/icons-material/Business';

type PropsOptional = {
  picked: string;
};

// JSONにデータを入れて、それで表示を切り分けるようにする
// TypographyはMap関数に変えよう

const MediaControlCard = (props: PropsOptional) => {
  const {picked} = props;
  if(props.picked === undefined){props.picked === 'a'};

  // Displayを変更する要素をuseStateでまとめる
  const [name, setName] = useState<string>('');
  const [segment, setSegment] = useState<string>('');
  const [strong, setStrong] = useState<string>('');
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    if(picked){
      const data = jsonReader();
      const pickedData = data[0]['company'][picked];
      setName(pickedData.name);
      setStrong(pickedData.strong);
      const seg = pickedData.segment
      setSegment(data[1]['segmentation'][seg].description);
    }
  }, [picked])

  useMemo(() => {
    const filePath = '/static/images/image' + picked.slice(-1) +'.jpg';
    setImage(filePath);
  }, [picked])
  

  return (
    <Card sx={{ display: 'flex', margin: '3ch', height:280, backgroundColor: "gray" }}>
      {picked ? 
        <>
            <CardMedia
              component="img"
              sx={{ width: 250 }}
              image={image}
              alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto', backgroundColor:'white', width:'100%', height:'100%' }}>
              <Typography component="div" variant="h5" sx={{ ml:'1ch', mt:'1ch', mb:"1ch", textAlign:'center'}}>
                {name}
              </Typography>
              <div style={{height:'20px'}}></div>
              <div style={{display:'flex'}}>
                <BusinessIcon/>
                <Typography component="div" variant="h6" sx={{ ml:'1ch', mb:"1ch"}}>
                  {strong}
                </Typography>
              </div>
              <div style={{height:'20px'}}></div>
              <div style={{display:'flex'}}>
                <ManIcon/>
                <Typography component="div" variant="h6" sx={{ ml:'1ch'}} >
                  {segment}
                </Typography>
              </div>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <IconButton aria-label="play/pause">
              </IconButton>
            </Box>
          </Box>
        </>
      : 
        <div style={{textAlign:'center',backgroundColor: "gray"}}>
        </div>
      }
    </Card>
  );
}

export default MediaControlCard;