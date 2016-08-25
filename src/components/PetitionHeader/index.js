import React from 'react';
import styles from './petition-header.scss';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import PetitionInfo from 'containers/PetitionInfo';
import PetitionProgress from 'containers/PetitionProgress';
import PetitionStats from 'containers/PetitionStats';

const PetitionHeader = ({ title }) => (
  <Header>
    <PageTitle title={title} />
    <div className={styles.info}>
      <PetitionInfo />
      <PetitionProgress />
      <PetitionStats />
    </div>
  </Header>
);

export default PetitionHeader;
