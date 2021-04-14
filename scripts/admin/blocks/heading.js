module.exports = {
	label: 'Heading',
	name: 'heading',
	widget: 'object',
	fields: [
		{
			label: 'Type',
			name: 'type',
			widget: 'hidden',
			default: 'heading'
		},
		{
			label: 'Level',
			name: 'level',
			widget: 'number',
			value_type: 'int',
			min: 1,
			max: 6,
			required: false,
			default: 2
		},
		{
			label: 'Content',
			name: 'inlineMarkdown',
			widget: 'markdown',
			required: false
		}
	]
}