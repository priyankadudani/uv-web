$(function () {
	var space = $('#uv-graph-space');
		var horConfig = $.extend(true, {}, uv.config);
		var verConfig = $.extend(true, {}, uv.config);
		
		horConfig.dimension = {
				width : 500,
				height : 300
		};
		
		horConfig.margin = {
				top : 40,
				bottom : 60,
				left : 100,
				right : 100
		};
		
		verConfig.dimension = {
				width : 500,
				height : 300
		};
		
		verConfig.margin = {
				top : 40,
				bottom : 60,
				left : 100,
				right : 100
		};
		
		horConfig.meta.position = '#uv-graph-space';
		horConfig.meta.isDownload = false;
		
		verConfig.meta.position = '#uv-graph-space';
		verConfig.meta.isDownload = false;
		
		verConfig.graph.orientation = 'Vertical';
	
		barHorTest = uv.chart('Bar', new uv.Test().getGraphDef(), horConfig);
		verConfig.graph.palette = 'Lemon';
		barVerTest = uv.chart('Bar', new uv.Test().getGraphDef(), verConfig);
		
		verConfig.graph.palette = 'Candid';
		stepUpBarHorTest = uv.chart('StepUpBar', new uv.Test().getGraphDef(), verConfig);
		
		verConfig.graph.palette = 'New Moon';
		stackedBarHorTest = uv.chart('StackedBar', new uv.Test().getGraphDef(), verConfig);
	
		lineHorTest = uv.chart('Line', new uv.Test().getGraphDef(), horConfig);
	
		areaHorTest = uv.chart('Area', new uv.Test().getGraphDef(), horConfig);
	
		stackareaHorTest = uv.chart('StackedArea', new uv.Test().getGraphDef(), horConfig);
		
		centareaVerTest = uv.chart('PercentArea', new uv.Test().getGraphDef(), verConfig);
		
		centbarVerTest = uv.chart('PercentBar', new uv.Test().getGraphDef(), verConfig);
		
		donutTest = uv.chart('Donut', new uv.Test().getGraphDef(), horConfig);
		pieTest = uv.chart('Pie', new uv.Test().getGraphDef(), horConfig);
});