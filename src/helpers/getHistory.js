import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

export default (store) => {
  if (store) {
    return syncHistoryWithStore(browserHistory, store);
  }

  return browserHistory;
};
