import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '98%',
    //border: '1px solid red',
    marginBottom: '15px',
    marginTop: '15px',
    marginLeft: '1%',
    marginRight: '1%',
    [theme.breakpoints.down('sm')]: {
    },
  },
  locations: {
    //border:'1px solid blue',
    marginBottom: '1vw',
  },
  year: {
    //border:'1px solid red',
    marginBottom: '1vw',
  },
  text: {
    marginRight: '3vw',
    maxWidth: '100%',
  },
  affiche: {
    width: '60%',
    //border: '2px solid blue',
  },
  button: {
    float: 'bottom',
  },
  trailer: {
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  synopsisReduced: {
    //border:'1px solid yellow',
  },
  h2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '50%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  expansion: {
    float: 'right',

  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});


const DetailedExpansionPanel = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary className={classes.button} expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <div className={classes.heading}>
              <h2>{props.movie.title}</h2>
            </div>
            <div className={classes.director}>Director: {props.movie.director}</div>
            <div className={classes.year}>Shooting year: {props.movie.release_year}</div>
            <img className={classes.affiche} src={props.movie.image} alt={props.movie.title} />
          </div>
          <div className={classes.column}>
            <div className={classes.locations}><h4>Scenes locations: </h4>{props.movie.locations.map((location) => { return location + ', ' })}</div>
          </div>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails className={classes.details}>

          <div className={classes.expansion}>
            <div className={classes.text}><h4>Synopsis: </h4> {props.movie.synopsis} </div> <br />
            <div className={classes.trailer}>
              <iframe title={props.movie.title} width="500" height="305" src="https://www.youtube.com/embed/IeZrKyyXYjY" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>

        
              <br />
            </div>
          </div>
        </ExpansionPanelDetails>
        <Divider />
      </ExpansionPanel>
    </div>
  );
}

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailedExpansionPanel);