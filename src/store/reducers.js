import { ACTION_TYPE } from './actions';

const initialState = {
  index: 0,
};

export const getNextState = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SELECT_AUTHOR:
      return {
        ...state,
        index: state.index + action.index
      };
    default:
      return state;
  }
};
