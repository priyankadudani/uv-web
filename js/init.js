$(function () {
	
	var horConfig = {
		dimension : {width : 500,
			height : 350
		},
		margin : {
				top : 40,
				bottom : 60,
				left : 100,
				right : 100
		},
		meta : {
			isDownload : false
		}
	};
	
	var verConfig = {
		graph : {
			orientation : 'Vertical'
		},
		dimension : {width : 500,
			height : 350
		},
		margin : {
				top : 40,
				bottom : 60,
				left : 100,
				right : 100
		},
		meta : {
			isDownload : false
		}
	};
	
	horConfig.meta.position = '#uv-graph-space1';
	uv.chart('Bar', new demo.Graphdef, horConfig);
	
	verConfig.graph.palette = 'Bright';
	verConfig.meta.position = '#uv-graph-space2';
	verConfig.legend= {position : 'right'};
	uv.chart('Line', new demo.Graphdef, verConfig);
	
	horConfig.meta.position = '#uv-graph-space3';
	uv.chart('Area', new demo.Graphdef, horConfig);
	
	verConfig.graph.palette = 'New Moon';
	verConfig.meta.position = '#uv-graph-space4';
	uv.chart('Pie', new demo.Graphdef, verConfig);

	verConfig.graph.palette = 'Sea';
	verConfig.meta.position = '#uv-graph-space5';
	verConfig.legend= {position : 'bottom'};
	uv.chart('Waterfall', new demo.Graphdef, verConfig);
});