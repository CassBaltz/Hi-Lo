export const PASS_TURN = 'PASS_TURN';
export const passTurn = () => ({
  type: PASS_TURN,
});

export const GUESS = "GUESS";
export const POST_GUESS = "POST_GUESS";
export const guess = direction => dispatch => {
  dispatch({
    type: GUESS,
    payload: direction,
  });

  window.setTimeout(() => {
    dispatch({
      type: POST_GUESS,
    })
  }, 1500);
};

export const UPDATE_NAME = "UPDATE_NAME";
export const updateName = payload => ({
  type: UPDATE_NAME,
  payload,
});
