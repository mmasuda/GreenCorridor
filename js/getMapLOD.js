/*
 * Originally created by 5th LOD Hackathon team. 
 * 
 * Modify the following points to show Osaka Green Corridor jogging course
 * related facilities
 * - search icon number info, URL from LOD dataset in SPARQL Query statement 
 *
 * Masuda Michinori
 */


var title = '';
var url = '';
var all = '';
var keywords = '';
var limit = 11;

$(window).load(function () {
    var query = 'PREFIX schema:<http://schema.org/>' +
            'PREFIX geo:<http://www.w3.org/2003/01/geo/wgs84_pos#>' +
            'PREFIX bp:  <http://data.lodosaka.jp/GreenCorridor.ttl#>' +
            'SELECT DISTINCT ?label ?icon ?link ?lat ?long ?uri WHERE{' +
            'GRAPH <http://data.lodosaka.jp/GreenCorridor.ttl>{' +
            '?uri <http://www.w3.org/2000/01/rdf-schema#label> ?label;' +
            'bp:アイコン番号 ?icon;' +
            'bp:URL ?link;' +
            'geo:lat ?lat;' +
            'geo:long ?long.' +
            '}}';

    qr = sendQuery("http://lod.hozo.jp/repositories/lodosaka", query);

    qr.fail(
            function (xhr, textStatus, thrownError) {
                alert("Error: A '" + textStatus + "' occurred.");
            }
    );
    qr.done(
            function (d) {
                showMAP(d.results.bindings);
                //alert(d);
            }
    );

});

