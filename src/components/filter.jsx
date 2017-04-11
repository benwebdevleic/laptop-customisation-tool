import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import shortid from 'shortid';

import FilterLabel from './filterLabel';

// styles
import radioFieldStyle from '../styles/filter';

const FilterLabelComponent = Radium(FilterLabel);

export default class Filter extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = (event) => {
      event.persist();

      const { onChange } = this.props;
      const { name, value } = event.target;

      onChange(['specs', name], value);
    };
  }

  render() {
    const { title, name, options, selectedIndex } = this.props;

    const filterOptions = options.map((option, index) => (
      <div key={shortid.generate()}>
        <input
          type="radio"
          id={`${name}-${index}`}
          name={name}
          value={index}
          onChange={this.handleChange}
          checked={selectedIndex === index}
          style={radioFieldStyle}
        />
        <FilterLabelComponent
          htmlFor={`${name}-${index}`}
          label={option.label}
          value={option.value}
          selected={selectedIndex === index}
        />
      </div>
    ));

    return (
      <div>
        <h4>{title}</h4>
        {filterOptions}
      </div>
    );
  }
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  onChange: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
};
