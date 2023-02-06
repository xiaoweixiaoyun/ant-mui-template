import React from 'react';
import NumberFormat, { InputAttributes } from 'react-number-format';

interface CustomProps {
	onChange: (event: { target: { name: string; value: string } }) => void;
	name: string;
}
const NumberFormatCustom = React.forwardRef<
	NumberFormat<InputAttributes>,
	CustomProps
>(function NumberFormatCustom(props: any, ref: any) {
	const { onChange, ...other } = props;

	return (
		<NumberFormat
			{...other}
			getInputRef={ref}
			onInput={(e: any) => {
				e.target.value = e.target.value
					? e.target.value.replace(/,/g, '').match(/^\d{0,8}(?:\.\d{0,2})?/)
					: '';
			}}
			onValueChange={(values: any) => {
				onChange({
					target: {
						name: props.name,
						value: values.value
					}
				});
			}}
			thousandSeparator
			isNumericString
		/>
	);
});

export default NumberFormatCustom;
