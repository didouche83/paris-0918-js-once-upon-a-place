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
    marginBottom:'1vw',
  },
  year:{
    //border:'1px solid red',
    marginBottom:'1vw',
  },
  text: {
    marginRight: '3vw',
    maxWidth: '100%',
  },
  affiche:{
    width: '60%',
    //border: '2px solid blue',
  },
  button:{
    float: 'bottom',
  },
  trailer:{
      alignItems: 'center',
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
  },
  synopsisReduced:{
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
    float:'right',

  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

//----------------------------------------------------------------------------------------------------------------------------------------
//limite le nombre de mots affichés dans la card initiale
const reduceLengthTextCard = synopsis =>{
  if (synopsis.length > 50){
    return(synopsis.substr(0, 50) + '...')
  }
}

//limite le nombre de mots affichés dans la card initiale
//-----------------------------------------------------------------------------------------------------------------------------------------

/*cache le début du synopsis de la card au clic pour afficher l'expander
const showReducedSynopsis = event =>{
  if(this.synopsisReduced.contains({reducedTextSynopsis})){
      return(this.synopsisReduced.remove({reducedTextSynopsis}));
  }
  else{
      return(this.synopsisReduced.add({reducedTextSynopsis}));
  }
};
//cache le début du synopsis de la card au clic pour afficher l'expander

/*trifouillage pour cacher texte
constructor(props) {
  super(props),
  this.state = {
    showReducedSynopsis: true,
  }
}

onClick = () => {
  this.setState ({showReducedSynopsis: !this.state.showReducedSynopsis})
}

const showingSynopsis = this.state.showReducedSynopsis ? 'ok' : 'hidden'
trifouillage pour cacher texte

<div onClick="showingSynopsis(this,'synopsisReduced')" style="display:none;" className={classes.synopsisReduced}> Synopsis: {reducedTextSynopsis}</div>
const showingSynopsis = (synopsisReduced, synopsisReduced){
  const divADiminuer = (document.getElementById(id));
  if(divADiminuer.style.display=="none") { // Si le div est masqué...
        divADiminuer.style.display = "block"; // ... on l'affiche...
      } else { // S'il est visible...
        div.style.display = "none"; // ... on le masque...
      }
}*/
//--------------------------------------------------------------------------------------------------------------------------------------

const hideSynopsis = synopsisReduced => {
  if (document.getElementById(synopsisReduced).style.display === 'block'){
    document.getElementById(synopsisReduced).style.display = 'none';
  } 
  else {
    document.getElementById(synopsisReduced).style.display = 'block';
  }
}
//----------------------------------------------------------------------------------------------------------------------------------------

const DetailedExpansionPanel = props => {
  const { classes } = props;
  return (
    
    <div className={classes.root} onclick={hideSynopsis}>
      <ExpansionPanel>
        <ExpansionPanelSummary className={classes.button} expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <div className={classes.heading}>
              <h2>{props.movie.title}</h2></div>
              <div className={classes.director}>Director: {props.movie.director}</div>
              <div className={classes.year}>Shooting year: {props.movie.release_year}</div>
            
            <img className={classes.affiche} src="http://www.ralentirtravaux.com/images/troie.jpg" alt={props.movie.title}/>
          </div>
          <div className={classes.column}>
            <div className={classes.locations}><h4>Scenes locations: </h4>{props.movie.locations.map((location)=>{return location + ', ' + '<br>'})}</div>
            <div ></div>
            <div > </div>
            {/* <div /*onClick={showingSynopsis} className={classes.synopsisReduced}> <h4>Synopsis: </h4>{props.movie.shortSynopsis}</div> */}
    
          </div>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.expansion}>
        
            <div className={classes.text}><h4>Synopsis: </h4> {props.movie.synopsis} </div> <br />
          
            <div className={classes.trailer}>
              <iframe width="500" height="305" src="https://www.youtube.com/embed/IeZrKyyXYjY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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