import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import {
  listContainer as listContainerStyle,
  summaryItem as summaryItemStyle,
  submitButton as submitButtonStyle,
} from '../styles/summary';

const Summary = (props) => {
  const { options, total } = props;
  const chosenOptions = Object.keys(options).map(k =>
    <li key={shortid.generate()} style={summaryItemStyle}><span>{ options[k].label }</span></li>);
  return (
    <div>
      <h3>Summary</h3>
      <ul style={listContainerStyle}>
        { chosenOptions }
      </ul>
      <span>Total: <strong>£{ total }</strong></span>
      <button style={submitButtonStyle}>Buy Now</button>
    </div>
  );
};

const computerSpecPropTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
};

Summary.propTypes = {
  options: PropTypes.shape({
    cpu: PropTypes.shape(computerSpecPropTypes),
    graphics: PropTypes.shape(computerSpecPropTypes),
    memory: PropTypes.shape(computerSpecPropTypes),
    screen: PropTypes.shape(computerSpecPropTypes),
    storage: PropTypes.shape(computerSpecPropTypes),
  }).isRequired,
  total: PropTypes.number.isRequired,
};

export default Summary;
