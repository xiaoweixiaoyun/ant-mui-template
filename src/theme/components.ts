const Components = {
	MuiAutocomplete: {
		styleOverrides: {
			endAdornment: {
				top: 'calc(50% - 12px)'
			},
			input: {
				padding: '0 4px 0 6px !important'
			},
			tag: {
				margin: '0 3px 0 3px',
				height: 'auto'
			}
		}
	},
	MuiTextField: {
		styleOverrides: {
			root: {
				input: {
					padding: '6px !important'
				}
			}
		}
	},
	MuiSelect: {
		styleOverrides: {
			select: {
				padding: '6px 32px 6px 16px !important'
			}
		}
	}
};

export default Components;
