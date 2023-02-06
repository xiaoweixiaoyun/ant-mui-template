import User from './index';

// modularization
let reducer = (state = { ...User.state }, action: { type: string }) => {
	let newState = JSON.parse(JSON.stringify(state));
	for (let key in User.actionNames) {
		if (action.type === User.actionNames[key]) {
			User.actions[User.actionNames[key]](newState, action);
			break;
		}
	}

	return newState;
};
export default reducer;
