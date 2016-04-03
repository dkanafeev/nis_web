
topContentText = "Xiaomi was founded in 2010 by serial entrepreneur Lei Jun, who believes that high-quality technology doesn't need to cost a fortune. We create remarkable hardware, software, and internet services for and with the help of our Mi fans. We incorporate their feedback into our product range, which currently includes the Mi Note Pro, Mi Note, Mi 4, Redmi 2, Mi TV, Mi Band and other accessories.With more than 61 million handsets sold in 2014, and products launched in Taiwan, Hong Kong, Singapore, Malaysia, Philippines, India, Indonesia and Brazil, Xiaomi is expanding its footprint across the world to become a global brand.";
document.getElementById('content_container').innerHTML = document.getElementById('content_container').innerHTML +
                                                         "\<div class=\"topContent\">" + topContentText + "</div>";

function render_device(deviceList){
     console.log("render_device");
    for (i in deviceList) {
        // read device
        var device_id = deviceList[i]["id"];
        var device_title = deviceList[i]["title"];
        var device_decs = deviceList[i]["desc"];
        var device_img = deviceList[i]["image"];

        // add device in menu
        document.getElementById('panel_container').innerHTML = document.getElementById('panel_container').innerHTML + "\
        <div class=\"panelElement\">  \
            <a href=\"#" + device_id + "\">" + device_title +  "</a>\
        </div>";

        // add device in content
        document.getElementById('content_container').innerHTML = document.getElementById('content_container').innerHTML +
        '<div class="content">' +
        '   <div class="content_header">' +
        '       <a class="offset" name="' + device_id + '">' + device_title + '</a>' +
        '    </div>' +
        '    <div class="content_image">' +
        '        <img src="' + device_img + '"/>' +
        '    </div>' +
        '    <div class="content_text">' + device_decs + '</div>' +
        '    <form action="/del_record" method="POST">' +
        '        <input type="hidden" name="id" value="' + device_id + '"/>' +
        '        <button type="submit">Delete</button>' +
        '    </form>' +
        '</div>';
   }
}
