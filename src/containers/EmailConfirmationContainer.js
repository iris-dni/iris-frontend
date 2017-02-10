import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import getEmailConfirmationResponse from 'selectors/emailConfirmationResponse';
import EmailConfirmation from 'components/EmailConfirmation';
import PetitionResponseTokenError from 'components/PetitionResponseTokenError';

const EmailConfirmationContainer = React.createClass({
  render () {
    const { displayError, title, hint, link } = this.props;
    if (displayError) {
      return <PetitionResponseTokenError />;
    }
    return (
      <div>
        <Helmet title={title} />
        <EmailConfirmation
          title={title}
          hint={hint}
          link={link}
        />
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
