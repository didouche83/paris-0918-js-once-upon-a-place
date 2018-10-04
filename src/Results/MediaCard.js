import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from './Dialog';



const styles = {
  card: {
    //maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

class MediaCard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card id="carde" className={classes.card}>
        <div id="cardmedia">
          <CardActionArea id="cardactionarea">
            <div id="cardImage">
              <CardMedia
                className={classes.media}
                image="http://www.ralentirtravaux.com/images/troie.jpg"
                title={this.props.locationMovie.title}
              />
            </div>
            <CardContent id="CardContent">
              <Typography gutterBottom variant="headline" component="h2">
                {this.props.locationMovie.title}
              </Typography>
              <Typography component="p">
                 {this.props.locationMovie.locations}, {this.props.locationMovie.release_year}, 
              </Typography>
              <div id="button">
                <Dialog locationMovie={this.props.locationMovie}/>
              </div>
            </CardContent>
          </CardActionArea>
        </div>
        </Card>

      </div>
    );
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);