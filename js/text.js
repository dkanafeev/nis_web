
// Add top content
var topContentText = "Xiaomi was founded in 2010 by serial entrepreneur Lei Jun, who believes that high-quality technology doesn't need to cost a fortune. We create remarkable hardware, software, and internet services for and with the help of our Mi fans. We incorporate their feedback into our product range, which currently includes the Mi Note Pro, Mi Note, Mi 4, Redmi 2, Mi TV, Mi Band and other accessories.With more than 61 million handsets sold in 2014, and products launched in Taiwan, Hong Kong, Singapore, Malaysia, Philippines, India, Indonesia and Brazil, Xiaomi is expanding its footprint across the world to become a global brand."
document.getElementById('content_container').innerHTML = "\<div class=\"topContent\">" + topContentText + "</div>";

// Devices
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
		},
	{
		"id" : "mi_2",
		"title": "Xiaomi MI 2",
		"description": "OS: Android 5.1\nYear: 2015",
		"image": "http://devdb.ru/data/img/img5601ced4411447.20581044p.jpg"
	},
	{
		"id" : "mi_2_a",
		"title": "Xiaomi MI 2A",
		"description": "OS: Android 5.1\nYear: 2015",
		"image": "http://devdb.ru/data/img/img5601ced4411447.20581044p.jpg"
	},
	{
		"id" : "mi_2_s",
		"title": "Xiaomi MI 2S",
		"description": "OS: Android 5.1\nYear: 2015",
		"image": "http://devdb.ru/data/img/img5601ced4411447.20581044p.jpg"
	},
	{
		"id" : "mi_3",
		"title": "Xiaomi MI 3",
		"description": "OS: Android 5.1\nYear: 2015",
		"image": "http://devdb.ru/data/img/img5601ced4411447.20581044p.jpg"
 	},
	{
		"id" : "mi_4",
		"title": "Xiaomi MI 4",
		"description": "OS: Android 5.1\nYear: 2015",
		"image": "http://devdb.ru/data/img/img5601ced4411447.20581044p.jpg"
 	},
	{
		"id" : "mi_5",
		"title": "Xiaomi MI 5",
		"description": "OS: Android 5.1\nYear: 2015",
		"image": "http://devdb.ru/data/img/img5601ced4411447.20581044p.jpg"
 	},
	{
		"id" : "mi_6",
		"title": "Xiaomi MI 6",
		"description": "OS: Android 5.1\nYear: 2015",
		"image": "http://devdb.ru/data/img/img5601ced4411447.20581044p.jpg"
 	},
	{
		"id" : "mi_7",
		"title": "Xiaomi MI 7",
		"description": "OS: Android 5.1\nYear: 2015",
		"image": "http://devdb.ru/data/img/img5601ced4411447.20581044p.jpg"
 	},
	{
		"id" : "mi_8",
		"title": "Xiaomi MI 8",
		"description": "OS: Android 5.1\nYear: 2015",
		"image": "http://devdb.ru/data/img/img5601ced4411447.20581044p.jpg"
 	},
	{
		"id" : "mi_9",
		"title": "Xiaomi MI 9",
		"description": "OS: Android 5.1\nYear: 2015",
		"image": "http://devdb.ru/data/img/img5601ced4411447.20581044p.jpg"
 	},
	{
		"id" : "mi_10",
		"title": "Xiaomi MI 10",
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