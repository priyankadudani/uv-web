$( function () {
	var container = $('.config-details');

	$.each(details, function (key, value) {
		var configGroup = $('<div class="config-group" />').attr('id', value.id);
		var groupTitle = $('<div class="config-group-title" />').html(key);
		var groupDesc = $('<div class="config-group-desc" />').append($('<p />').html(value.desc));

		var groupContent = $('<div class="config-group-content" />');
		$.each(value.properties, function (idx, data) {
			var propGroup = $('<div class="prop-group" />');
			var propTitle = $('<div class="prop-group-title" />').html(data.name);
			var propDesc = $('<div class="prop-group-desc" />').append($('<p />').html(data.desc));
			var propInfo = $('<div class="prop-group-info" />').html(
				'<strong>Type:</strong> ' + data.type + ' | <strong>Range:</strong> ' + data.range + ' | <strong>Default:</strong> ' + data.default
			);

			propGroup.append(propTitle).append(propInfo).append(propDesc);
			groupContent.append(propGroup);
		});

		configGroup.append(groupTitle).append(groupDesc).append(groupContent);
		container.append(configGroup);
	});

});