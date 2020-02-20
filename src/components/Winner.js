import React from 'react';
import Modal from 'react-modal';
import { withStyles } from '@material-ui//styles';
import { TIED } from "../redux/util/getWinnerFromState";

Modal.setAppElement('#root');

const getMessage = name => {
  if (name === TIED) {
    return "The game has ended in a tie!"
  }

  return `Congratulations ${name}!`
}

export const Winner = ({ classes, newGame, name, }) => {
  return (
    <Modal style={{ overlay: overlayStyle, content: contentStyle, }} isOpen={true}>
      <div className={classes.root}>
        <h1>{getMessage(name)}</h1>
        <h3>Click the button below to close this dialog and restart the game!</h3>
        <button
          className={classes.button}
          onClick={newGame}
        >
          NEW GAME
        </button>
      </div>
    </Modal>
  );
};

const overlayStyle = {
  zIndex: 53,
  textAlign: "center",
};

const contentStyle = {
  position: "unset",
  zIndex: 53,
  textAlign: "center",
  margin: "40px",
};

const styles = {
  root: {
    color: "#343a40",
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
    backgroundColor: "#e3fafc",
  },
};

export default withStyles(styles)(Winner);
