import LazyLoad from '../utils/LazyLoad';
/**
 * Construct tree structured data
 * @param {*} data data source
 * @param {*} id id field default 'id'
 * @param {*} parentId Parent node field default 'parentId'
 * @param {*} children Child Node Fields default 'children'
 */

export function handleTree(
	data: any,
	id: any,
	parentId: any,
	children: any,
	need: boolean
) {
	let config: any = {
		id: id || 'id',
		parentId: parentId || 'parentId',
		childrenList: children || 'children'
	};
	var childrenListMap: any = {};
	var nodeIds: any = {};
	var tree: Array<any> = [];

	for (let d of data) {
		let parentId = d[config.parentId];
		if (childrenListMap[parentId] == null) {
			childrenListMap[parentId] = [];
		}
		nodeIds[d[config.id]] = d;
		childrenListMap[parentId].push(d);
	}

	for (let d of data) {
		let parentId = d[config.parentId];
		if (nodeIds[parentId] == null) {
			if (need) {
				d.element = LazyLoad(d.element);
			}
			tree.push(d);
		}
	}

	function adaptToChildrenList(o: any) {
		if (childrenListMap[o[config.id]] !== null) {
			o[config.childrenList] = childrenListMap[o[config.id]];
		}
		if (o[config.childrenList]) {
			for (let c of o[config.childrenList]) {
				adaptToChildrenList(c);
			}
		}
	}

	for (let t of tree) {
		adaptToChildrenList(t);
	}
	return tree;
}

export function rgb(exist: any) {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	if (exist.indexOf(`rgb(${r},${g},${b},0.2)`) > -1) {
		rgb(exist);
	}
	return `rgb(${r},${g},${b},0.3)`;
}
