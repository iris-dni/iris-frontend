import React from 'react';
import { translation } from 'translations';
import { petitionsPath } from 'helpers/petitionUrls';
import citySuggestionFormatter from 'helpers/citySuggestionFormatter';
import PetitionsFiltersField from 'components/PetitionsFiltersField';
import Select from 'components/Select';
import Autocomplete from 'containers/Autocomplete';
import styles from './petitions-filters.scss';

const CITY_FILTER_NAME = 'city-filter';

const FILTER_INPUT_NAME = 'filter-by';
const FILTER_INPUT_OPTIONS = [
  {
    value: 'current',
    label: translation('petitionsPage.filters.current')
  },
  {
    value: 'winning',
    label: translation('petitionsPage.filters.winning')
  },
  {
    value: 'past',
    label: translation('petitionsPage.filters.past')
  },
  {
    value: 'all',
    label: translation('petitionsPage.filters.all')
  }
];

const SORT_INPUT_NAME = 'sort-by';
const SORT_INPUT_OPTIONS = [
  {
    value: 'date',
    label: translation('petitionsPage.filters.date')
  },
  {
    value: 'trending',
    label: translation('petitionsPage.filters.trending')
  },
  {
    value: 'supporters',
    label: translation('petitionsPage.filters.supportersAmount')
  }
];

const PetitionsFilters = React.createClass({
  handleFilterChange (e) {
    this.props.router.push(petitionsPath({
      state: e.target.value,
      city: this.props.currentCity,
      sort: this.props.location.query.sort
    }));
  },

  handleSortChange (e) {
    this.props.router.push(petitionsPath({
      state: this.props.location.query.state,
      city: this.props.currentCity,
      sort: e.target.value
    }));
  },

  getAutocompleteProps: ({ router, location, currentCity, updateCurrentCity }) => ({
    name: CITY_FILTER_NAME,
    endpoint: 'cities',
    suggestionFormatter: citySuggestionFormatter,
    getFormValue: (suggestion) => suggestion,
    suggestionsLimit: 4,
    helper: {
      value: { data: currentCity },
      onChange (newValue) {
        updateCurrentCity(newValue);

        router.push(petitionsPath({
          city: newValue,
          sort: location.query.sort,
          state: location.query.state
        }));
      }
    },
    html: { placeholder: translation('petitionsPage.filters.city.placeholder') }
  }),

  getSelectValue (key, defaultValue) {
    return this.props.params && this.props.params[key] ||
      this.props.location.query[key] || defaultValue;
  },

  render () {
    return (
      <div className={styles.root}>
        <div className={styles.grid}>
          <div className={styles['full-item']}>
            <PetitionsFiltersField
              name={CITY_FILTER_NAME}
              label={translation('petitionsPage.filters.city.label')}
            >
              <Autocomplete
                {...this.getAutocompleteProps(this.props)}
                inputModifier='thin'
                icon={{
                  id: 'Search',
                  fill: 'none'
                }}
              />
            </PetitionsFiltersField>
          </div>

          <div className={styles['half-item']}>
            <PetitionsFiltersField
              name={FILTER_INPUT_NAME}
              label={translation('petitionsPage.filterBy')}
            >
              <Select
                name={FILTER_INPUT_NAME}
                value={this.getSelectValue('state', 'current')}
                handleChange={this.handleFilterChange}
                options={FILTER_INPUT_OPTIONS} />
            </PetitionsFiltersField>
          </div>

          <div className={styles['half-item']}>
            <PetitionsFiltersField
              name={SORT_INPUT_NAME}
              label={translation('petitionsPage.orderBy')}
            >
              <Select
                name={SORT_INPUT_NAME}
                value={this.getSelectValue('sort', 'date')}
                handleChange={this.handleSortChange}
                options={SORT_INPUT_OPTIONS} />
            </PetitionsFiltersField>
          </div>
        </div>
      </div>
    );
  }
});

export default PetitionsFilters;
