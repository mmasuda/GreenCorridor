/*
 * Originally created by 5th LOD Hackathon team
 * 
 * Modify the following points to show Osaka Green Corridor jogging course
 * related facilities
 * - show them on google map instaed of Open Street Map
 * - adjust ccenter location and zoom setting 
 * - show Osaka Green Corridor jogging course
 * - show related facilities by dedicated icons
 * 
 * Please be patient that this code is not well organaized
 * 
 * Masuda Michinori
 */

function showMAP(data) {
    // GoogleMap ベースマップの定義
    var latlng = new google.maps.LatLng(34, 135);
    var myOptions = {
        zoom: 14,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

    // 中心位置決めのためのジオコーディング利用 
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'address': '大阪市北区天神橋3'
    }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            //marker.setPosition(results[0].geometry.location);
        }
    });

    // Osaka Green Corridor jogging course　コース   後日整理したいです。
    var jogCourseCoordinates = [
        new google.maps.LatLng(34.694302, 135.501154),
        new google.maps.LatLng(34.693349, 135.501025),
        new google.maps.LatLng(34.693208, 135.504373),
        new google.maps.LatLng(34.692114, 135.508096),
        new google.maps.LatLng(34.692114, 135.508096),
        new google.maps.LatLng(34.692264, 135.508214),
        new google.maps.LatLng(34.692123, 135.508707),
        new google.maps.LatLng(34.691938, 135.508600),
        new google.maps.LatLng(34.691223, 135.510746),
        new google.maps.LatLng(34.691453, 135.511862),
        new google.maps.LatLng(34.692432, 135.511947),
        new google.maps.LatLng(34.692388, 135.512269),
        new google.maps.LatLng(34.692132, 135.512269),
        new google.maps.LatLng(34.691603, 135.516754),
        new google.maps.LatLng(34.691885, 135.517441),
        new google.maps.LatLng(34.692150, 135.519458),
        new google.maps.LatLng(34.692882, 135.520348),
        new google.maps.LatLng(34.691360, 135.522161),
        new google.maps.LatLng(34.690743, 135.522333),
        new google.maps.LatLng(34.690760, 135.522515),
        new google.maps.LatLng(34.689305, 135.522687),
        new google.maps.LatLng(34.689128, 135.521614),
        new google.maps.LatLng(34.688184, 135.520348),
        new google.maps.LatLng(34.685547, 135.521249),
        new google.maps.LatLng(34.685141, 135.521947),
        new google.maps.LatLng(34.683350, 135.522075),
        new google.maps.LatLng(34.682979, 135.525906),
        new google.maps.LatLng(34.682803, 135.529135),
        new google.maps.LatLng(34.681744, 135.529049),
        new google.maps.LatLng(34.681647, 135.531216),
        new google.maps.LatLng(34.682865, 135.532321),
        new google.maps.LatLng(34.684505, 135.533169),
        new google.maps.LatLng(34.686208, 135.532558),
        new google.maps.LatLng(34.688264, 135.529607),
        new google.maps.LatLng(34.690910, 135.526474),
        new google.maps.LatLng(34.691122, 135.524736),
        new google.maps.LatLng(34.690257, 135.523138),
        new google.maps.LatLng(34.690002, 135.522601),
        new google.maps.LatLng(34.692022, 135.521689),
        new google.maps.LatLng(34.691898, 135.521335),
        new google.maps.LatLng(34.692046, 135.521356),
        new google.maps.LatLng(34.693731, 135.522762),
        new google.maps.LatLng(34.696060, 135.523438),
        new google.maps.LatLng(34.699588, 135.522708),
        new google.maps.LatLng(34.699835, 135.523105),
        new google.maps.LatLng(34.700726, 135.522515),
        new google.maps.LatLng(34.700964, 135.522901),
        new google.maps.LatLng(34.703425, 135.520616),
        new google.maps.LatLng(34.704748, 135.519468),
        new google.maps.LatLng(34.707332, 135.518621),
        new google.maps.LatLng(34.708523, 135.519211),
        new google.maps.LatLng(34.711169, 135.521550),
        new google.maps.LatLng(34.713788, 135.522161),
        new google.maps.LatLng(34.715834, 135.521625),
        new google.maps.LatLng(34.719388, 135.519232),
        new google.maps.LatLng(34.719856, 135.519071),
        new google.maps.LatLng(34.721805, 135.517355),
        new google.maps.LatLng(34.725720, 135.520841),
        new google.maps.LatLng(34.728691, 135.525047),
        new google.maps.LatLng(34.728568, 135.523931),
        new google.maps.LatLng(34.730711, 135.530433),
        new google.maps.LatLng(34.731160, 135.536849),
        new google.maps.LatLng(34.729996, 135.527107),
        new google.maps.LatLng(34.730411, 135.526560),
        new google.maps.LatLng(34.728806, 135.522966),
        new google.maps.LatLng(34.724741, 135.517859),
        new google.maps.LatLng(34.722307, 135.516636),
        new google.maps.LatLng(34.721919, 135.516797),
        new google.maps.LatLng(34.722413, 135.517301),
        new google.maps.LatLng(34.722633, 135.518030),
        new google.maps.LatLng(34.721813, 135.517312),
        new google.maps.LatLng(34.719626, 135.519189),
        new google.maps.LatLng(34.715737, 135.521625),
        new google.maps.LatLng(34.712827, 135.522054),
        new google.maps.LatLng(34.710975, 135.521335),
        new google.maps.LatLng(34.711707, 135.519736),
        new google.maps.LatLng(34.709229, 135.517891),
        new google.maps.LatLng(34.709140, 135.518148),
        new google.maps.LatLng(34.706865, 135.517226),
        new google.maps.LatLng(34.705286, 135.517397),
        new google.maps.LatLng(34.702358, 135.519018),
        new google.maps.LatLng(34.698847, 135.521743),
        new google.maps.LatLng(34.696571, 135.522247),
        new google.maps.LatLng(34.694004, 135.521657),
        new google.maps.LatLng(34.692399, 135.519962),
        new google.maps.LatLng(34.691861, 135.516453),
        new google.maps.LatLng(34.692028, 135.512859),
        new google.maps.LatLng(34.692328, 135.512924),
        new google.maps.LatLng(34.692478, 135.511915),
        new google.maps.LatLng(34.691446, 135.511818),
        new google.maps.LatLng(34.692240, 135.508836),
        new google.maps.LatLng(34.692134, 135.508729),
        new google.maps.LatLng(34.692302, 135.508224),
        new google.maps.LatLng(34.692461, 135.508256),
        new google.maps.LatLng(34.694242, 135.501406),
    ];
    // Polyline オブジェクトとしてコースを描画
    var jogCourse = new google.maps.Polyline({
        path: jogCourseCoordinates, //ポリラインの配列
        strokeColor: '#228B22', //色（#RRGGBB形式）
        strokeOpacity: 1.0, //透明度 0.0～1.0（デフォルト）
        strokeWeight: 3 //太さ（単位ピクセル）
    });
    jogCourse.setMap(map);

    // ２月のオススメ      
    var m_position = new google.maps.LatLng(34.699427, 135.520958);
    var icon = new google.maps.MarkerImage('icon/bird_48.gif',
            new google.maps.Size(48, 48));
    var markerOptions2 = {
        position: m_position,
        map: map,
        title: "カモメ",
        icon: icon
    };
    var marker2 = new google.maps.Marker(markerOptions2);
    marker2.setMap(map);
    google.maps.event.addListener(marker2, 'click', function () {
        window.open("http://www.oap.jp");
    });

    var m_position = new google.maps.LatLng(34.689256, 135.527317);
    var icon = new google.maps.MarkerImage('icon/flower_48.gif',
            new google.maps.Size(48, 48));
    var markerOptions3 = {
        position: m_position,
        map: map,
        title: "梅林",
        icon: icon
    };
    var marker3 = new google.maps.Marker(markerOptions3);
    marker3.setMap(map);
    google.maps.event.addListener(marker3, 'click', function () {
        window.open("http://www.osakapark.osgf.or.jp/hfm_park/02osakajo/ume.html");
    });

    // LODの検索結果（data)から、関連施設をアイコン別に表示
    for (var d = 0; d < data.length; d++) {
        console.log(data.length);
        var v_label = data[d]['label'].value;
        var v_iconNo = data[d]['icon'].value;
        console.log(v_iconNo);
        var v_lat = data[d]['lat'].value;
        var v_long = data[d]['long'].value;
        var v_link = data[d]['link'].value;
        console.log(v_link);
        // マーカ　位置
        var m_position = new google.maps.LatLng(v_lat, v_long);

        // ピクト設定  /icon ディレクトリに配置
        switch (v_iconNo) {
            case "1":
                var icon = new google.maps.MarkerImage('icon/sentou_g.gif',
                        new google.maps.Size(16, 16));
                break;
            case "2":
                var icon = new google.maps.MarkerImage('icon/locker_g.gif',
                        new google.maps.Size(16, 16));
                break;
            case "3":
                var icon = new google.maps.MarkerImage('icon/wc_g.gif',
                        new google.maps.Size(16, 16));
                break;
            case "4":
                var icon = new google.maps.MarkerImage('icon/water_g.gif',
                        new google.maps.Size(16, 16));
                break;
            default:
                var icon = new google.maps.MarkerImage('icon/wc_g.gif',
                        new google.maps.Size(16, 16));
                break;
        }

        // マーカ　設定：位置、タイトル、アイコン
        var markerOptions = {
            position: m_position,
            map: map,
            title: v_label,
            icon: icon
        };
        // マーカ 描画
        var marker = new google.maps.Marker(markerOptions);
//        marker.setMap(map);

        // マーカ　クリックでリンク先に飛ぶ　
        // マーカー　クリック時のイベント処理でリンクの変数値を保持できるよう
        // attahMessageで、addListenerに渡す。（クロージャへの対応）
        attachMessage(marker, v_link);
    }

}

function attachMessage(marker, link) {
    google.maps.event.addListener(marker, 'click', function () {
        window.open(link);
    });
}
