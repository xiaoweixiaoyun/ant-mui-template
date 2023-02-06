import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Param {
	to: string;
}

const Redirect = ({ to }: Param = { to: '/' }) => {
	const navigate = useNavigate();
	useEffect(() => {
		navigate(to, { replace: true });
	});
	return null;
};

export default Redirect;
