export default function CKTable(props: any) {
	const createSlot = (slotName: any) => {
		let children = props.children;
		if (typeof children === 'object' && !Array.isArray(children))
			children = [children];
		if (children)
			for (let el of children) {
				if (el.props.slot === slotName) return el;
			}
		return null;
	};
	return (
		<div className='ck-table'>
			<header>
				<div className='title'>検索結果</div>
				<div className='operation'>{createSlot('operation')}</div>
			</header>
			<div>{createSlot('table')}</div>
		</div>
	);
}
