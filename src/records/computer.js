import { Record, Map } from 'immutable';

const computer = Record({
  total: 1500,
  specs: Map({
    screen: { label: '13" Retina', value: 400 },
    cpu: { label: '2.7GHz quad-core Intel Core i7 processor, Turbo Boost up to 3.6GHz', value: 300 },
    storage: { label: '512GB PCIe-based SSD', value: 100 },
    memory: { label: '8 GB 2133MHz memory', value: 100 },
    graphics: { label: 'Radeon Pro 455 with 2GB memory', value: 300 },
  }),
});

export default computer;
