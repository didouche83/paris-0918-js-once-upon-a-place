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
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

class MediaCard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://i.pinimg.com/236x/90/c0/f4/90c0f44112136cf542f8f11da25e3331.jpg"
              title={this.props.locationMovie.title}
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {this.props.locationMovie.title}
              </Typography>
              <Typography component="p">
                 {this.props.locationMovie.locations}, {this.props.locationMovie.release_year}, 
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Dialog locationMovie={this.props.locationMovie}/>
          </CardActions>
        </Card>

      </div>
    );
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);