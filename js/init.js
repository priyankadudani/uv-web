$(function () {
	
	var horConfig = {
		dimension : {width : 500,
			height : 350
		},
		margin : {
				top : 40,
				bottom : 80,
				left : 100,
				right : 40
		},
		meta : {
			isDownload : false
		},
		frame : {
			bgcolor: '#FFF3ED'		
		},
		graph : {
			background: 'none'
		}
	};
	
	var verConfig = {
		graph : {
			orientation : 'Vertical',
			background: 'none'
		},
		dimension : {width : 500,
			height : 350
		},
		margin : {
				top : 40,
				bottom : 60,
				left : 100,
				right : 120
		},
		meta : {
			isDownload : false
		},
		frame : {
			bgcolor : '#FFF3ED'
		}
	};
	horConfig.graph.custompalette = ['gold','silver','#665D1E'];
	horConfig.meta.position = '#uv-graph-space1';
	horConfig.meta.caption = "Top 6 Medal Winners of Olympic Games"
	uv.chart('StackedBar', new demo.Graphdef, horConfig);
	
	//verConfig.graph.palette = 'Bright';
	verConfig.graph.custompalette = ['#A6CEE3','#1F78B4','#B2DF8A','#33A02C','#FB9A99','#E31A1C','#FDBF6F','#FF7F00','#CAB2D6','#6A3D9A'];
	verConfig.meta.position = '#uv-graph-space2';
	verConfig.legend= {position : 'right'};
	uv.chart('Line', new demo.Graphdef, verConfig);
	
	browser_wars_config.meta.position = '#uv-graph-space3';
	uv.chart('PercentArea', browser_wars_data, browser_wars_config);
	
	//verConfig.graph.palette = 'Nature';
	verConfig.graph.custompalette = ['#A6CEE3','#1F78B4','#B2DF8A','#33A02C','#FB9A99','#E31A1C','#FDBF6F','#FF7F00','#CAB2D6','#6A3D9A'];
	verConfig.meta.position = '#uv-graph-space4';
	verConfig.meta.caption = 'Top Languages at Github';
	verConfig.label = {suffix : '%'};
	verConfig.caption = {fontvariant : 'none'};
	uv.chart('Pie', new demo.GithubLanguagesData, verConfig);

	//verConfig.graph.palette = 'Sea';
	verConfig.graph.custompalette = ['#A6CEE3','#1F78B4','#B2DF8A','#33A02C','#FB9A99','#E31A1C','#FDBF6F','#FF7F00','#CAB2D6','#6A3D9A'];
	verConfig.meta.position = '#uv-graph-space5';
	verConfig.legend = {position : 'bottom'};
	verConfig.label = {suffix : ''};
	verConfig.meta.caption = '';
	uv.chart('Waterfall', new demo.Graphdef, verConfig);
});