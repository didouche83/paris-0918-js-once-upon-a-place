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
    width: '50%',
  },
  affiche:{
    width: '60%',
  },
  button:{
    float: 'bottom',
  },
  trailer:{
      margin: '2px',
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
    flexBasis: '50%',
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
        <ExpansionPanelSummary className={classes.button} expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <Typography className={classes.heading}>
        {props.locationMovie.title}</Typography>
            <img className={classes.affiche} src="http://www.ralentirtravaux.com/images/troie.jpg" alt={props.locationMovie.title}/>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Scenes locations: {props.locationMovie.locations}</Typography>
            <Typography className={classes.secondaryHeading}> Shooting year: {props.locationMovie.release_year}</Typography>
          </div>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails className={classes.details}>
        
          <div>Dans la Grèce antique, l'enlèvement d'Hélène, reine de Sparte, par Paris, prince de Troie, est une insulte que le roi Ménélas ne peut supporter. L'honneur familial étant en jeu, Agamemnon, frère de Ménélas et puissant roi de Mycènes, réunit toutes les armées grecques afin de faire sortir Hélène de Troie. L'issue de la guerre de Troie dépendra notamment d'un homme, Achille. Arrogant, rebelle, et réputé invicible, celui-ci n'a d'attache pour rien ni personne si ce n'est sa propre gloire.</div>
         
          <div className={classes.trailer}>
            <iframe width="500" height="255" src="https://www.youtube.com/embed/IeZrKyyXYjY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              <br />
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