import { colors, borderRadius } from './variables';

const listContainer = {
  listStyle: 'none',
  paddingLeft: 0,
};

const summaryItem = {
  padding: '10px 0',
  borderBottom: `1px solid ${colors.lightGrey}`,
};

const submitButton = {
  background: colors.lightBlue,
  border: `1px solid ${colors.midGrey}`,
  borderRadius,
  display: 'block',
  lineHeight: 1.15,
  padding: '10px',
  marginTop: '30px',
};

export {
  listContainer,
  summaryItem,
  submitButton,
};
