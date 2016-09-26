import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPetitionByResponseToken, respondToPetition } from 'actions/RespondActions';
import settings from 'settings';
import Loading from 'components/Loading';
import RespondToPetition from 'components/RespondToPetition';
import getPetitionForm from 'selectors/petitionForm';
import petitionResponded from 'selectors/petitionResponded';
import getPetitionPath from 'helpers/getPetitionPath';

const RespondToPetitionContainer = withRouter(React.createClass({
  componentWillMount () {
    const {
      fetchPetitionByResponseToken,
      params: { token }
    } = this.props;

    fetchPetitionByResponseToken(token).then(({ petition }) => {
      if (petitionResponded(petition)) {
        this.props.router.push(getPetitionPath(petition));
      }
    });
  },

  componentWillUpdate (nextProps) {
    if (nextProps.petition.hasPublished) {
      this.props.router.push(`${getPetitionPath(nextProps.petition)}`);
    }
  },

  render () {
    const { petition } = this.props;

    return (
      <div>
        <Helmet title={settings.editPetitionPage.title} />
        <Loading isLoading={petition.isLoading} onServer={__SERVER__}>
          <RespondToPetition petition={petition} />
        </Loading>
      </div>
    );
  }
}));

export const mapStateToProps = ({ petition }) => ({
  petition: getPetitionForm(petition)
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPetitionByResponseToken: (token) => dispatch(fetchPetitionByResponseToken(token)),
  respondToPetition: (petition) => dispatch(respondToPetition(petition))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RespondToPetitionContainer);
