$(function () {
	var space = $('#uv-graph-space');
	
	var horConfig = {
		dimension : {width : 500,
			height : 300
		},
		margin : {
				top : 40,
				bottom : 60,
				left : 100,
				right : 100
		},
		meta : {
			position : '#uv-graph-space',
			isDownload : false
		}
	};
	
	var verConfig = {
		graph : {
			orientation : 'Vertical'
		},
		dimension : {width : 500,
			height : 300
		},
		margin : {
				top : 40,
				bottom : 60,
				left : 100,
				right : 100
		},
		meta : {
			position : '#uv-graph-space',
			isDownload : false
		}
	};
	
	uv.chart('Bar', new uv.Test().getGraphDef(), horConfig);
	
	verConfig.graph.palette = 'Lemon';
	uv.chart('Bar', new uv.Test().getGraphDef(), verConfig);
	
	verConfig.graph.palette = 'Candid';
	uv.chart('StepUpBar', new uv.Test().getGraphDef(), verConfig);
	
	verConfig.graph.palette = 'New Moon';
	uv.chart('StackedBar', new uv.Test().getGraphDef(), verConfig);

	uv.chart('Line', new uv.Test().getGraphDef(), horConfig);

	uv.chart('Area', new uv.Test().getGraphDef(), horConfig);

	uv.chart('StackedArea', new uv.Test().getGraphDef(), horConfig);
	
	uv.chart('PercentArea', new uv.Test().getGraphDef(), verConfig);
	
	uv.chart('PercentBar', new uv.Test().getGraphDef(), verConfig);
	
	uv.chart('Donut', new uv.Test().getGraphDef(), horConfig);
	
	uv.chart('Pie', new uv.Test().getGraphDef(), horConfig);
});