import React from 'react';
import Modal from 'react-modal';
import { withStyles } from '@material-ui//styles';

Modal.setAppElement('#root');

export const Instructions = ({ classes, setShowInstructions }) => {
  return (
    <Modal style={{ overlay: { zIndex: "53", }, }} isOpen={true}>
      <div className={classes.root}>
        <div className={classes.closeButtonWrapper}>
          <button
            className={classes.button}
            onClick={() => setShowInstructions(false)}
          >
            CLOSE
        </button>
        </div>
        <div className={classes.content}>
          <h1>Hi-Lo Game</h1>
          <h4>
            Welcome to the Hi-Lo game where your goal
            is to predict whether the value of the card
            on the top of the deck will be higher or lower
            than the face up card.
          </h4>

          <h4>
            You can predict during your turn whether the card at the top
            of the deck is higher or lower by clicking the 'HIGHER' and
            'LOWER' buttons.
          </h4>

          <h4>
            If your guess is correct then you will see it indicated by the
            color of the button you pressed (green is correct and red is incorrect).
          </h4>

          <h4>
            If your guess is correct then your turn continues. If it is incorrect
            then you are given as many points as there are cards in the discard
            pile. The discard pile will then reset.
          </h4>

          <h4><em>The goal is to have fewer points at the end of the game than your opponent.</em></h4>

          <h4>
            After three correct guesses, you will then have the option to pass the
            turn to your opponent by pressing the active 'PASS TURN' button.
          </h4>

          <h4>
            This pattern will continue until the game is won.
          </h4>

          <h2>Notes</h2>
          <ul>
            <li>Turns are indicated by the arrow on the scoreboard and the light above the player avatar.</li>
            <li>You can edit your player's name by clicking on it.</li>
            <li>Clicking the 'NEW GAME' button will shuffle the deck and start a new game.</li>
            <li>Colors on the scoreboard indicate which player is winning.</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};

const styles = {
  root: {
    color: "#343a40",
  },
  closeButtonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
  },
  content: {
    padding: "0 65px 65px 65px",
    "& h1": {
      textAlign: "center",
    }
  },
  button: {
    boxShadow: "unset",
    backgroundColor: "#ffe8cc",
    border: "none",
    borderRadius: "3px",
    "&:focus": {
      outline: "none",
    },
    padding: "10px",
    cursor: "pointer",
  },
};

export default withStyles(styles)(Instructions);
