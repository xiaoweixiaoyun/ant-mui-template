export function getToken() {
	return localStorage.getItem('CK-TOKEN');
}

export function setToken(token: any) {
	localStorage.setItem('CK-TOKEN', token);
}

export function removeToken() {
	localStorage.removeItem('MENU-LIST');
	localStorage.removeItem('USER-INFO');
	localStorage.removeItem('CK-TOKEN');
}
