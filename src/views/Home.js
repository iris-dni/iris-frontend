import React from 'react';
import { Link } from 'react-router';

export default (props) => (
  <div>
    <h1>Home Component</h1>
    <p><Link to='/basic'>Go to basic route</Link></p>
  </div>
);

// import React from 'react';
// import { connect } from 'react-redux';
// import { fetchProfile } from './actions';

// const Home = React.createClass({
//   propTypes: {
//     petition: React.PropTypes.object,
//     fetchProfile: React.PropTypes.func
//   },

//   // When the component gets added to the DOM, fetch any data we need
//   componentDidMount () {
//     if (!this.props.profile) this.props.fetchProfile();
//   },

//   render () {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <p>{this.props.description}</p>
//         <p>{this.props.suggested_solution}</p>
//       </div>
//     );
//   }
// });

// Home.fetchData = ({ store }) => store.dispatch(fetchProfile());

// // Extract the props we want to connect from the current store state
// const mapStateToProps = (state) => ({ petition: state.petition });

// // Add dispatchers to the component props for fetching the data _client side_
// const mapDispatchToProps = (dispatch) => {
//   return { fetchProfile: () => dispatch(fetchProfile()) };
// };

// // Connect this component to the redux store
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
