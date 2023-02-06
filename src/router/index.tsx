import { lazy, useState } from 'react';
import React from 'react';
import LazyLoad from '../utils/LazyLoad';
import { Navigate, useRoutes } from 'react-router-dom';
import { RouterBuild } from '../router/config';
import Loading from '../components/ckLoading/Loading';
import { AuthRoute } from '../components/authRoute';
interface Router {
	path: string;
	element: any;
	children?: Array<Router>;
	meta?: Object;
}
const Layout = lazy(() => import('../layout') as any);
const routesList: Array<Router> = [
	// home page
	{
		path: '/',
		element: <Navigate to='order' />
	},
	// signInPage
	{
		path: '/login',
		element: LazyLoad('/signInPage'),
		meta: {
			title: 'ログイン'
		}
	},
	// homepage
	{
		path: '/',
		element: (
			<React.Suspense fallback={<Loading />}>
				<AuthRoute>
					<Layout></Layout>
				</AuthRoute>
			</React.Suspense>
		),
		children: RouterBuild()
	},
	// 404
	{
		path: '*',
		element: LazyLoad('/404'),
		meta: {
			title: '404'
		}
	}
];

export default function Routes() {
	const [rout] = useState(routesList);
	return useRoutes(rout);
}
