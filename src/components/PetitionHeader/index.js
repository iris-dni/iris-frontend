import React from 'react';
import styles from './petition-header.scss';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import PetitionTags from 'containers/PetitionTags';
import PetitionInfo from 'containers/PetitionInfo';
import PetitionProgress from 'containers/PetitionProgress';
import PetitionStats from 'containers/PetitionStats';

const PetitionHeader = ({ title }) => (
  <Header padding>
    <div className={styles.tags}>
      <PetitionTags />
    </div>
    <PageTitle title={title} />
    <div className={styles.info}>
      <PetitionInfo />
      <PetitionProgress />
      <PetitionStats responsive />
    </div>
  </Header>
);

export default PetitionHeader;
