import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Icon,
	Typography
} from '@mui/material';
import React from 'react';

export default function CKSearch(props: any) {
	const [expanded, setExpanded] = React.useState<string | false>('panel1');
	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false);
		};
	return (
		<div className='ck-search'>
			<Accordion
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}
			>
				<AccordionSummary
					expandIcon={<Icon>keyboard_double_arrow_down</Icon>}
					aria-controls='panel1a-content'
					id='panel1a-header'
				>
					<Typography sx={{ fontSize: '16px' }}>検索条件</Typography>
				</AccordionSummary>
				<AccordionDetails>{props.children}</AccordionDetails>
			</Accordion>
		</div>
	);
}
