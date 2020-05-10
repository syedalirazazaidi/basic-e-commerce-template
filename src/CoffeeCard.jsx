import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import { CardHeader } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const CoffeeCard = (props) => {

  console.log("props",props)
  const {avatarUrl,title,subtitle,description ,imageUrl}=props
  return (
    <Card>
        <CardHeader
        avatar={
          <Avatar src={avatarUrl}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia style={{height:"300px"}}
        image={imageUrl}
      />
      <CardContent>
       
       
       
        <Typography variant="body2" component="p">
         {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small">Offer</Button>
      </CardActions>
    </Card>
  );
};

export default CoffeeCard;
