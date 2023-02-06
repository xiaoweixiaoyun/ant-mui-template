import { Chip } from '@mui/material';
interface SELECT {
	id: string;
	name: string;
	limitTags: number;
	separator: string;
}
export default function AutocompleteTags(
	value: any,
	getTagProps: any,
	obj: SELECT
) {
	const numTags = value.length;
	const limitTags = obj.limitTags;
	return (
		<>
			{value.slice(0, limitTags).map((option: any, index: number) => (
				<Chip
					{...getTagProps({ index })}
					key={index}
					label={option[obj.id] + obj.separator + option[obj.name]}
				/>
			))}

			{numTags > limitTags && ` +${numTags - limitTags}`}
		</>
	);
}
