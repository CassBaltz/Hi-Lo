import React from "react";
import { withStyles } from "@material-ui//styles";
import { connect } from "react-redux";
import { guess, passTurn } from '../redux/actions/game';
import { LOWER, HIGHER, CORRECT_GUESSES_TIL_PASS } from '../redux/constants';

import DiscardPile from "./DiscardPile";

const CurrentGuess = ({ classes, card, }) => {
  if (card) {
    return (
      <img
        className={classes.currentGuessCard}
        src={card.image}
        alt={card.code}
      />
    );
  }

  return (
    <div className={classes.currentGuessPlaceholder}></div>
  );
}

export const Table = ({
  classes,
  dispatch,
  cardsShowing,
  correctGuesses,
  cardsRemainingInDeck,
  currentGuess,
  resettingDeck,
}) => {
  const canPassTurn = correctGuesses >= CORRECT_GUESSES_TIL_PASS;
  const { guessedCard } = currentGuess;
  // disable all actions when we are in the
  // 'guessing' state
  const enableButtons = !guessedCard;

  return (
    <div className={classes.root}>
      <button
        className={classes.higherButton}
        onClick={() => enableButtons && dispatch(guess(HIGHER))}
      >
        HIGHER
      </button>
      <div className={classes.inlineItems}>
        <div className={classes.cardDeck}>{!resettingDeck && cardsRemainingInDeck}</div>
        <CurrentGuess card={guessedCard} classes={classes} />
        <DiscardPile cardsShowing={cardsShowing} />
        <button
          className={classes.passTurnButton}
          disabled={!canPassTurn}
          onClick={() => enableButtons && canPassTurn && dispatch(passTurn())}
        >
          PASS TURN
        </button>
      </div>
      <button
        className={classes.lowerButton}
        onClick={() => enableButtons && dispatch(guess(LOWER))}
      >
        LOWER
      </button>
    </div>
  );
};

const colorButtonFromProps = (props, buttonDirection) => {
  const { isCorrect, direction } = props.currentGuess;
  if (direction === buttonDirection) {
    return isCorrect ? "#63e6be" : "#ffa8a8";
  }

  return sharedButtonStyles.backgroundColor;
};

const sharedButtonStyles = {
  display: "flex",
  width: "70px",
  padding: "10px",
  backgroundColor: "#c5f6fa",
  color: "#343a40",
  position: "absolute",
  boxShadow: "unset",
  border: "unset",
  justifyContent: "center",
  "&:focus": {
    outline: "none"
  },
  "&:hover": {
    backgroundColor: "#e3fafc"
  },
  cursor: "pointer",
  transition: "background-color .5s",
  borderRadius: "4px",
};

const currentGuessShared = {
  width: "70px",
  height: "98px",
  position: "relative",
  left: "60px",
};

const styles = {
  root: {
    backgroundColor: "#fff4e6",
    border: "8px solid #fd7e14",
    width: "500px",
    height: "325px",
    borderRadius: "20px",
    margin: "10px auto",
    position: "relative",
    display: "flex",
    alignItems: "center"
  },
  inlineItems: {
    position: "relative",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  cardDeck: {
    width: "70px",
    height: "98px",
    backgroundColor: props => props.resettingDeck ? "#f1f3f5" : "#ff6b6b",
    borderRadius: "4px",
    border: "2px solid #FFF",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    fontWeight: "700",
    fontSize: "30px",
    position: "relative",
    left: "20px"
  },
  higherButton: {
    ...sharedButtonStyles,
    left: "20px",
    top: "20px",
    backgroundColor: props => colorButtonFromProps(props, HIGHER),
    "&:hover": {
      backgroundColor: props => colorButtonFromProps(props, HIGHER),
    },
  },
  lowerButton: {
    ...sharedButtonStyles,
    left: "20px",
    bottom: "20px",
    backgroundColor: props => colorButtonFromProps(props, LOWER),
    "&:hover": {
      backgroundColor: props => colorButtonFromProps(props, LOWER),
    },
  },
  passTurnButton: {
    ...sharedButtonStyles,
    "&:disabled": {
      backgroundColor: "#e3fafc",
      opacity: ".5 !important",
      cursor: "not-allowed",
    },
    position: "relative",
    left: "120px",
  },
  currentGuessCard: {
    ...currentGuessShared,
  },
  currentGuessPlaceholder: {
    ...currentGuessShared,
    background: "transparent",
    boxSizing: "border-box",
    border: "1px solid #ced4da",
    borderRadius: "3px",
  },
};

export const mapStateToProps = ({ game, deck }) => ({
  resettingDeck: deck.resettingDeck,
  cardsShowing: deck.cardsShowing,
  cardsRemainingInDeck: deck.cards.length,
  correctGuesses: game.turn.correctGuesses,
  currentGuess: game.currentGuess,

});

export default connect(mapStateToProps, null)(
  withStyles(styles)(Table)
);


