import React from 'react';

import Player from './Player';
import Table from './Table';
import { PLAYER_ONE, PLAYER_TWO, } from '../redux/constants';

export const Game = () => {
  return (
    <div>
      <Player playerKey={PLAYER_ONE} />
      <Table />
      <Player playerKey={PLAYER_TWO} rotateAvatar={true} />
    </div>
  );
};

export default Game;