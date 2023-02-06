import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ManIcon from '@mui/icons-material/Man';

type PropsOptional = {
  picked: string;
};



const MediaControlCard = (props: PropsOptional) => {
  const theme = useTheme();
  if(props.picked === undefined){props.picked === 'a'};
  const onStage = props.picked;
  console.log(props.picked)
  return (
    <Card sx={{ display: 'flex', margin: '3ch', height:200 }}>
      {onStage ? 
        // 初期値はundefinedでうまく切り替えできている様に見えるけど、実際はpickedの有無で欲しい分岐になっていない・
        <CardMedia
          component="img"
          sx={{ width: 250 }}
          image="/static/images/images.jpeg"
          alt="Live from space album cover"
        />
      : 
        <ManIcon/>
      }
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="play/pause">
          </IconButton>

        </Box>
      </Box>
    </Card>
  );
}

export default MediaControlCard;