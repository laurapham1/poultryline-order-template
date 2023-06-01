const template = [
	{
		amount: '',
		metric: 'kg',
		name: 'Giblet',
	},
	{
		amount: '',
		metric: 'kg',
		name: 'Liver',
	},
	{
		amount: '',

		metric: 'kg',
		name: 'Heart',
	},
	{
		amount: '',

		metric: 'box',
		name: 'Necks',
	},
	{
		amount: '',

		metric: 'kg',
		name: 'Spare ribs skin on',
	},
	{
		amount: '',

		metric: 'kg',
		name: 'Drumstick fillet skinless',
	},
	{
		amount: '',

		metric: 'box',
		name: 'WINGS XXLarge',
	},
	{
		amount: '',

		metric: 'box',
		name: 'Supreme XL FRESH & INGHAM BRAND',
	},
	{
		amount: '',

		metric: 'box',
		name: 'Baiada size 17 birds',
	},
	{
		amount: '',

		metric: 'box',
		name: ' Baiada size 21 to 23 birds',
	},
	{
		amount: '',

		metric: 'box',
		name: 'Baiada size 26 to 32 birds',
	},
	{
		amount: '',

		metric: 'box',
		name: 'Inghams size 9 to 11 birds',
	},
	{
		amount: '',

		metric: 'box',
		name: 'Chest bone',
	},
	{
		amount: '',

		metric: 'box',
		name: 'Boilers',
	},
	{
		amount: '',

		metric: 'box',
		name: 'Schnitzel 220 grams',
	},
	{
		amount: '',

		metric: 'box',
		name: 'Crumbed chicken Kiev',
	},
	{
		amount: '',

		metric: 'kg',
		name: 'Maryland fillet skinless',
	},
	{
		amount: '',

		metric: 'kg',
		name: 'Maryland fillet skin on',
	},
	{
		amount: '',

		metric: 'kg',
		name: 'Spare ribs skinless',
	},
	{
		amount: '',

		metric: 'kg',
		name: 'Breast fillet skinless',
	},
	{
		amount: '',

		metric: 'kg',
		name: 'Breast fillet skin on',
	},
	{
		amount: '',

		metric: 'kg',
		name: 'Tenderloin',
	},
];

const orderTemplate = template.map((item, index) => {
	return { id: index, ...item };
});

export default orderTemplate;
