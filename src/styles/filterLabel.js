import { colors, borderRadius } from './variables';

const base = {
  lineHeight: '60px',
  paddingLeft: '20px',
  paddingRight: '20px',
  border: `1px solid ${colors.lightGrey}`,
  borderRadius,
  display: 'flex',
  justifyContent: 'space-between',
  margin: '10px 0',
};

const labelField = {
  ...base,
  ':hover': {
    border: `1px solid ${colors.black}`,
  },
};

const labelFieldSelected = {
  ...base,
  border: `1px solid ${colors.blue}`,
};

export {
  labelField,
  labelFieldSelected,
};
