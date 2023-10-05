/**
 * @ David Bailey
 */

var map;
var centerlatlng = L.latLng(37.295206, -105.773767);

var southWest = L.latLng(-8.327415, -166.772566),
    northEast = L.latLng(78.919433, 3.559463),
    bounds = L.latLngBounds(southWest, northEast);
  

var myIcon1 = L.icon({
    iconUrl: 'http://www.broomfield.org/images/pages/N315/blue%20heading%20icons_building.png',
    iconSize: [30, 30]
});

var red = L.icon({
    iconUrl: 'img/red.png',
    iconSize: [30, 30]
});

var green = L.icon({
    iconUrl: 'img/green.png',
    iconSize: [30, 30]
});

var yellow = L.icon({
    iconUrl: 'img/yellow.png',
    iconSize: [30, 30]
});

$(document).ready(function() {
    // Create a Leaflet map
    var map = L.map('myMap').setView([37.296222, -105.773746], 17);

    var riverpointData = {
      "type": "FeatureCollection",
      "name": "river_bank_points",
      "crs": {
        "type": "name",
        "properties": {
          "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
      },
      "features": [
        { "type": "Feature", "properties": { "id": null, "name": "Point 1", "img1": "pics/num1.jpg", "img2": null, "img3": null, "img4": null, "comments": "comment number one fuck fuck butt dumb ass", "length": "47 ft", "Point": "1" }, "geometry": { "type": "Point", "coordinates": [ -105.778364998879439, 37.29554313001465 ] } },
        { "type": "Feature", "properties": { "id": null, "name": "Point 3", "img1": "pics/num3.jpg", "img2": null, "img3": null, "img4": null, "comments": null, "length": null, "Point": "3" }, "geometry": { "type": "Point", "coordinates": [ -105.776996398146196, 37.295434764199278 ] } },
        { "type": "Feature", "properties": { "id": 2, "name": "Point 2", "img1": "pics/num2.jpg", "img2": null, "img3": null, "img4": null, "comments": null, "length": "48 ft", "Point": "2" }, "geometry": { "type": "Point", "coordinates": [ -105.777445615645973, 37.29501132552668 ] } },
        { "type": "Feature", "properties": { "id": 4, "name": "Point 4", "img1": "pics/num4.jpg", "img2": null, "img3": null, "img4": null, "comments": null, "length": "36 ft", "Point": "4" }, "geometry": { "type": "Point", "coordinates": [ -105.776078136045797, 37.294697049295621 ] } },
        { "type": "Feature", "properties": { "id": 5, "name": "Point 5", "img1": "pics/num5.jpg", "img2": null, "img3": null, "img4": null, "comments": null, "length": "52 ft", "Point": "5" }, "geometry": { "type": "Point", "coordinates": [ -105.774209023135469, 37.294291661167222 ] } },
        { "type": "Feature", "properties": { "id": 6, "name": "Point 6", "img1": "pics/num6.jpg", "img2": null, "img3": null, "img4": null, "comments": null, "length": "39 ft", "Point": "6" }, "geometry": { "type": "Point", "coordinates": [ -105.773051885585261, 37.293668092337278 ] } },
        { "type": "Feature", "properties": { "id": 7, "name": "Point 7", "img1": "pics/num7.jpg", "img2": null, "img3": null, "img4": null, "comments": null, "length": "24 ft", "Point": "7" }, "geometry": { "type": "Point", "coordinates": [ -105.772696588668822, 37.29395370286818 ] } },
        { "type": "Feature", "properties": { "id": 8, "name": "Point 8", "img1": "pics/num8.jpg", "img2": null, "img3": null, "img4": null, "comments": null, "length": "42 ft", "Point": "8" }, "geometry": { "type": "Point", "coordinates": [ -105.772153862929514, 37.293693076910309 ] } },
        { "type": "Feature", "properties": { "id": 9, "name": "Point 9", "img1": "pics/num9.jpg", "img2": null, "img3": null, "img4": null, "comments": null, "length": "24 ft", "Point": "9" }, "geometry": { "type": "Point", "coordinates": [ -105.770363987743309, 37.295360316248939 ] } },
        { "type": "Feature", "properties": { "id": null, "name": "Point 10", "img1": "pics/num10.jpg", "img2": null, "img3": null, "img4": null, "comments": null, "length": null, "Point": "10" }, "geometry": { "type": "Point", "coordinates": [ -105.76993539465154, 37.295122180089017 ] } },
        { "type": "Feature", "properties": { "id": 11, "name": "Point 11", "img1": "pics/num11.jpg", "img2": null, "img3": null, "img4": null, "comments": null, "length": "40 ft", "Point": "11" }, "geometry": { "type": "Point", "coordinates": [ -105.769723982815449, 37.295760505649518 ] } },
        { "type": "Feature", "properties": { "id": 12, "name": "Point 12", "img1": "pics/num11.jpg", "img2": null, "img3": null, "img4": null, "comments": null, "length": "26 ft", "Point": "12" }, "geometry": { "type": "Point", "coordinates": [ -105.769009575650642, 37.295340828146735 ] } },
        { "type": "Feature", "properties": { "id": 13, "name": "Point 13", "img1": "pics/num13.jpg", "img2": null, "img3": null, "img4": null, "comments": null, "length": null, "Point": "13" }, "geometry": { "type": "Point", "coordinates": [ -105.768440023946269, 37.295524438957806 ] } },
        { "type": "Feature", "properties": { "id": 14, "name": "Point 14", "img1": "pics/num14.jpg", "img2": null, "img3": null, "img4": null, "comments": null, "length": null, "Point": "14" }, "geometry": { "type": "Point", "coordinates": [ -105.768210546633796, 37.295160529981963 ] } },
        { "type": "Feature", "properties": { "id": 15, "name": "Point 15", "img1": "pics/num15.jpg", "img2": null, "img3": null, "img4": null, "comments": null, "length": "34 ft", "Point": "15" }, "geometry": { "type": "Point", "coordinates": [ -105.768535024497339, 37.294259975976594 ] } },
        { "type": "Feature", "properties": { "id": 16, "name": "Point 16", "img1": "pics/num16.jpg", "img2": null, "img3": null, "img4": null, "comments": null, "length": "29 ft", "Point": "16" }, "geometry": { "type": "Point", "coordinates": [ -105.767967892742874, 37.295081389650839 ] } },
        { "type": "Feature", "properties": { "id": 17, "name": "Point 17", "img1": "pics/num17.jpg", "img2": null, "img3": null, "img4": null, "comments": null, "length": "36 ft", "Point": "17" }, "geometry": { "type": "Point", "coordinates": [ -105.777076449827717, 37.298441708797021 ] } },
        { "type": "Feature", "properties": { "id": 18, "name": "Point 18", "img1": "pics/num18.jpg", "img2": null, "img3": null, "img4": null, "comments": null, "length": "36 ft", "Point": "18" }, "geometry": { "type": "Point", "coordinates": [ -105.77587196994638, 37.296667944961172 ] } },
        { "type": "Feature", "properties": { "id": 19, "name": "Point 19", "img1": "pics/num19.jpg", "img2": null, "img3": null, "img4": null, "comments": null, "length": null, "Point": "19" }, "geometry": { "type": "Point", "coordinates": [ -105.775189701793622, 37.297193555926455 ] } },
        { "type": "Feature", "properties": { "id": 20, "name": "Point 20", "img1": "pics/num20.jpg", "img2": null, "img3": null, "img4": null, "comments": null, "length": "28 ft", "Point": "20" }, "geometry": { "type": "Point", "coordinates": [ -105.775391505507358, 37.297762531002078 ] } },
        { "type": "Feature", "properties": { "id": 21, "name": "Point 21", "img1": "pics/num21.jpg", "img2": null, "img3": null, "img4": null, "comments": null, "length": "37 ft", "Point": "21" }, "geometry": { "type": "Point", "coordinates": [ -105.773610273796848, 37.297983336833759 ] } },
        { "type": "Feature", "properties": { "id": 22, "name": "Point 22", "img1": "pics/num22.jpg", "img2": null, "img3": null, "img4": null, "comments": null, "length": "34 ft", "Point": "22" }, "geometry": { "type": "Point", "coordinates": [ -105.774913967875264, 37.295941393745004 ] } },
        { "type": "Feature", "properties": { "id": 23, "name": "Point 23", "img1": "pics/num23.jpg", "img2": null, "img3": null, "img4": null, "comments": null, "length": "64 ft", "Point": "23" }, "geometry": { "type": "Point", "coordinates": [ -105.769987494818977, 37.297570795960368 ] } },
        { "type": "Feature", "properties": { "id": null, "name": "Point 24", "img1": "pics/num24.jpg", "img2": null, "img3": null, "img4": null, "comments": null, "length": null, "Point": "24" }, "geometry": { "type": "Point", "coordinates": [ -105.768069753419041, 37.295627839284798 ] } },
        { "type": "Feature", "properties": { "id": null, "name": "Point 0", "img1": "pics/num0.jpg", "img2": null, "img3": null, "img4": null, "comments": "we added this fuck woo!", "length": null, "Point": "0" }, "geometry": { "type": "Point", "coordinates": [ -105.77826311272824, 37.294971126876547 ] } }
        ]
    };

    //  boundaryData
    var boundaryData = {
      "type": "FeatureCollection",
      "name": "property_boundary",
      "crs": {
        "type": "name",
        "properties": {
          "name": "EPSG:4326"
        }
      },
      "bbox": [-105.17899098043754, 39.95678950816371, -105.16260090096505, 40.04585340662501],
      "features": [
        {
          "type": "Feature",
          "properties": {
            "id": 1,
            "name": "big d fake ranch",
            "elevation": 1900.0,
            "acres": 140.0
          },
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [-105.16268582130038, 39.95678950816371],
                  [-105.17899098043754, 39.95689736448627],
                  [-105.17897569726867, 40.04585340662501],
                  [-105.16260090096505, 40.04572280384013],
                  [-105.16268582130038, 39.95678950816371]
                ]
              ]
            ]
          }
        }
      ]
    };

    // add polygon to the map
    var polyLayer = L.geoJSON(boundaryData, {
      style: function (feature) {
        return {
          fillColor: 'transparent', // Set fill color to transparent
          color: 'red',             // Set outline color to red
          weight: 4                 // Set outline weight
        };
      }
    }).addTo(map);

    // Add a Mapbox basemap layer (e.g., Mapbox Satellite)
    var accessToken = 'pk.eyJ1IjoiZGF2aWRqb25hdGhhbmJhaWxleSIsImEiOiJjbG45ZzUwbXMwNm1xMmxyam81czI5Yml6In0.3-wCHTMgSpT36OdwAQbHAA';
    var mapboxUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + accessToken;
    var mapboxAttribution = '© <a href="https://www.mapbox.com/">Mapbox</a>';
    var aLayerOne = L.tileLayer(mapboxUrl, {
      attribution: mapboxAttribution,
      maxZoom: 22,
      id: 'mapbox/satellite-v9', // Use 'mapbox/satellite-v9' for satellite imagery
    }).addTo(map);

    var pointLayer = L.geoJSON(riverpointData, {
      pointToLayer: function (feature, latlng) {
        // Create a custom divIcon with the number inside
        var customIcon = L.divIcon({
          className: 'custom-icon',
          html: '<div class="circle-marker"></div><div class="circle-number">' + feature.properties.Point + '</div>',
          iconSize: [40, 40] // Adjust the size as needed
        });

        // Create a marker with the custom icon
        var marker = L.marker(latlng, { icon: customIcon });

        // Bind a pop-up to the marker
        marker.bindPopup(getPopupContent(feature.properties));

        return marker;
      }
    }).addTo(map);

    // Function to generate pop-up content
    function getPopupContent(properties) {
        var popupContent = '<h2>Point: ' + properties.Point + '</h2>';

         // Check if img1 is available
        if (properties.img1) {
            popupContent += '<img class="popup-image" src="' + properties.img1 + '" alt="Image 1">';
        }

        // Check if comments are available
        if (properties.comments) {
            popupContent += '<p>Comments: ' + properties.comments + '</p>';
        }

        return popupContent;

    }




}); // end document ready
