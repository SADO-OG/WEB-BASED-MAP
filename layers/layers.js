ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32632").setExtent([326041.037313, 1154325.848833, 331872.621185, 1157412.529673]);
var wms_layers = [];

var format_EXPRESSWAY_0 = new ol.format.GeoJSON();
var features_EXPRESSWAY_0 = format_EXPRESSWAY_0.readFeatures(json_EXPRESSWAY_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_EXPRESSWAY_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXPRESSWAY_0.addFeatures(features_EXPRESSWAY_0);
var lyr_EXPRESSWAY_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EXPRESSWAY_0, 
                style: style_EXPRESSWAY_0,
                interactive: true,
                title: '<img src="styles/legend/EXPRESSWAY_0.png" /> EXPRESSWAY'
            });
var format_PATH_1 = new ol.format.GeoJSON();
var features_PATH_1 = format_PATH_1.readFeatures(json_PATH_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_PATH_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PATH_1.addFeatures(features_PATH_1);
var lyr_PATH_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PATH_1, 
                style: style_PATH_1,
                interactive: true,
                title: '<img src="styles/legend/PATH_1.png" /> PATH'
            });
var format_FILLINGSTATIONS_2 = new ol.format.GeoJSON();
var features_FILLINGSTATIONS_2 = format_FILLINGSTATIONS_2.readFeatures(json_FILLINGSTATIONS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_FILLINGSTATIONS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FILLINGSTATIONS_2.addFeatures(features_FILLINGSTATIONS_2);
var lyr_FILLINGSTATIONS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FILLINGSTATIONS_2, 
                style: style_FILLINGSTATIONS_2,
                interactive: true,
                title: '<img src="styles/legend/FILLINGSTATIONS_2.png" /> FILLING STATIONS'
            });
var format_RELIGIOUSCENTERS_3 = new ol.format.GeoJSON();
var features_RELIGIOUSCENTERS_3 = format_RELIGIOUSCENTERS_3.readFeatures(json_RELIGIOUSCENTERS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_RELIGIOUSCENTERS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RELIGIOUSCENTERS_3.addFeatures(features_RELIGIOUSCENTERS_3);
var lyr_RELIGIOUSCENTERS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RELIGIOUSCENTERS_3, 
                style: style_RELIGIOUSCENTERS_3,
                interactive: true,
                title: '<img src="styles/legend/RELIGIOUSCENTERS_3.png" /> RELIGIOUS CENTERS'
            });
var format_HEALTHCENTERS_4 = new ol.format.GeoJSON();
var features_HEALTHCENTERS_4 = format_HEALTHCENTERS_4.readFeatures(json_HEALTHCENTERS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_HEALTHCENTERS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HEALTHCENTERS_4.addFeatures(features_HEALTHCENTERS_4);
var lyr_HEALTHCENTERS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HEALTHCENTERS_4, 
                style: style_HEALTHCENTERS_4,
                interactive: true,
                title: '<img src="styles/legend/HEALTHCENTERS_4.png" /> HEALTH CENTERS'
            });
var format_PROMINENTFEATURES_5 = new ol.format.GeoJSON();
var features_PROMINENTFEATURES_5 = format_PROMINENTFEATURES_5.readFeatures(json_PROMINENTFEATURES_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_PROMINENTFEATURES_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROMINENTFEATURES_5.addFeatures(features_PROMINENTFEATURES_5);
var lyr_PROMINENTFEATURES_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROMINENTFEATURES_5, 
                style: style_PROMINENTFEATURES_5,
                interactive: true,
                title: '<img src="styles/legend/PROMINENTFEATURES_5.png" /> PROMINENT FEATURES'
            });
var format_SCHOOLS_6 = new ol.format.GeoJSON();
var features_SCHOOLS_6 = format_SCHOOLS_6.readFeatures(json_SCHOOLS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_SCHOOLS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCHOOLS_6.addFeatures(features_SCHOOLS_6);
var lyr_SCHOOLS_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCHOOLS_6, 
                style: style_SCHOOLS_6,
                interactive: true,
                title: '<img src="styles/legend/SCHOOLS_6.png" /> SCHOOLS'
            });
var format_BRIDGE_7 = new ol.format.GeoJSON();
var features_BRIDGE_7 = format_BRIDGE_7.readFeatures(json_BRIDGE_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_BRIDGE_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BRIDGE_7.addFeatures(features_BRIDGE_7);
var lyr_BRIDGE_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BRIDGE_7, 
                style: style_BRIDGE_7,
                interactive: true,
                title: '<img src="styles/legend/BRIDGE_7.png" /> BRIDGE'
            });
var format_RAILROAD_8 = new ol.format.GeoJSON();
var features_RAILROAD_8 = format_RAILROAD_8.readFeatures(json_RAILROAD_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_RAILROAD_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAILROAD_8.addFeatures(features_RAILROAD_8);
var lyr_RAILROAD_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RAILROAD_8, 
                style: style_RAILROAD_8,
                interactive: true,
                title: '<img src="styles/legend/RAILROAD_8.png" /> RAILROAD'
            });
var format_MINORROADS_9 = new ol.format.GeoJSON();
var features_MINORROADS_9 = format_MINORROADS_9.readFeatures(json_MINORROADS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_MINORROADS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINORROADS_9.addFeatures(features_MINORROADS_9);
var lyr_MINORROADS_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MINORROADS_9, 
                style: style_MINORROADS_9,
                interactive: true,
                title: '<img src="styles/legend/MINORROADS_9.png" /> MINOR ROADS'
            });
