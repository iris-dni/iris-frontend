import React from 'react';
import settings from 'settings';
import Icon from 'components/Icon';
import Autocomplete from 'containers/Autocomplete';
import styles from './petitions-filters.scss';

const PetitionsFilters = ({ autocompleteProps }) => (
  <div className={styles.root}>
    <div className={styles.filter}>
      <label className={styles.label} htmlFor={autocompleteProps.name}>
        {settings.petitionsPage.filters.city.label}
        <div className={styles['input-wrapper']}>
          <div className={styles.icon}>
            <Icon
              id={'Search'}
              inline
              fill={'none'}
            />
          </div>

          <Autocomplete
            {...autocompleteProps}
            inputModifier={'thin'}
          />
        </div>
      </label>
    </div>
  </div>
);

export default PetitionsFilters;
