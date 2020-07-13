import { INCREMENT_INDEX } from '../constants';

const initialIndex = 0;

const test = (state = initialIndex, { type, index }) => {
  switch (type) {
    case INCREMENT_INDEX:
      return state + index;
    default:
      return state;
  }
};

export default test;
