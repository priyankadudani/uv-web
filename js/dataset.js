var demo = {};

demo.Graphdef = function(){
	this.categories = ['Gold','Silver','Bronze'];
	this.dataset = {
		'Gold' : [
			{name: 'USA', value: 1077 },
			{name: 'URS', value: 473 },
			{name: 'GER', value: 293 },
			{name: 'GBR', value: 255 },
			{name: 'FRA', value: 249 },
			{name: 'ITA', value: 248 }
		],

		'Silver' : [
			{name: 'USA', value: 860 },
			{name: 'URS', value: 376 },
			{name: 'GER', value: 328 },
			{name: 'GBR', value: 293 },
			{name: 'FRA', value: 262 },
			{name: 'ITA', value: 211 }
		],

		'Bronze' : [
			{name: 'USA', value: 742 },
			{name: 'URS', value: 355 },
			{name: 'GER', value: 320 },
			{name: 'GBR', value: 288 },
			{name: 'FRA', value: 310 },
			{name: 'ITA', value: 227 }
		]
	};
	return this;
};

demo.GithubLanguagesData = function(){
	this.categories = ['language'];
	this.dataset = {
		'language' : [
			{name: 'Ruby', value: 12 },
			{name: 'javascript', value: 21 },
			{name: 'Java', value: 8 },
			{name: 'Shell', value: 8 },
			{name: 'Python', value: 8 },
			{name: 'PHP', value: 7 },
			{name: 'C', value: 6 },
			{name: 'C++', value: 5 },
			{name: 'Perl', value: 4 },
			{name: 'CoffeeScript', value: 3 }
		]
	};
	return this;
};

demo.WaterfallGraphdef = function() {
	this.categories = ['data'];
	this.dataset = {
            'data' : [
                {
                    "name": "2005 Actual",
                    "value": 90
                },
                {
                    "name": "Price",
                    "value": 15
                },
                {
                    "name": "Volume",
                    "value": 21
                },
                {
                    "name": "Fixes",
                    "value": -37
                },
                {
                    "name": "Taxation",
                    "value": -43
                },
                {
                    "name": "Escalation",
                    "value": -40
                },
                {
                    "name": "Mix",
                    "value": 46
                },
                {
                    "name": "Market Effect",
                    "value": 91
                },
                {
                    "name": "Partners",
                    "value": 61
                }
            ]
        }
    return this;
};