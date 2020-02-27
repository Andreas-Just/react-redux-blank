export const ACTION_TYPE = {
  SELECT_AUTHOR: 'SELECT_AUTHOR',
};

export const incrementIndex = (index) => ({
  type: ACTION_TYPE.SELECT_AUTHOR,
  index
});
