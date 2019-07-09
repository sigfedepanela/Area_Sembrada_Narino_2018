var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_LimiteDepartamental_1 = new ol.format.GeoJSON();
var features_LimiteDepartamental_1 = format_LimiteDepartamental_1.readFeatures(json_LimiteDepartamental_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_LimiteDepartamental_1.addFeatures(features_LimiteDepartamental_1);var lyr_LimiteDepartamental_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_1, 
                style: style_LimiteDepartamental_1,
                title: '<img src="styles/legend/LimiteDepartamental_1.png" /> Limite Departamental'
            });var format_reaSembradadeCaaPaneleraHectareas_2 = new ol.format.GeoJSON();
var features_reaSembradadeCaaPaneleraHectareas_2 = format_reaSembradadeCaaPaneleraHectareas_2.readFeatures(json_reaSembradadeCaaPaneleraHectareas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaSembradadeCaaPaneleraHectareas_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_reaSembradadeCaaPaneleraHectareas_2.addFeatures(features_reaSembradadeCaaPaneleraHectareas_2);var lyr_reaSembradadeCaaPaneleraHectareas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reaSembradadeCaaPaneleraHectareas_2, 
                style: style_reaSembradadeCaaPaneleraHectareas_2,
    title: 'Área Sembrada de Caña Panelera (Hectareas)<br />\
    <img src="styles/legend/reaSembradadeCaaPaneleraHectareas_2_0.png" />  10 - 140 <br />\
    <img src="styles/legend/reaSembradadeCaaPaneleraHectareas_2_1.png" />  140 - 440 <br />\
    <img src="styles/legend/reaSembradadeCaaPaneleraHectareas_2_2.png" />  440 - 1090 <br />\
    <img src="styles/legend/reaSembradadeCaaPaneleraHectareas_2_3.png" />  1090 - 1980 <br />\
    <img src="styles/legend/reaSembradadeCaaPaneleraHectareas_2_4.png" />  1980 - 3390 <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_LimiteDepartamental_1.setVisible(true);lyr_reaSembradadeCaaPaneleraHectareas_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LimiteDepartamental_1,lyr_reaSembradadeCaaPaneleraHectareas_2];
lyr_LimiteDepartamental_1.set('fieldAliases', {'nombre_dep': 'nombre_dep', 'No': 'No', });
lyr_reaSembradadeCaaPaneleraHectareas_2.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'CULTIVO': 'CULTIVO', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'R.(Ton/Ha)': 'R.(Ton/Ha)', });
lyr_LimiteDepartamental_1.set('fieldImages', {'nombre_dep': 'TextEdit', 'No': 'TextEdit', });
lyr_reaSembradadeCaaPaneleraHectareas_2.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CULTIVO': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'R.(Ton/Ha)': 'TextEdit', });
lyr_LimiteDepartamental_1.set('fieldLabels', {'nombre_dep': 'inline label', 'No': 'inline label', });
lyr_reaSembradadeCaaPaneleraHectareas_2.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'CULTIVO': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'R.(Ton/Ha)': 'inline label', });
lyr_reaSembradadeCaaPaneleraHectareas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});