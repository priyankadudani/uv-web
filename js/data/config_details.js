var uvcs = {
	color : 'Color String/Color Hex Code',
	ccode : 'any Color Code or Color String or "none"'
};

var details = {
	graph : {
		id : 'config-graph',
		desc : 'All general properties related to the chart are put up in this group.',
		properties : [
			{ name : 'palette', type : "String", default : "'Brink'", range: '', desc : 'This defines the color palette/set of colors used to color the graph. There are a set of palettes to choose from within uvCharts. You can override it with your own palette using <strong>custompalette</strong>'},
			{ name : 'bgcolor', type : uvcs.color, default : '#ffffff', range: uvcs.ccode, desc : 'The background color used for the entire chart include the margin spaces.'},
			{ name : 'orientation', type: 'String', default: 'Horizontal', range: "'Horizontal'/'Vertical'", desc : 'Orientation of the chart for a different layout based on requirements.'},
			{ name : 'custompalette', type: 'Array of Colors', default: '[]', range: "None", desc: 'Override the palette with your own color palette by providing a non empty array of color codes. They are used in order for corresponding category in the categories array of the graph definition.'},
			{ name : 'opacity', type: 'Decimal', default: 1, range: '0-1', desc: 'Opacity of the entire chart to make it blend into any background of your choice.'}
		]
	},

	meta : {
		id : 'config-meta',
		desc : 'All metadata type of the properties are aggregated into this group.',
		properties : [
			{ name : 'position', type : "CSS Selector String", default : "'#uv-div'", range: 'Any CSS Selector', desc : 'CSS Selector corresponding to the DOM element in which the entire chart is appended at the end. If multiple such elements exist the chart is appended only on the first selected element.'},
			{ name : 'caption', type : 'String', default : '""', range: 'Any String', desc : 'Caption for the graph'},
			{ name : 'subcaption', type: 'String', default: '""', range: 'Any String', desc : 'Subcaption for the graph'},
			{ name : 'hlabel', type: 'String', default: '""', range: "Any String", desc: 'Label for the horizontal axis'},
			{ name : 'vlabel', type: 'String', default: '""', range: 'Any String', desc: 'Label for the vertical axis'},
			{ name : 'hsublabel', type: 'String', default: '""', range: "Any String", desc: 'Sub-label for the horizontal axis'},
			{ name : 'vsublabel', type: 'String', default: '""', range: 'Any String', desc: 'Sub-label for the vertical axis'},
			{ name : 'isDownloadable', type: 'Boolean', default: 'false', range: 'true/false', desc: 'Whether or not to display the download link for the chart'},
			{ name : 'downloadLabel', type: 'String', default: 'Download', range: 'Any String', desc: 'Text to be displayed in the download link'}
		]
	},

	dimension : {
		id : 'config-dimension',
		desc : 'All properties related to the chart dimensions go in here',
		properties : [
			{ name : 'width', type : "Size", default : "400", range: 'Any CSS Size', desc : 'Width of the chart'},
			{ name : 'height', type : 'Size', default : '400', range: 'Any CSS Size', desc : 'Height of the chart'}
		]
	},

	margin : {
		id : 'config-margin',
		desc : 'All properties related to the chart margins go in here',
		properties : [
			{ name : 'top', type : "Size", default : "50", range: 'Any CSS Size', desc : 'Top margin of the chart'},
			{ name : 'bottom', type : 'Size', default : '150', range: 'Any CSS Size', desc : 'Bottom margin of the chart'},
			{ name : 'left', type : "Size", default : "100", range: 'Any CSS Size', desc : 'Left margin of the chart'},
			{ name : 'right', type : 'Size', default : '100', range: 'Any CSS Size', desc : 'Right margin of the chart'}
		]
	},

	frame : {
		id : 'config-frame',
		desc : 'All properties related to the chart frame go in here',
		properties : [
			{ name : 'bgcolor', type : uvcs.color, default : "#ffffff", range: uvcs.ccode, desc : 'Background color of the frame which contains the chart'}
		]
	},

	axis : {
		id : 'config-axis',
		desc : 'All properties related to the chart margins go in here',
		properties : [
			{ name : 'ticks', type : "Number", default : "8", range: '0 or above', desc : 'No.of major ticks on the measure axis'},
			{ name : 'subticks', type : 'Number', default : '2', range: '0 or above', desc : 'No.of minor ticks on the measure axis'},
			{ name : 'padding', type : "Size", default : "5", range: 'Any CSS Size', desc : 'Padding from the axis to the label'},
			{ name : 'minor', type : 'Size', default : '-10', range: '0 or less', desc : 'Length of the minor ticks towards the label'},
			{ name : 'strokecolor', type : uvcs.color, default : "#000000", range: uvcs.ccode, desc : 'Color of axis lines'},
			{ name : 'subticks', type : 'Number', default : '2', range: '0 or above', desc : 'No.of minor ticks on the measure axis'},
			{ name : 'padding', type : "Size", default : "5", range: 'Any CSS Size', desc : 'Padding from the axis to the label'},
			{ name : 'minor', type : 'Size', default : '-10', range: '0 or less', desc : 'Length of the minor ticks towards the label'}
		]
	}
};