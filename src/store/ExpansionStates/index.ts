const Expansion = {
	state: {
		open: true
	},
	actions: {
		expansion(newState: { open: boolean }, action: { type: string }) {
			newState.open = !newState.open;
		}
	},
	// 非同期の書き方の最適化
	asyncActions: {
		asyncExpansion(dispatch: Function) {
			setTimeout(() => {
				dispatch({ type: 'expansion' });
			}, 1000);
		}
	},
	actionNames: {}
} as any;

// 自動カプセル化方法名
let actionNames = {} as any;
for (let key in Expansion.actions) {
	actionNames[key] = key;
}
Expansion.actionNames = actionNames;

export default Expansion;
