import moment from 'moment';

const filters = {
  text : '',
  sortBy : '',
  startDate : undefined,
  endDate : undefined
};

const filtersData = {
  text : 'bills',
  sortBy : 'amount',
  startDate : moment(0),
  endDate : moment(0).add(2, 'days')
};

export { filters, filtersData };