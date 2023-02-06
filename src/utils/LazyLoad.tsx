// Encapsulation of route lazy loading
import React from 'react';
import Loading from '../components/ckLoading/Loading';

const LazyLoad = (path: String) => {
	const Comp = React.lazy(() => import('../pages' + path));
	return (
		<React.Suspense fallback={<Loading />}>
			<Comp></Comp>
		</React.Suspense>
	);
};

export default LazyLoad;
