// ルーティング認証
// 1. tokenが存在するかどうかを判断する
// 2. ダイレクトノーマルレンダリングがある場合
// 3. ログインルーティングへのリダイレクトが存在しない場合

import { Navigate } from 'react-router-dom';
import { getToken } from '../utils/Token';
// 高次コンポーネント：1つのコンポーネントを別のコンポーネントのパラメータとして入力し、特定の判断によって新しいコンポーネントに戻ります
// ここのAuthRouteは高次コンポーネントです

function AuthRoute({ children }: any) {
	// tokenを取得
	const tokenStr = getToken();
	// tokenが存在する場合は、直接通常のレンダリング
	if (tokenStr) {
		return <>{children}</>;
	}
	// tokenが存在しない場合は、ログインルーティングにリダイレクトします
	else {
		return <Navigate to='/login' replace />;
	}
}
export { AuthRoute };
