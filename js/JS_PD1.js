/**
 * @ David Bailey
 */

var map;
var centerlatlng = L.latLng(37.295206, -105.773767);

var southWest = L.latLng(-8.327415, -166.772566),
    northEast = L.latLng(78.919433, 3.559463),
    bounds = L.latLngBounds(southWest, northEast);

// Create an object to store current image indexes for each point
var currentImageIndexes = {};

// Function to initialize the current image index for a point
function initializeCurrentImageIndex(point) {
    currentImageIndexes[point] = 1;
}

// Function to generate image filenames
function getImageFilename(point, index) {
    return `pics/num${point}_${index}.JPG`;
}

function nextImage(point) {
    if (!currentImageIndexes[point]) {
        initializeCurrentImageIndex(point);
    }

    // Get the current image index for the point
    var currentIndex = currentImageIndexes[point];

    // Increment the current index
    currentIndex++;

    // Check if the current index exceeds the maximum (3 in your case)
    if (currentIndex > 3) {
        currentIndex = 1;
    }

    // Update the current image index for the point
    currentImageIndexes[point] = currentIndex;

    console.log('Next Image - Point:', point, 'Image Index:', currentIndex);
    updatePopupImage(currentIndex, point);
}

function updatePopupImage(index, point) {
    var popupImage = document.querySelector('.popup-image');
    if (popupImage) {
        popupImage.src = getImageFilename(point, index);
    }
}

