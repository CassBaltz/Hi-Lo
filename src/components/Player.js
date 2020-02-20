import React from "react";
import { withStyles } from "@material-ui//styles";
import { connect } from "react-redux";

import PlayerField from "./PlayerField";

export const GAME_STATUSES = {
  TIED: "TIED",
  WINNING: "WINNING",
  LOSING: "LOSING",
};


export const Player = ({ classes, playerKey, }) => {
  return (
    <div className={classes.root}>
      <div className={classes.avatarContainer}>
        <div className={classes.head}></div>
        <div className={classes.body}></div>
        <div className={classes.nose}></div>
        <div className={classes.leftEar}></div>
        <div className={classes.rightEar}></div>
        <div className={classes.sunglasses}></div>
        <div className={classes.leftTemple}></div>
        <div className={classes.rightTemple}></div>
      </div>
      <div className={classes.playerInfo}>
        <PlayerField playerKey={playerKey} />
      </div>
    </div>
  );
};

export const styles = {
  root: {
    display: "flex",
    position: "relative",
    flexDirection: props => (props.rotateAvatar ? "column" : "column-reverse"),
    alignItems: "center"
  },
  avatarContainer: {
    position: "relative",
    width: "250px",
    height: "115px",
    borderRadius: "30px",
    transform: props => props.rotateAvatar && "rotate(180deg)",
    backgroundColor: props => props.isPlaying && "#fcc419",
    transition: "background-color 1s",
  },
  head: {
    width: "105px",
    height: "105px",
    borderRadius: "50%",
    backgroundColor: "#ffc9c9",
    position: "relative",
    zIndex: "1",
    margin: "auto"
  },
  body: {
    width: "200px",
    height: "75px",
    borderRadius: "45px",
    backgroundColor: "#a5d8ff",
    position: "relative",
    margin: "auto",
    top: "-85px"
  },
  nose: {
    width: "30px",
    height: "30px",
    background: "#ffc9c9",
    borderRadius: "50%",
    margin: "auto",
    position: "relative",
    top: "-93px"
  },
  leftEar: {
    width: "20px",
    height: "20px",
    background: "#ffc9c9",
    borderRadius: "50%",
    margin: "auto",
    position: "relative",
    left: "51px",
    top: "-162px"
  },
  rightEar: {
    width: "20px",
    height: "20px",
    background: "#ffc9c9",
    borderRadius: "50%",
    margin: "auto",
    position: "relative",
    right: "51px",
    top: "-182px"
  },
  sunglasses: {
    width: "123px",
    height: "6px",
    background: "#343a40",
    borderRadius: "5px",
    margin: "auto",
    position: "relative",
    top: "-157px",
    zIndex: "1"
  },
  rightTemple: {
    width: "4px",
    height: "50px",
    background: "#343a40",
    borderRadius: "5px",
    margin: "auto",
    position: "relative",
    top: "-260px",
    right: "51px",
    zIndex: "1",
  },
  leftTemple: {
    width: "4px",
    height: "50px",
    background: "#343a40",
    borderRadius: "5px",
    margin: "auto",
    position: "relative",
    top: "-210px",
    left: "51px",
    zIndex: "1",
  },
  playerInfo: {
    display: "flex",
    alignItems: "center",
    minHeight: "40px",
    position: "relative",
    top: props => props.rotateAvatar ? "unset" : "75px",
    bottom: props => props.rotateAvatar ? "75px" : "unset",
    right: props => props.rotateAvatar ? "unset" : "205px",
    left: props => props.rotateAvatar ? "205px" : "unset",
  },
};

const mapStateToProps = (state, ownProps) => ({
  isPlaying: state.game.turn.player === ownProps.playerKey,
});

export default connect(mapStateToProps)(withStyles(styles)(Player));