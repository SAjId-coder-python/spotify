import { combineReducers } from 'redux';

import BrowseReducer  from './browse';

const rootReducer = combineReducers({
  browse: BrowseReducer,
});

export default rootReducer;
