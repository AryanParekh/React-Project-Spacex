import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function CardLayout(props){
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div className="col-12 col-md-6 col-xl-4 px-0 set">
            <div style={box}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Flight {props.flight_data.flight_number}
                        </Typography>
                        <Typography variant="h5" component="h2">
                        {props.flight_data.mission_name}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {bull}{props.flight_data.launch_year}
                        </Typography>
                        <Typography variant="body2" component="p">
                        <img src={props.flight_data.links.mission_patch_small} alt="" height="50px" width="50px"/>
                        <br />
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Link to={`/${props.flight_data.flight_number}`}>Learn More</Link>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}
const box={
    height:'300px',
    width:'150px'
}
