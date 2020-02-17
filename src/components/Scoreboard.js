import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import { PLAYER_ONE, PLAYER_TWO, SWITCH_PLAYER, } from "../redux/constants";

const DownArrow = ({ classes }) => (
  <svg
    className={classes.arrow}
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M7 10l5 5 5-5z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const UpArrow = ({ classes }) => (
  <svg
    className={classes.arrow}
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M7 14l5-5 5 5z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const GAME_STATUSES = {
  TIED: "TIED",
  WINNING: "WINNING",
  LOSING: "LOSING",
};

const Scoreboard = ({ classes, playerOne, playerTwo, }) => {
  return (
    <div className={classes.root}>
      <div className={`${classes.playerWrapper} ${classes.playerOne}`}>
        <p>{playerOne.name}</p>
        <p>{playerOne.score}</p>
      </div>
      <div className={classes.divider}>{playerOne.isPlaying ? <UpArrow classes={classes} /> : <DownArrow classes={classes} />}</div>
      <div className={`${classes.playerWrapper} ${classes.playerTwo}`}>
        <p>{playerTwo.name}</p>
        <p>{playerTwo.score}</p>
      </div>
    </div>
  )
};


const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    border: "2px solid #adb5bd",
    borderRadius: "3px",
    backgroundColor: "#FFF",
  },
  playerWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& p": {
      margin: 0,
    },
    "& p:last-child": {
      marginLeft: "20px",
    },
    padding: "10px",
  },
  divider: {
    display: "flex",
    justifyContent: "center",
  },
  arrow: {
    fill: "#adb5bd",
  },
  playerOne: {
    color: props => getStatusColor(props.playerOne),
  },
  playerTwo: {
    color: props => getStatusColor(props.playerTwo),
  }
};

const getStatusColor = player => {
  switch (player.gameStatus) {
    case GAME_STATUSES.TIED:
      return "#ffd43b";
    case GAME_STATUSES.LOSING:
      return "#e03131";
    case GAME_STATUSES.WINNING:
    default:
      return "#37b24d";
  }
};

const mapStateToProps = ({ game }) => {
  const playerOne = { ...game[PLAYER_ONE] };
  const playerTwo = { ...game[PLAYER_TWO] };
  playerOne.gameStatus = getGameStatus(game, PLAYER_ONE);
  playerOne.isPlaying = game.turn.player === PLAYER_ONE;
  playerTwo.gameStatus = getGameStatus(game, PLAYER_TWO);

  return {
    playerOne,
    playerTwo,
  };
};

export const getGameStatus = (game, player) => {
  const thisPlayerScore = game[player].score;
  const opponentScore = game[SWITCH_PLAYER[player]].score;

  if (thisPlayerScore < opponentScore) {
    return GAME_STATUSES.WINNING;
  }

  if (thisPlayerScore > opponentScore) {
    return GAME_STATUSES.LOSING;
  }

  return GAME_STATUSES.TIED;
}

export default connect(mapStateToProps)(withStyles(styles)(Scoreboard));