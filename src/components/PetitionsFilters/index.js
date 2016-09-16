import React from 'react';
import settings from 'settings';
import { petitionsPath } from 'helpers/petitionUrls';
import citySuggestionFormatter from 'helpers/citySuggestionFormatter';
import Icon from 'components/Icon';
import Autocomplete from 'containers/Autocomplete';
import styles from './petitions-filters.scss';

const FILTER_INPUT_NAME = 'filter-by';
const SORT_INPUT_NAME = 'sort-by';
const CITY_FILTER_NAME = 'city-filter';

const PetitionsFilters = React.createClass({
  handleFilterChange (e) {
    this.props.router.push(petitionsPath({
      state: e.target.value,
      city: this.props.currentCity || '',
      sort: this.props.location.query.sort || ''
    }));
  },

  handleSortChange (e) {
    this.props.router.push(petitionsPath({
      state: this.props.params && this.props.params.state || this.props.location.query.state || '',
      city: this.props.currentCity || '',
      sort: e.target.value
    }));
  },

  getAutocompleteProps: ({
    router,
    params,
    location,
    updateCurrentCity,
    currentCity
  }) => ({
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
          state: params && params.state || location.query.state || '',
          city: newValue.id ? newValue : '',
          sort: location.query.sort || ''
        }));
      },
      onBlur () {}
    },
    html: { placeholder: settings.petitionsPage.filters.city.placeholder }
  }),

  render () {
    return (
      <div className={styles.root}>
        <div className={styles.filter}>
          <label className={styles.label} htmlFor={FILTER_INPUT_NAME}>
            {settings.petitionsPage.filterBy}
          </label>

          <div className={styles['input-wrapper']}>
            <select
              className={styles.select}
              id={FILTER_INPUT_NAME}
              value={this.props.params && this.props.params.state || this.props.location.query.state || 'default'}
              onChange={this.handleFilterChange}
            >
              <option disabled value='default'>
                {settings.petitionsPage.chooseOption}
              </option>

              <option value='winning'>
                {settings.petitionsPage.filters.winning.label}
              </option>

              <option value='running'>
                {settings.petitionsPage.filters.running.label}
              </option>

              <option value='all'>
                {settings.petitionsPage.filters.all.label}
              </option>
            </select>
          </div>
        </div>

        <div className={styles.filter}>
          <label className={styles.label} htmlFor={SORT_INPUT_NAME}>
            {settings.petitionsPage.sortBy}
          </label>

          <div className={styles['input-wrapper']}>
            <select
              className={styles.select}
              id={SORT_INPUT_NAME}
              value={this.props.location.query.sort || 'default'}
              onChange={this.handleSortChange}
            >
              <option disabled value='default'>
                {settings.petitionsPage.chooseOption}
              </option>

              <option value='date'>
                {settings.petitionsPage.filters.date.label}
              </option>

              <option value='supporters'>
                {settings.petitionsPage.filters.supportersAmount.label}
              </option>
            </select>
          </div>
        </div>

        <div className={styles.filter}>
          <label
            className={styles.label}
            htmlFor={CITY_FILTER_NAME}
          >
            {settings.petitionsPage.filters.city.label}
          </label>

          <div className={styles['input-wrapper']}>
            <Autocomplete
              {...this.getAutocompleteProps(this.props)}
              inputModifier='thin'
            />

            <div className={styles.icon}>
              <Icon
                id='Search'
                inline
                fill='none'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default PetitionsFilters;
