import {
	legacy_createStore as createStore,
	combineReducers,
	compose,
	applyMiddleware
} from 'redux';
import Expansion from './ExpansionStates/reducer';
import User from './UserStates/reducer';
import Menu from './MenuStates/reducer';
import reduxThunk from 'redux-thunk';

// Combine various modules
const reducers = combineReducers({
	Expansion,
	User,
	Menu
});

// Introduction of general module
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(reduxThunk))
);
export default store;

// 同期の書き方：
// dispatch({ type: 'expansion' });

// ひどうき書き方：
// import ExpansionStatus from '@/store/ExpansionStates';
// dispatch(ExpansionStatus.asyncActions.asyncExpansion);
