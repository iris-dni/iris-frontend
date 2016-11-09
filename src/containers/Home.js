import React from 'react';
import settings from 'settings';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetitionGroups, fetchPetitionGroup } from 'actions/PetitionsActions';
import Home from 'components/Home';

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
      group: 'trending'
    }
  },
  {
    component: 'PetitionGroup',
    props: {
      group: 'latest'
    }
  }
];

const PETITION_GROUPS = [
  {
    group: 'trending',
    query: {
      state: 'current',
      limit: 6,
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
        <Home modules={MODULES} />
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
