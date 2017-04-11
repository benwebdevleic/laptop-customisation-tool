import React from 'react';
import { render } from 'react-dom';
import { List } from 'immutable';
import Radium from 'radium';
import shortid from 'shortid';

// records
import ComputerRecord from './records/computer';

// components
import Filter from './components/filter';
import SummaryComponent from './components/summary';

// top-level styles
import {
  header as headerStyle,
  choicesContainer as choicesContainerStyle,
  contentContainer as contentContainerStyle,
  summaryContainer as summaryContainerStyle,
} from './styles/app';

const FilterComponent = Radium(Filter);

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      computer: ComputerRecord(),
      filters: {
        screen: {
          title: 'Screen',
          options: List([
            { label: '13" Retina', value: 400 },
            { label: '15" Retina', value: 700 },
          ]),
        },
        cpu: {
          title: 'CPU',
          options: List([
            { label: '2.7GHz quad-core Intel Core i7 processor, Turbo Boost up to 3.6GHz', value: 300 },
            { label: '2.9GHz quad-core Intel Core i7 processor, Turbo Boost up to 3.8GHz', value: 500 },
          ]),
        },
        storage: {
          title: 'Storage',
          options: List([
            { label: '512GB PCIe-based SSD', value: 100 },
            { label: '1TB PCIe-based SSD', value: 200 },
            { label: '2TB PCIe-based SSD', value: 250 },
          ]),
        },
        memory: {
          title: 'Memory',
          options: List([
            { label: '8 GB 2133MHz memory', value: 100 },
            { label: '16 GB 2133MHz memory', value: 150 },
          ]),
        },
        graphics: {
          title: 'Graphics',
          options: List([
            { label: 'Radeon Pro 455 with 2GB memory', value: 300 },
            { label: 'Radeon Pro 460 with 4GB memory', value: 400 },
          ]),
        },
      },
    };

    this.updateComputer = (keyPath, index) => {
      this.setState((previousState) => {
        const computer = previousState.computer.updateIn(keyPath, () =>
          previousState.filters[keyPath[1]].options.get(index));

        return { computer };
      });
    };
  }

  render() {
    const { filters, computer } = this.state;

    const filterComponents = Object.keys(filters).map((filterKey) => {
      const selectedIndex = filters[filterKey].options.toJS().findIndex(o => computer.getIn(['specs', filterKey]).value === o.value);

      return (
        <FilterComponent
          key={shortid.generate()}
          name={filterKey}
          title={filters[filterKey].title}
          options={filters[filterKey].options.toJS()}
          onChange={this.updateComputer}
          selectedIndex={selectedIndex}
        />
      );
    });

    const total = Object.entries(computer.get('specs').toJS()).reduce((acc, arr) => acc + arr[1].value, 0);

    return (
      <div>
        <header style={headerStyle}>
          <h1>Laptop Customisation Tool</h1>
        </header>
        <div style={contentContainerStyle}>
          <div style={choicesContainerStyle}>
            <h2>Customisation Choices</h2>
            { filterComponents }
          </div>
          <div style={summaryContainerStyle}>
            <SummaryComponent options={computer.get('specs').toJS()} total={total} />
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
