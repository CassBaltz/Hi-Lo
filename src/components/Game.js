import React from 'react';
import { withStyles } from '@material-ui/styles';

import Player from './Player';
import Table from './Table';
import { PLAYER_ONE, PLAYER_TWO, } from '../redux/constants';

export const Game = ({ classes, }) => {
  return (
    <div className={classes.root}>
      <Player playerKey={PLAYER_ONE} />
      <Table />
      <Player playerKey={PLAYER_TWO} rotateAvatar={true} />
    </div>
  );
};

const styles = {
  root: {
  },
};

export default withStyles(styles)(Game);