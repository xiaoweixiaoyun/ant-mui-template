import Menu from './index';

// modularization
let reducer = (state = { ...Menu.state }, action: { type: string }) => {
	let newState = JSON.parse(JSON.stringify(state));
	for (let key in Menu.actionNames) {
		if (action.type === Menu.actionNames[key]) {
			Menu.actions[Menu.actionNames[key]](newState, action);
			break;
		}
	}

	return newState;
};
export default reducer;
