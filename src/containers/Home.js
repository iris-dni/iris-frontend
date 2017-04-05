import React from 'react';
import settings from 'settings';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetitionGroups, fetchPetitionGroup } from 'actions/PetitionsActions';
import PageBuilder from 'components/PageBuilder';

const MODULES = [
  {
    component: 'Hero',
    props: {
      ...settings.homePage.hero
    }
  },
  {
    component: 'PetitionGroup',
    props: {
      group: 'closed'
    }
  },
  {
    component: 'PetitionGroup',
    props: {
      group: 'trending'
    }
  },
  {
    component: 'CallToAction',
    props: {
      ...settings.aboutCTA
    }
  },
  {
    component: 'PetitionGroup',
    props: {
      group: 'latest'
    }
  },
  {
    component: 'CallToAction',
    props: {
      ...settings.createCTA,
      theme: 'secondary'
    }
  }
];

const PETITION_GROUPS = [
  {
    group: 'closed',
    query: {
      state: 'closed',
      limit: 3
    }
  },
  {
    group: 'trending',
    query: {
      state: 'current',
      limit: 3,
      sort: 'trending'
    }
  },
  {
    group: 'latest',
    query: {
      state: 'current',
      limit: 3,
      sort: 'created'
    }
  }
];

const HomeContainer = React.createClass({
  componentWillMount () {
    const { petitions, fetchPetitionGroup } = this.props;

    PETITION_GROUPS.forEach((type) => {
      const groupData = petitions[type.group] || {};
      if (!groupData.data || !groupData.data.length) {
        fetchPetitionGroup(type);
      }
    });
  },

  render () {
    return (
      <div>
        <Helmet title={settings.homePage.title} />
        <PageBuilder modules={MODULES} />
      </div>
    );
  }
});

HomeContainer.fetchData = ({ store }) => {
  return store.dispatch(fetchPetitionGroups(PETITION_GROUPS));
};

export const mapStateToProps = ({ petitions }) => ({ petitions });

export const mapDispatchToProps = (dispatch) => ({
  fetchPetitionGroup: (group) => dispatch(fetchPetitionGroup(group))
});

HomeContainer.propTypes = {
  title: React.PropTypes.string,
  petitions: React.PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
