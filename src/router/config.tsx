import { handleTree } from '../utils/Tool';
import store from '../store';

const menuConfig: Array<any> = [
	{
		id: 1,
		path: '',
		element: '',
		title: 'PC受注',
		icon: 'description',
		parentId: 0,
		linkType: null
	},
	{
		id: 13,
		path: '',
		element: '',
		title: 'マスターメンテ',
		icon: 'dataset',
		parentId: 0,
		linkType: null
	},
	{
		id: 16,
		path: '',
		element: '',
		title: 'ユーザーメンテ',
		icon: 'settings_account_box',
		parentId: 0,
		linkType: null
	},
	{
		id: 2,
		path: '/order',
		element: '/orderPage',
		title: '受注状況',
		icon: 'article',
		parentId: 1,
		linkType: 1
	},
	{
		id: 3,
		path: '/achieve',
		element: '/achievePage',
		title: '生産実績取得',
		icon: 'precision_manufacturing',
		parentId: 1,
		linkType: 1
	},
	{
		id: 4,
		path: '/confirmed',
		element: '/confirmedPage',
		title: '生産実績確定',
		icon: 'production_quantity_limits',
		parentId: 1,
		linkType: 1
	},
	{
		id: 5,
		path: '/fixed',
		element: '/fixedDeterminationPage',
		title: '定額実績確定',
		icon: 'conveyor_belt',
		parentId: 1,
		linkType: 1
	},
	{
		id: 6,
		path: '/quota',
		element: '/quotaIndicationPage',
		title: '定額指示修正',
		icon: 'published_with_changes',
		parentId: 1,
		linkType: 1
	},
	{
		id: 7,
		path: '/introduction',
		element: '/instructionPage',
		title: '生産指示書',
		icon: 'integration_instructions',
		parentId: 1,
		linkType: 1
	},
	{
		id: 8,
		path: '/distribution',
		element: '/distributionPage',
		title: '振分指示書',
		icon: 'bookmarks',
		parentId: 1,
		linkType: 1
	},
	{
		id: 9,
		path: '/restoration',
		element: '/restorationPage',
		title: '生産実績確定復旧',
		icon: 'restart_alt',
		parentId: 1,
		linkType: 1
	},
	{
		id: 10,
		path: '/extension',
		element: '/extensionPage',
		title: '生産計画取込処理延長',
		icon: 'forward',
		parentId: 1,
		linkType: 1
	},
	{
		id: 11,
		path: '/appended',
		element: '/appendedDataPage',
		title: '出庫データ追加修正',
		icon: 'change_circle',
		parentId: 1,
		linkType: 1
	},
	{
		id: 12,
		path: '/outbound',
		element: '/outboundDataPage',
		title: '出庫データ確認',
		icon: 'done_outline',
		parentId: 1,
		linkType: 1
	},
	{
		id: 14,
		path: '/working',
		element: '/workingGroupPage',
		title: '作業グループ',
		icon: 'receipt_long',
		parentId: 13,
		linkType: 1
	},
	{
		id: 15,
		path: '/flight/:index',
		element: '/flightIndexPage',
		title: '便',
		icon: 'view_kanban',
		parentId: 13,
		linkType: 1
	},
	{
		id: 17,
		path: '/user',
		element: '/userPage',
		title: 'ユーザー',
		icon: 'group',
		parentId: 16,
		linkType: 1
	}
];
export function RouterFilter(pathname: String) {
	let obj = JSON.parse(JSON.stringify(store.getState().Menu.menuList));
	const menuArr: Array<any> = [];
	for (const menu of obj) {
		let path = menu.path.split('/:')[0];
		if (pathname.indexOf(path) > -1 && menu.path !== '') {
			menuArr.unshift(menu);
			for (const menu2 of obj) {
				if (menu.parentId === menu2.id) {
					menuArr.unshift(menu2);
				}
			}
		}
	}
	return menuArr;
}

export function RouterBuild() {
	return handleTree(
		menuConfig.filter((item: any) => item.path !== ''),
		'id',
		'parentId',
		'children',
		true
	);
}
