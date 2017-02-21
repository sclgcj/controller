function createNode(name_str, class_str) {
	var elem = document.createElement(name_str);
	elem.setAttribute("class", class_str);
	return elem;
}

function createNodeWithVal(name_str, class_str, val) {
	var elem = document.createElement(name_str);
	elem.setAttribute("class", class_str);
	elem.innerHTML = val;
	return elem;
}

function createLiNode(name, id) {
	var elem = createNode("li", "mui-table-view-cell");
	var aelem = createNodeWithVal("a", "mui-navigate-right", name);

	//elem.setAttribute("name", name);
	elem.setAttribute("id", id);
	elem.appendChild(aelem);

	return elem;
}

function addLiNode(name, id, pelem) {
	var elem = createLiNode(name, id);
	pelem.appendChild(elem);
}

function getServList(sUrl, pelem) {
	console.log("sdfsdfsdf");
	mui.getJSON(sUrl, {}, function(raw_data) {
		console.log("raw data = " + raw_data);
		mui.each(raw_data, function(index, elem) {
			console.log("elem = " + typeof elem);
			if (typeof elem == 'object') {
				if (elem instanceof Array == true) {
					console.log("elem = " + typeof elem);
					mui.each(elem, function(index, elem) {
						var name = "" + elem.ip + ":" + elem.port;
						console.log("name = " + name);
						addLiNode(name, name, pelem);
						//addLiNode(proj.proj_name, index, ulelem);
					});
				}
			}
		});
	});
}

function addServListEvent(sUrl, sID) {
	mui(".mui-table-view").on('tap', '.mui-table-view-cell', function() {
		var name = this.getAttribute("id");
		console.log("name = " + name);
		mui.openWindow({
			url: sUrl,
			id: sID,
			extras: {
				name: name
			}
		});
	});
}