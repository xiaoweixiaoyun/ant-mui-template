import { useTheme } from '@emotion/react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Icon, IconButton, InputAdornment, TextField } from '@mui/material';
import { TablePaginationActionsProps } from '@mui/material/TablePagination/TablePaginationActions';
import React, { useEffect } from 'react';

export default function TablePaginationActions(
	props: TablePaginationActionsProps
) {
	const theme: any = useTheme();
	const { count, page, rowsPerPage, onPageChange } = props;
	const [pageNum, setPageNum] = React.useState(page + 1);

	useEffect(() => {
		setPageNum(props.page + 1);
	}, [page]);

	const handleFirstPageButtonClick = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		onPageChange(event, 0);
		setPageNum(1);
	};

	const handleBackButtonClick = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		onPageChange(event, page - 1);
		setPageNum(page);
	};

	const handleNextButtonClick = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		onPageChange(event, page + 1);
		setPageNum(page + 2);
	};

	const handleLastPageButtonClick = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
		setPageNum(Math.max(0, Math.ceil(count / rowsPerPage)));
	};

	const handlePageButtonClick = (event: any) => {
		onPageChange(event, Math.max(0, event.target.value - 1));
		setPageNum(Math.max(1, event.target.value));
	};

	return (
		<div style={{ minWidth: 290, marginLeft: 10, display: 'flex' }}>
			<TextField
				size='small'
				variant='filled'
				sx={{ width: 50, m: 1 }}
				onKeyPress={(event: any) => {
					if (event.nativeEvent.keyCode === 13) {
						handlePageButtonClick(event);
					}
				}}
				onBlur={(event: any) => {
					if (pageNum !== Math.max(1, event.target.value)) {
						handlePageButtonClick(event);
					}
				}}
				onChange={(event: any) => {
					const value = event.target.value.replace(/[^0-9]/g, '');
					setPageNum(value);
				}}
				value={pageNum}
			/>
			<div style={{ display: 'flex', alignItems: 'center' }}>ページへ移動</div>
			<IconButton
				onClick={handleFirstPageButtonClick}
				disabled={page === 0}
				aria-label='first page'
			>
				{theme.direction === 'rtl' ? (
					<Icon>last_page</Icon>
				) : (
					<Icon>first_page</Icon>
				)}
			</IconButton>
			<IconButton
				onClick={handleBackButtonClick}
				disabled={page === 0}
				aria-label='previous page'
			>
				{theme.direction === 'rtl' ? (
					<KeyboardArrowRight />
				) : (
					<KeyboardArrowLeft />
				)}
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label='next page'
			>
				{theme.direction === 'rtl' ? (
					<KeyboardArrowLeft />
				) : (
					<KeyboardArrowRight />
				)}
			</IconButton>
			<IconButton
				onClick={handleLastPageButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label='last page'
			>
				{theme.direction === 'rtl' ? (
					<Icon>first_page</Icon>
				) : (
					<Icon>last_page</Icon>
				)}
			</IconButton>
		</div>
	);
}
