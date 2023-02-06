import { createRoot } from 'react-dom/client';
import Loading from './Loading';

let loadingCount = 0;

// Enable loading
export const showLoading = () => {
	if (loadingCount === 0) {
		let dom = document.createElement('div');
		dom.setAttribute('id', 'ck-loading');
		document.body.appendChild(dom);
		createRoot(dom).render(<Loading />);
	}
	loadingCount++;
};

// Disable loading
export const hideLoading = () => {
	if (loadingCount <= 0) return;
	loadingCount--;
	if (loadingCount === 0) {
		document.body.removeChild(
			document.getElementById('ck-loading') as HTMLElement
		);
	}
};
