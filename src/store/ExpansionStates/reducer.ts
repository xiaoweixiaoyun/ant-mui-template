import Expansion from './index';

// modularization
let reducer = (state = { ...Expansion.state }, action: { type: string }) => {
	let newState = JSON.parse(JSON.stringify(state));

	for (let key in Expansion.actionNames) {
		if (action.type === Expansion.actionNames[key]) {
			Expansion.actions[Expansion.actionNames[key]](newState, action);
			break;
		}
	}

	return newState;
};
export default reducer;