$(document).ready(function() {

    // Define a variable to store the feature properties associated with popups
    var popupFeatureProperties = {};

    $(document).on('click', '.popup-next', function () {
        var popup = $(this).closest('.leaflet-popup');
        var pointElement = popup.find('h2');
        var pointText = pointElement.text().trim();
        var pointValue = pointText.split(': ')[1];
        var point = popupFeatureProperties[pointValue];

        if (point && point.Point) {
            nextImage(point.Point);
        }
    });

    // Create a Leaflet map
    var map = L.map('myMap').setView([37.296222, -105.773746], 17);

    var riverpointData =
{
"type": "FeatureCollection",
"name": "river_bank_points_wpics_comments",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "id": 1, "name": "Point 1", "img1": "pics/num1_1.JPG", "comments": "Approx 4 ft of steep erosion", "length": "47 ft", "Point": "1" }, "geometry": { "type": "Point", "coordinates": [ -105.778364998879439, 37.29554313001465 ] } },
{ "type": "Feature", "properties": { "id": 3, "name": "Point 3", "img1": "pics/num3_1.JPG", "img2": "pics/num3_2.JPG", "img3": "pics/num3_3.JPG", "img4": "pics/num3_4.JPG", "comments": "Approx 2 ft of steep erosion along large stretch of bank, fast thalweg", "length": null, "Point": "3" }, "geometry": { "type": "Point", "coordinates": [ -105.776996398146196, 37.295434764199278 ] } },
{ "type": "Feature", "properties": { "id": 2, "name": "Point 2", "img1": "pics/num2_1.JPG", "comments": "Approx 3 ft of steep erosion along large stretch of bank, near salt lick", "length": "48 ft", "Point": "2" }, "geometry": { "type": "Point", "coordinates": [ -105.777445615645973, 37.29501132552668 ] } },
{ "type": "Feature", "properties": { "id": 4, "name": "Point 4", "img1": "pics/num4_1.JPG", "img2": "pics/num4_2.JPG", "img3": "pics/num4_3.JPG", "img4": "pics/num4_4.JPG", "comments": "Approx 4 ft of steep erosion", "length": "36 ft", "Point": "4" }, "geometry": { "type": "Point", "coordinates": [ -105.776078136045797, 37.294697049295621 ] } },
{ "type": "Feature", "properties": { "id": 5, "name": "Point 5", "img1": "pics/num5_1.JPG",  "comments": "Water access for cows", "length": "52 ft", "Point": "5" }, "geometry": { "type": "Point", "coordinates": [ -105.774209023135469, 37.294291661167222 ] } },
{ "type": "Feature", "properties": { "id": 6, "name": "Point 6", "img1": "pics/num6_1.JPG", "comments": "Deep water with existing rock deposits, near beaver activity", "length": "39 ft", "Point": "6" }, "geometry": { "type": "Point", "coordinates": [ -105.773051885585261, 37.293668092337278 ] } },
{ "type": "Feature", "properties": { "id": 7, "name": "Point 7", "img1": "pics/num7_1.JPG", "img2": "pics/num7_2.JPG", "comments": "Approx 3 ft of steep erosion, near beaver activity", "length": "24 ft", "Point": "7" }, "geometry": { "type": "Point", "coordinates": [ -105.772696588668822, 37.29395370286818 ] } },
{ "type": "Feature", "properties": { "id": 8, "name": "Point 8", "img1": "pics/num8_1.JPG", "img2": "pics/num8_2.JPG", "img3": "pics/num8_3.JPG", "comments": "Approx 3 to 4 ft of steep erosion with visible white alkali soil", "length": "42 ft", "Point": "8" }, "geometry": { "type": "Point", "coordinates": [ -105.772153862929514, 37.293693076910309 ] } },
{ "type": "Feature", "properties": { "id": 9, "name": "Point 9", "img1": "pics/num9_1.JPG", "img2": "pics/num9_2.JPG", "img3": "pics/num9_3.JPG", "comments": "Fast thalweg", "length": "24 ft", "Point": "9" }, "geometry": { "type": "Point", "coordinates": [ -105.770363987743309, 37.295360316248939 ] } },
{ "type": "Feature", "properties": { "id": 10, "name": "Point 10", "img1": "pics/num10_1.JPG", "img2": "pics/num10_2.JPG", "comments": "Approx 4 ft of steep erosion, large bar opposite bank to the north", "length": null, "Point": "10" }, "geometry": { "type": "Point", "coordinates": [ -105.76993539465154, 37.295122180089017 ] } },
{ "type": "Feature", "properties": { "id": 11, "name": "Point 11", "img1": "pics/num11_1.JPG", "comments": "Approx 3 ft of steep erosion, bank is deposited with large tree trunks from past floods", "length": "40 ft", "Point": "11" }, "geometry": { "type": "Point", "coordinates": [ -105.769723982815449, 37.295760505649518 ] } },
{ "type": "Feature", "properties": { "id": 12, "name": "Point 12", "img1": "pics/num11_1.JPG", "img2": "pics/num11_2.JPG", "img3": "pics/num11_3.JPG", "comments": "Approx 4 ft of steep erosion, vegetation is mostly chicos", "length": "26 ft", "Point": "12" }, "geometry": { "type": "Point", "coordinates": [ -105.769009575650642, 37.295340828146735 ] } },
{ "type": "Feature", "properties": { "id": 13, "name": "Point 13", "img1": "pics/num13_1.JPG",  "comments": "Exposed willow roots", "length": null, "Point": "13" }, "geometry": { "type": "Point", "coordinates": [ -105.768440023946269, 37.295524438957806 ] } },
{ "type": "Feature", "properties": { "id": 14, "name": "Point 14", "img1": "pics/num14_1.JPG", "img2": "pics/num14_2.JPG", "comments": "Approx 4 ft of steep erosion, likely future oxbow", "length": null, "Point": "14" }, "geometry": { "type": "Point", "coordinates": [ -105.768210546633796, 37.295160529981963 ] } },
{ "type": "Feature", "properties": { "id": 15, "name": "Point 15", "img1": "pics/num15_1.JPG", "comments": "Gentle slope with willows", "length": "34 ft", "Point": "15" }, "geometry": { "type": "Point", "coordinates": [ -105.768535024497339, 37.294259975976594 ] } },
{ "type": "Feature", "properties": { "id": 16, "name": "Point 16", "img1": "pics/num16_1.JPG", "img2": "pics/num16_2.JPG", "img3": "pics/num16_3.JPG", "img4": "pics/num16_4.JPG", "comments": "Small water flow", "length": "29 ft", "Point": "16" }, "geometry": { "type": "Point", "coordinates": [ -105.767967892742874, 37.295081389650839 ] } },
{ "type": "Feature", "properties": { "id": 17, "name": "Point 17", "img1": "pics/num17_1.JPG", "comments": "Approx 5 ft of steep erosion", "length": "36 ft", "Point": "17" }, "geometry": { "type": "Point", "coordinates": [ -105.777076449827717, 37.298441708797021 ] } },
{ "type": "Feature", "properties": { "id": 18, "name": "Point 18", "img1": "pics/num18_1.JPG", "img2": "pics/num18_2.JPG", "comments": "Small water flow, approx 4 to 5 ft of steep erosion, exposed trees", "length": "36 ft", "Point": "18" }, "geometry": { "type": "Point", "coordinates": [ -105.77587196994638, 37.296667944961172 ] } },
{ "type": "Feature", "properties": { "id": 19, "name": "Point 19", "img1": "pics/num19_1.JPG", "comments": "Gradual bank slop", "length": null, "Point": "19" }, "geometry": { "type": "Point", "coordinates": [ -105.775189701793622, 37.297193555926455 ] } },
{ "type": "Feature", "properties": { "id": 20, "name": "Point 20", "img1": "pics/num20_1.JPG",  "comments": "River width varies significantly", "length": "28 ft", "Point": "20" }, "geometry": { "type": "Point", "coordinates": [ -105.775391505507358, 37.297762531002078 ] } },
{ "type": "Feature", "properties": { "id": 21, "name": "Point 21", "img1": "pics/num21_1.JPG", "img2": "pics/num21_2.JPG", "comments": "Approx 6 ft of steep erosion", "length": "37 ft", "Point": "21" }, "geometry": { "type": "Point", "coordinates": [ -105.773610273796848, 37.297983336833759 ] } },
{ "type": "Feature", "properties": { "id": 22, "name": "Point 22", "img1": "pics/num22_1.JPG", "comments": "Approx 3 ft of erosion", "length": "34 ft", "Point": "22" }, "geometry": { "type": "Point", "coordinates": [ -105.774913967875264, 37.295941393745004 ] } },
{ "type": "Feature", "properties": { "id": 23, "name": "Point 23", "img1": "pics/num23_1.JPG", "comments": null, "length": "64 ft", "Point": "23" }, "geometry": { "type": "Point", "coordinates": [ -105.769987494818977, 37.297570795960368 ] } },
{ "type": "Feature", "properties": { "id": 24, "name": "Point 24", "img1": "pics/num24_1.JPG", "comments": null, "length": null, "Point": "24" }, "geometry": { "type": "Point", "coordinates": [ -105.768069753419041, 37.295627839284798 ] } },
{ "type": "Feature", "properties": { "id": 0, "name": "Point 0", "img1": "pics/num0_1.JPG", "comments": "Approx 4 ft of steep erosion", "length": null, "Point": "0" }, "geometry": { "type": "Point", "coordinates": [ -105.77826311272824, 37.294971126876547 ] } }
]
}
;

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

    // pointLayer definition:
    var pointLayer = L.geoJSON(riverpointData, {
        pointToLayer: function (feature, latlng) {
            // Define the custom icon here
            var customIcon = L.divIcon({
                className: 'custom-icon',
                html: '<div class="circle-marker"></div><div class="circle-number">' + feature.properties.Point + '</div>',
                iconSize: [40, 40] // Adjust the size as needed
            });

            // Create a marker with the custom icon and bind a popup
            var marker = L.marker(latlng, { icon: customIcon });

            // Store the feature properties in the closure
            var featureProperties = feature.properties;

            // Attach the feature properties to the marker for later access
            marker.featureProperties = featureProperties;

            // Bind a popup with a data-point attribute
            var popupContent = getPopupContent(featureProperties);
            marker.bindPopup(popupContent);

            // Store the feature properties in the popupFeatureProperties object
            popupFeatureProperties[featureProperties.Point] = featureProperties;

            // Add a click event listener to the marker
            marker.on('click', function () {
                onMarkerClick(this); // Call the function to handle marker click
            });

            return marker;
        }
    }).addTo(map);

    // Function to handle marker click and open the popup
    function onMarkerClick(marker) {
        var point = marker.featureProperties.Point;
        initializeCurrentImageIndex(point);
        updatePopupImage(1, point);
    }

     // Function to generate pop-up content
     function getPopupContent(properties) {
            var popupContent = '<h2>Point: ' + properties.Point + '</h2>';

            // Check if img1 is available
            if (properties.img1) {
                popupContent += '<img class="popup-image" src="' + properties.img1 + '" alt="No Image">';

                // Add an arrow button for cycling images
                popupContent += '<div class="popup-nav">';
                popupContent += '<button class="popup-next">Next</button>';
                popupContent += '</div>';
            }

            // Check if comments are available
            if (properties.comments) {
                popupContent += '<p>Comments: ' + properties.comments + '</p>';
            }

            // Check if footage are available
            if (properties.length) {
                popupContent += '<p>Bank length: ' + properties.length + '</p>';
            }

            return popupContent;
        }

}); // end document ready
