const xmlDefaults = '<?xml version="1.0" encoding="UTF-8" ?>';
const rootOpen = '<root>';
const rootClose = '</root>';

/*

#### Usage
const exemplar = require('exemplar');
exemplar.jsonToXML(json)
exemplar.xmlToJson(xml)

*/

function jsonToXML(json) {

	// configuration options
 	const config = {
    A: "",
    B: "",
    C: ""
  }

  const xmlObj = {};

	for (var i = 0; i < json.length; i++) { 
    console.log(json[i]);
	}

};

function xmlToJson(xml) {

	// configuration options
  const config = {
    A: "",
    B: "",
    C: ""
  }

  const jsonObj = {};
};




// Changes XML to JSON
function xmlToJson(xml) {
	
	// Create the return object
	var obj = {};

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};

module.exports 