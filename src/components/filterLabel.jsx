import React from 'react';
import {
  labelField as labelFieldStyle,
  labelFieldSelected as labelFieldSelectedStyle,
} from '../styles/filterLabel';

const FilterLabel = (props) => {
  const { htmlFor, label, value, selected } = props;

  return (
    <label htmlFor={htmlFor} style={[labelFieldStyle, selected && labelFieldSelectedStyle]}>
      <span>{label}</span>
      <span>&pound;{value}</span>
    </label>
  );
};

FilterLabel.propTypes = {
  htmlFor: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.number.isRequired,
  selected: React.PropTypes.bool.isRequired,
};

export default FilterLabel;
