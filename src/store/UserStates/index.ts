const User = {
	state: {
		userInfo:
			localStorage.getItem('USER-INFO') !== null
				? JSON.parse(localStorage.getItem('USER-INFO') as any)
				: {}
	},
	actions: {
		setUserInfo(
			newState: { userInfo: object },
			action: { type: string; data: any }
		) {
			newState.userInfo = action.data.userInfo;
			localStorage.setItem('USER-INFO', JSON.stringify(action.data.userInfo));
		}
	},
	// 非同期の書き方の最適化
	asyncActions: {
		asyncUser(dispatch: Function, data: any) {
			setTimeout(() => {
				dispatch({ type: 'setUserInfo', data });
			}, 1000);
		}
	},
	actionNames: {}
} as any;

// 自動カプセル化方法名
let actionNames = {} as any;
for (let key in User.actions) {
	actionNames[key] = key;
}
User.actionNames = actionNames;

export default User;
