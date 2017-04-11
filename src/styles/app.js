import { colors, borderRadius, mobileToDesktop } from './variables';

const header = {
  textAlign: 'center',
};

const choicesContainer = {
  width: '50%',
  border: `1px solid ${colors.lightGrey}`,
  borderRadius,
  padding: '30px',
};

const contentContainer = {
  margin: '50px 10px',
  display: 'flex',
  justifyContent: 'space-between',

  [mobileToDesktop]: {
    flexDirection: 'column',
    margin: 0,
  },
};

const summaryContainer = {
  border: `1px solid ${colors.lightGrey}`,
  borderRadius,
  padding: '20px',
  margin: '0 auto',
  alignSelf: 'center',

  [mobileToDesktop]: {
    alignSelf: 'stretch',
    margin: 0,
  },
};

export {
  header,
  choicesContainer,
  contentContainer,
  summaryContainer,
};
