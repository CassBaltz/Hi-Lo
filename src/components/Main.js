import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import { connect } from "react-redux";

import Game from './Game';
import Instructions from './Instructions';
import Scoreboard from "./Scoreboard";
import Winner from "./Winner";

import { startNewGame } from "../redux/actions/deck";
import getWinnerFromState from "../redux/util/getWinnerFromState";

export const Main = ({ dispatch, classes, deckId, winner, }) => {
  const [showInstructions, setShowInstructions] = useState(false);
  const newGame = () => {
    dispatch(startNewGame(deckId));
  };

  return (
    <React.Fragment>
      <div className={classes.header}>
        <button className={classes.instructions} onClick={() => setShowInstructions(true)}>INSTRUCTIONS</button>
        <button className={classes.newGame} onClick={newGame}>NEW GAME</button>
        <Scoreboard />
      </div>
      {showInstructions && <Instructions setShowInstructions={setShowInstructions} />}
      {winner && <Winner newGame={newGame} name={winner} />}
      <Game />
    </React.Fragment>
  );
};

const sharedButtonStyles = {
  boxShadow: "unset",
  border: "none",
  borderRadius: "3px",
  "&:focus": {
    outline: "none",
  },
  padding: "10px",
  cursor: "pointer",
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
  },
  instructions: {
    ...sharedButtonStyles,
    backgroundColor: "#ffe8cc",
  },
  newGame: {
    ...sharedButtonStyles,
    backgroundColor: "#e3fafc",
  },
};

const mapStateToProps = state => ({
  deckId: state.deck.deckId,
  winner: !state.deck.resettingDeck ? getWinnerFromState(state) : null,
});

export default connect(mapStateToProps)(withStyles(styles)(Main));