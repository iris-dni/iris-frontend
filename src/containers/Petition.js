import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

const Petition = (props) => (
  <div>
    <Helmet
      title={props.title}
    />

    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <p>{props.suggestedSolution}</p>
  </div>
);

const mapStateToProps = ({ petition }) => ({
  id: petition.id,
  title: petition.title,
  description: petition.description,
  suggestedSolution: petition.suggested_solution
});

export default connect(
  mapStateToProps
)(Petition);
