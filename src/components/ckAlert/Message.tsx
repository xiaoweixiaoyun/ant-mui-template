import { Alert, Snackbar } from '@mui/material';
import React from 'react';
interface message {
	content: string;
	duration: number;
	type: any;
}
export default function Message(props: message) {
	const { content, duration, type } = { ...props };
	// Switch control: Defaults to true and is turned on directly when invoked
	const [open, setOpen] = React.useState(true);
	// Close message prompt
	const handleClose = (event: any, reason: any) => {
		setOpen(false);
	};
	return (
		<Snackbar
			open={open}
			autoHideDuration={duration}
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			onClose={handleClose}
		>
			<Alert severity={type}>{content}</Alert>
		</Snackbar>
	);
}
