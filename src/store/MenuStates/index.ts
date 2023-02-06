const Menu = {
	state: {
		menuList:
			localStorage.getItem('MENU-LIST') !== null
				? JSON.parse(localStorage.getItem('MENU-LIST') as string)
				: ''
	},
	actions: {
		setMenuList(
			newState: { menuList: Array<any> },
			action: { type: string; data: any }
		) {
			newState.menuList = action.data.menuList;
			localStorage.setItem('MENU-LIST', JSON.stringify(action.data.menuList));
		}
	},
	// 非同期の書き方の最適化
	asyncActions: {
		asyncMenu(dispatch: Function, data: any) {
			setTimeout(() => {
				dispatch({ type: 'setMenuList', data });
			}, 1000);
		}
	},
	actionNames: {}
} as any;

// 自動カプセル化方法名
let actionNames = {} as any;
for (let key in Menu.actions) {
	actionNames[key] = key;
}
Menu.actionNames = actionNames;

export default Menu;
