
// Add top content
var topContentText = "Xiaomi was founded in 2010 by serial entrepreneur Lei Jun, who believes that high-quality technology doesn't need to cost a fortune. We create remarkable hardware, software, and internet services for and with the help of our Mi fans. We incorporate their feedback into our product range, which currently includes the Mi Note Pro, Mi Note, Mi 4, Redmi 2, Mi TV, Mi Band and other accessories.With more than 61 million handsets sold in 2014, and products launched in Taiwan, Hong Kong, Singapore, Malaysia, Philippines, India, Indonesia and Brazil, Xiaomi is expanding its footprint across the world to become a global brand."
document.getElementById('content_container').innerHTML = "\<div class=\"topContent\">" + topContentText + "</div>";

// Devices
/*
			<div class="panelElement"><a href="#mi_1_plus">MI1 Plus</a></div>
			<div class="panelElement"><a href="#mi_1_youth">MI1 Youth</a></div>
			<div class="panelElement"><a href="#mi_1_s">MI1S</a></div>
			<div class="panelElement"><a href="#mi_1_s_youth">MI1S Youth</a></div>
			<div class="panelElement"><a href="#mi_2">MI2</a></div>
			<div class="panelElement"><a href="#mi_2_a">MI2A</a></div>
			<div class="panelElement"><a href="#mi_2_s">MI2S</a></div>
			<div class="panelElement"><a href="#mi_3">MI3</a></div>
*/
 var deviceList = [
	{
		"id" : "mi_4_c",
		"title": "Xiaomi Mi 4C",
		"description": "OS: Android 5.1\nYear: 2015",
		"image": "http://devdb.ru/data/img/img5601ced4411447.20581044p.jpg"
	},
	{
		"id" : "mi_note",
		"title": "Xiaomi MI Note",
		"description": "OS: Android 5.1\nYear: 2014",
		"image": "http://devdb.ru/data/img/img5601ced4411447.20581044p.jpg"
	},
	{
		"id" : "mi_note_pro",
		"title": "Xiaomi MI Note Pro",
		"description": "OS: Android 5.1\nYear: 2015",
		"image": "http://devdb.ru/data/img/img5601ced4411447.20581044p.jpg"
	},
	{
		"id" : "mi_1_plus",
		"title": "Xiaomi MI 1 Plus",
		"description": "OS: Android 5.1\nYear: 2015",
		"image": "http://devdb.ru/data/img/img5601ced4411447.20581044p.jpg"
	},
	{
		"id" : "mi_1_youth",
		"title": "Xiaomi MI 1 Youth",
		"description": "OS: Android 5.1\nYear: 2015",
		"image": "http://devdb.ru/data/img/img5601ced4411447.20581044p.jpg"
	},
	{
		"id" : "mi_1_s",
		"title": "Xiaomi MI 1S",
		"description": "OS: Android 5.1\nYear: 2015",
		"image": "http://devdb.ru/data/img/img5601ced4411447.20581044p.jpg"
	},
	{
		"id" : "mi_1_s_youth",
		"title": "Xiaomi MI 1S Youth",
		"description": "OS: Android 5.1\nYear: 2015",
		"image": "http://devdb.ru/data/img/img5601ced4411447.20581044p.jpg"
	}
]
for (  i in deviceList) {
	// read device
	var device_id = deviceList[i]["id"];
	var device_title = deviceList[i]["title"];
	var device_decs = deviceList[i]["description"];
	var device_img = deviceList[i]["image"];
	
	// add device in menu
	document.getElementById('panel_container').innerHTML = document.getElementById('panel_container').innerHTML + "\
		<div class=\"panelElement\">  \
			<a href=\"#" + device_id + "\">" + device_title +  "</a>\
		</div>";

	// add device in content
	document.getElementById('content_container').innerHTML = document.getElementById('content_container').innerHTML + "\
		<div class=\"content\">\
			<div class=\"content_header\">\
				<a class=\"offset\"name=\"" + device_id + "\">" + device_title + "</a>\
			</div>\
			<div class=\"content_image\">\
				<img src=\"" + device_img + "\"/>\
			</div>\
			<div class=\"content_text\">" + device_decs + "</div>\
		</div>\ ";
}