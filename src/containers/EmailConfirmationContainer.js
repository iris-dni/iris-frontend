import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import getEmailConfirmationResponse from 'selectors/emailConfirmationResponse';
import EmailConfirmation from 'components/EmailConfirmation';
import PetitionResponseTokenError from 'components/PetitionResponseTokenError';

const EmailConfirmationContainer = React.createClass({
  render () {
    const { displayError, translation } = this.props;
    if (displayError) {
      return <PetitionResponseTokenError />;
    }
    return (
      <div>
        <Helmet title={translation.title} />
        <EmailConfirmation {...translation} />
      </div>
    );
  }
});

export const mapStateToProps = ({ confirmation }) => ({
  ...getEmailConfirmationResponse(confirmation)
});

export default connect(
  mapStateToProps
)(EmailConfirmationContainer);
