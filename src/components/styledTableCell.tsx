import { TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: '#F0F0F0',
		color: '#777',
		fontWeight: '600',
		padding: '10px',
		fontSize: 14
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
		padding: '5px 10px'
	}
}));
