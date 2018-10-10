import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
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
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

function DetailedExpansionPanel(props) {

    /* CONTENU DETAILLE

    <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {this.props.locationMovie.title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {this.props.locationMovie.locations},  {this.props.locationMovie.release_year}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>


// CONTENU DE BASE

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
         Scenes locations: {this.props.locationMovie.locations}
      </Typography>
      <Typography component="p">
          -
      </Typography>
      <Typography component="p">
         Shooting year: {this.props.locationMovie.release_year}
      </Typography>
      <div id="button">
        <Dialog locationMovie={this.props.locationMovie}/>
      </div>
    </CardContent>
  </CardActionArea>
</div>
</Card> */






  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <Typography className={classes.heading}>
        {props.locationMovie.title}</Typography>
            <img src="http://www.ralentirtravaux.com/images/troie.jpg" alt="affiche"/>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Select trip destination</Typography>
          </div>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column} />
          <div className={classes.column}>
            <Chip label="Barbados" className={classes.chip} onDelete={() => {}} />
          </div>
          <div className={classNames(classes.column, classes.helper)}>
            <Typography variant="caption">
              Select your destination of choice
              <br />
              <a href="#sub-labels-and-columns" className={classes.link}>
                Learn more
              </a>
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailedExpansionPanel);