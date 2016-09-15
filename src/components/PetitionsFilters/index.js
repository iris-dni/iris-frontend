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
      </label>

      <div className={styles['input-wrapper']}>
        <Autocomplete
          {...autocompleteProps}
          inputModifier={'thin'}
        />

        <div className={styles.icon}>
          <Icon
            id={'Search'}
            inline
            fill={'none'}
          />
        </div>
      </div>
    </div>
  </div>
);

export default PetitionsFilters;
