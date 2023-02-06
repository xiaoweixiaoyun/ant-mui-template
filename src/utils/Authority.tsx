// センター
export function centerDisabled(userInfo: any) {
	if (
		userInfo.otherCenterAuthority === '1' ||
		userInfo.systemAuthority === '1'
	) {
		return false;
	}
	return true;
}

// ライン
export function lineDisabled(userInfo: any) {
	if (userInfo.otherLineAuthority === '1' || userInfo.systemAuthority === '1') {
		return false;
	}
	return true;
}

// システム管理
export function systemDisabled(userInfo: any) {
	if (userInfo.systemAuthority === '1') {
		return false;
	}
	return true;
}
