import React, { useState, useRef } from 'react';
import { withStyles } from '@material-ui/styles';
import { connect } from "react-redux";

import { updateName } from "../redux/actions/game";

const ENTER_KEY = 13;

const EditIcon = ({ classes }) => (
  <svg
    className={classes.editIcon}
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

export const PlayerField = ({ dispatch, classes, playerKey, name, }) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  const handleBlur = e => {
    if (!e.target.value) {
      return setIsEditing(true);
    }

    setIsEditing(false);
    dispatch(updateName({ key: playerKey, value: e.target.value }));
  };

  const handleKeyPress = e => {
    if (e.which === ENTER_KEY && e.target.value) {
      setIsEditing(false);
      dispatch(updateName({ key: playerKey, value: e.target.value }));
    }
  };

  const startEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef && inputRef.current && inputRef.current.focus();
    });
  };

  if (isEditing) {
    return (
      <input
        ref={inputRef}
        className={classes.editNameField}
        defaultValue={name}
        type="text"
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
      />
    )
  }

  return <em className={classes.staticName} onClick={startEditing}>{name}<span><EditIcon classes={classes} /></span></em>
};

const styles = {
  editNameField: {
    padding: "5px",
  },
  staticName: {
    color: "#ae3ec9",
    fontSize: "24px",
    fontWeight: "700",
    cursor: "pointer",
  },
  editIcon: {
    fill: "#e599f7",
    height: "14px",
    marginLeft: "10px",
  },
};

export const mapStateToProps = (state, ownProps) => ({
  name: state.game[ownProps.playerKey].name,
});

export default connect(mapStateToProps)(withStyles(styles)(PlayerField));