var format_MAJORROADS_10 = new ol.format.GeoJSON();
var features_MAJORROADS_10 = format_MAJORROADS_10.readFeatures(json_MAJORROADS_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_MAJORROADS_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAJORROADS_10.addFeatures(features_MAJORROADS_10);
var lyr_MAJORROADS_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MAJORROADS_10, 
                style: style_MAJORROADS_10,
                interactive: true,
                title: '<img src="styles/legend/MAJORROADS_10.png" /> MAJOR ROADS'
            });

lyr_EXPRESSWAY_0.setVisible(true);lyr_PATH_1.setVisible(true);lyr_FILLINGSTATIONS_2.setVisible(true);lyr_RELIGIOUSCENTERS_3.setVisible(true);lyr_HEALTHCENTERS_4.setVisible(true);lyr_PROMINENTFEATURES_5.setVisible(true);lyr_SCHOOLS_6.setVisible(true);lyr_BRIDGE_7.setVisible(true);lyr_RAILROAD_8.setVisible(true);lyr_MINORROADS_9.setVisible(true);lyr_MAJORROADS_10.setVisible(true);
var layersList = [lyr_EXPRESSWAY_0,lyr_PATH_1,lyr_FILLINGSTATIONS_2,lyr_RELIGIOUSCENTERS_3,lyr_HEALTHCENTERS_4,lyr_PROMINENTFEATURES_5,lyr_SCHOOLS_6,lyr_BRIDGE_7,lyr_RAILROAD_8,lyr_MINORROADS_9,lyr_MAJORROADS_10];
lyr_EXPRESSWAY_0.set('fieldAliases', {'id': 'id', 'EXPRESSWAY': 'EXPRESSWAY', });
lyr_PATH_1.set('fieldAliases', {'id': 'id', 'PATH': 'PATH', });
lyr_FILLINGSTATIONS_2.set('fieldAliases', {'id': 'id', 'FILLING ST': 'FILLING ST', });
lyr_RELIGIOUSCENTERS_3.set('fieldAliases', {'id': 'id', 'RELIGIOUS': 'RELIGIOUS', });
lyr_HEALTHCENTERS_4.set('fieldAliases', {'id': 'id', 'HEALTH CEN': 'HEALTH CEN', });
lyr_PROMINENTFEATURES_5.set('fieldAliases', {'id': 'id', 'PROMINENT': 'PROMINENT', });
lyr_SCHOOLS_6.set('fieldAliases', {'id': 'id', 'SCHOOLS': 'SCHOOLS', });
lyr_BRIDGE_7.set('fieldAliases', {'id': 'id', 'BRIDGE': 'BRIDGE', });
lyr_RAILROAD_8.set('fieldAliases', {'id': 'id', 'RAILROAD': 'RAILROAD', });
lyr_MINORROADS_9.set('fieldAliases', {'id': 'id', 'MINOR ROAD': 'MINOR ROAD', });
lyr_MAJORROADS_10.set('fieldAliases', {'id': 'id', 'MAJOR ROAD': 'MAJOR ROAD', });
lyr_EXPRESSWAY_0.set('fieldImages', {'id': 'TextEdit', 'EXPRESSWAY': 'TextEdit', });
lyr_PATH_1.set('fieldImages', {'id': '', 'PATH': '', });
lyr_FILLINGSTATIONS_2.set('fieldImages', {'id': 'TextEdit', 'FILLING ST': 'TextEdit', });
lyr_RELIGIOUSCENTERS_3.set('fieldImages', {'id': 'TextEdit', 'RELIGIOUS': 'TextEdit', });
lyr_HEALTHCENTERS_4.set('fieldImages', {'id': 'TextEdit', 'HEALTH CEN': 'TextEdit', });
lyr_PROMINENTFEATURES_5.set('fieldImages', {'id': 'TextEdit', 'PROMINENT': 'TextEdit', });
lyr_SCHOOLS_6.set('fieldImages', {'id': 'TextEdit', 'SCHOOLS': 'TextEdit', });
lyr_BRIDGE_7.set('fieldImages', {'id': 'TextEdit', 'BRIDGE': 'TextEdit', });
lyr_RAILROAD_8.set('fieldImages', {'id': 'TextEdit', 'RAILROAD': 'TextEdit', });
lyr_MINORROADS_9.set('fieldImages', {'id': 'TextEdit', 'MINOR ROAD': 'TextEdit', });
lyr_MAJORROADS_10.set('fieldImages', {'id': 'TextEdit', 'MAJOR ROAD': 'TextEdit', });
lyr_EXPRESSWAY_0.set('fieldLabels', {'id': 'no label', 'EXPRESSWAY': 'inline label', });
lyr_PATH_1.set('fieldLabels', {'id': 'inline label', 'PATH': 'inline label', });
lyr_FILLINGSTATIONS_2.set('fieldLabels', {'id': 'no label', 'FILLING ST': 'inline label', });
lyr_RELIGIOUSCENTERS_3.set('fieldLabels', {'id': 'no label', 'RELIGIOUS': 'inline label', });
lyr_HEALTHCENTERS_4.set('fieldLabels', {'id': 'no label', 'HEALTH CEN': 'inline label', });
lyr_PROMINENTFEATURES_5.set('fieldLabels', {'id': 'no label', 'PROMINENT': 'inline label', });
lyr_SCHOOLS_6.set('fieldLabels', {'id': 'no label', 'SCHOOLS': 'inline label', });
lyr_BRIDGE_7.set('fieldLabels', {'id': 'no label', 'BRIDGE': 'inline label', });
lyr_RAILROAD_8.set('fieldLabels', {'id': 'no label', 'RAILROAD': 'inline label', });
lyr_MINORROADS_9.set('fieldLabels', {'id': 'no label', 'MINOR ROAD': 'inline label', });
lyr_MAJORROADS_10.set('fieldLabels', {'id': 'no label', 'MAJOR ROAD': 'inline label', });
lyr_MAJORROADS_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});