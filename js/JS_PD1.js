/**
 * @ David Bailey
 */

var map;
var centerlatlng = L.latLng(37.295206, -105.773767);

var southWest = L.latLng(37.279675, -105.790567),
    northEast = L.latLng(37.312270, -105.751586),
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
    console.log("D")
    console.log(currentIndex)

    // Check if the current index exceeds the maximum (4 in your case)
    if (currentIndex >= 4) {
        console.log("S")
        console.log(currentIndex)
        // Reset the index to 1 if it exceeds the maximum
        currentIndex = 1;
    } else {
        console.log(currentIndex)
        // Increment the current index
        currentIndex++;
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

    // Create a Leaflet map with maxBounds option
    var map = L.map('myMap', {
        center: [37.296222, -105.773746],
        zoom: 17,
        maxZoom: 20,       // Sets the maximum allowed zoom level
        minZoom: 10,        // Sets the minimum allowed zoom level
        maxBounds: bounds // Set the property boundary as max bounds
});

    // Listen for the zoomend event
    map.on('zoomend', function () {
        var currentZoom = map.getZoom();

        // Check if the current zoom level is beyond your desired range
        if (currentZoom < 10) {
            map.setZoom(10); // Set the zoom level back to the minimum
        } else if (currentZoom > 20) {
            map.setZoom(20); // Set the zoom level back to the maximum
        }
    });

    var riverpointData =
        {
        "type": "FeatureCollection",
        "name": "river_bank_points_wpics_comments",
        "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
        "features": [
        { "type": "Feature", "properties": { "id": 1, "name": "Point 1", "img1": "pics/num1_1.JPG", "comments": "Approx 4 ft of steep erosion", "length": "47 ft", "Point": "1" }, "geometry": { "type": "Point", "coordinates": [ -105.778364998879439, 37.29554313001465 ] } },
        { "type": "Feature", "properties": { "id": 3, "name": "Point 3", "img1": "pics/num3_1.JPG", "img2": "pics/num3_2.JPG", "img3": "pics/num3_3.JPG", "img4": "pics/num3_4.JPG", "comments": "Approx 2 ft of steep erosion along large stretch of bank, fast thalweg", "length": "180 ft", "Point": "3" }, "geometry": { "type": "Point", "coordinates": [ -105.776996398146196, 37.295434764199278 ] } },
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
        { "type": "Feature", "properties": { "id": 14, "name": "Point 14", "img1": "pics/num14_1.JPG", "comments": "Approx 4 ft of steep erosion, likely future oxbow", "length": null, "Point": "14" }, "geometry": { "type": "Point", "coordinates": [ -105.768210546633796, 37.295160529981963 ] } },
        { "type": "Feature", "properties": { "id": 15, "name": "Point 15", "img1": "pics/num15_1.JPG", "comments": "Gentle slope with willows", "length": "34 ft", "Point": "15" }, "geometry": { "type": "Point", "coordinates": [ -105.768535024497339, 37.294259975976594 ] } },
        { "type": "Feature", "properties": { "id": 16, "name": "Point 16", "img1": "pics/num16_1.JPG", "img2": "pics/num16_2.JPG", "img3": "pics/num16_3.JPG", "img4": "pics/num16_4.JPG", "comments": "Small water flow", "length": "29 ft", "Point": "16" }, "geometry": { "type": "Point", "coordinates": [ -105.767967892742874, 37.295081389650839 ] } },
        { "type": "Feature", "properties": { "id": 17, "name": "Point 17", "img1": "pics/num17_1.JPG", "comments": "Approx 5 ft of steep erosion", "length": "36 ft", "Point": "17" }, "geometry": { "type": "Point", "coordinates": [ -105.777076449827717, 37.298441708797021 ] } },
        { "type": "Feature", "properties": { "id": 18, "name": "Point 18", "img1": "pics/num18_1.JPG", "img2": "pics/num18_2.JPG", "comments": "Small water flow, approx 4 to 5 ft of steep erosion, exposed trees", "length": "36 ft", "Point": "18" }, "geometry": { "type": "Point", "coordinates": [ -105.77587196994638, 37.296667944961172 ] } },
        { "type": "Feature", "properties": { "id": 19, "name": "Point 19", "img1": "pics/num19_1.JPG", "comments": "Gradual bank slop", "length": null, "Point": "19" }, "geometry": { "type": "Point", "coordinates": [ -105.775189701793622, 37.297193555926455 ] } },
        { "type": "Feature", "properties": { "id": 20, "name": "Point 20", "img1": "pics/num20_1.JPG",  "comments": "River width varies significantly", "length": "28 ft", "Point": "20" }, "geometry": { "type": "Point", "coordinates": [ -105.775391505507358, 37.297762531002078 ] } },
        { "type": "Feature", "properties": { "id": 21, "name": "Point 21", "img1": "pics/num21_1.JPG", "img2": "pics/num21_2.JPG", "comments": "Approx 6 ft of steep erosion", "length": "37 ft", "Point": "21" }, "geometry": { "type": "Point", "coordinates": [ -105.773610273796848, 37.297983336833759 ] } },
        { "type": "Feature", "properties": { "id": 22, "name": "Point 22", "img1": "pics/num22_1.JPG", "comments": "Approx 3 ft of erosion", "length": "34 ft", "Point": "22" }, "geometry": { "type": "Point", "coordinates": [ -105.774913967875264, 37.295941393745004 ] } },
        { "type": "Feature", "properties": { "id": 23, "name": "Point 23", "img1": "pics/num23_1.JPG", "comments": null, "length": "216 ft", "Point": "23" }, "geometry": { "type": "Point", "coordinates": [ -105.769987494818977, 37.297570795960368 ] } },
        { "type": "Feature", "properties": { "id": 0, "name": "Point 0", "img1": "pics/num0_1.JPG", "comments": "Approx 4 ft of steep erosion", "length": null, "Point": "0" }, "geometry": { "type": "Point", "coordinates": [ -105.77826311272824, 37.294971126876547 ] } }
        ]
        }
        ;


    var banklineData = {
        "type": "FeatureCollection",
        "name": "river_bank_len_updates2",
        "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
        "features": [
        { "type": "Feature", "properties": { "id": 1, "length": 47 }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -105.778505125004457, 37.295450821903671 ], [ -105.778469224800048, 37.295494137815481 ], [ -105.778445272428868, 37.295518212260724 ], [ -105.778385287627358, 37.295551982822467 ], [ -105.778331238987803, 37.29556652698254 ], [ -105.778265242392692, 37.295600312555464 ], [ -105.778193102012494, 37.295600493390083 ], [ -105.778133003884761, 37.295605446873708 ], [ -105.778108957089529, 37.295605507128478 ], [ -105.778054814098638, 37.295596037034819 ], [ -105.778054814098638, 37.295596037034819 ] ] ] } },
        { "type": "Feature", "properties": { "id": 2, "length": 48 }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -105.777607802907809, 37.295049628763927 ], [ -105.777505604827766, 37.295049884327021 ], [ -105.777367318031963, 37.295045427116946 ], [ -105.77731321316891, 37.295045562309554 ], [ -105.777259108305643, 37.2950456974758 ], [ -105.777217026745177, 37.295045802586863 ], [ -105.777187006071173, 37.2950554833008 ], [ -105.777139025583566, 37.29508442032877 ], [ -105.777091026271464, 37.295108554514186 ] ] ] } },
        { "type": "Feature", "properties": { "id": 3, "length": 181 }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -105.777031999016899, 37.295387268304474 ], [ -105.776972182648322, 37.295464263511342 ], [ -105.776924239344254, 37.295502806102355 ], [ -105.776876220904683, 37.295522137378178 ], [ -105.77681020489068, 37.295551119260942 ], [ -105.77671409281821, 37.295570570398453 ], [ -105.776635959522707, 37.295575568032397 ], [ -105.776557844965467, 37.295585368435461 ], [ -105.776455702335795, 37.295600031504392 ], [ -105.775997933796347, 37.295375435827395 ], [ -105.775865153178813, 37.295241285567855 ], [ -105.775810562002164, 37.295116546633899 ], [ -105.775761870494136, 37.294962975815267 ], [ -105.775797454226648, 37.294838012824194 ], [ -105.775833262232496, 37.294770683689208 ] ] ] } },
        { "type": "Feature", "properties": { "id": 4, "length": 36 }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -105.776085619605951, 37.2947364361819 ], [ -105.776085395001886, 37.29467880232739 ], [ -105.776091163296542, 37.294616350700778 ], [ -105.776096987734249, 37.294568307538739 ], [ -105.776096856710097, 37.294534687794034 ], [ -105.776090714080539, 37.294501083003972 ], [ -105.776078522421201, 37.294457887526875 ], [ -105.776060337893767, 37.29441950982222 ] ] ] } },
        { "type": "Feature", "properties": { "id": 5, "length": 52 }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -105.77441245284831, 37.294241087299206 ], [ -105.774370539167151, 37.294284416710795 ], [ -105.774262535118211, 37.294337515169666 ], [ -105.774118275492484, 37.294342674408917 ], [ -105.774034113197359, 37.294342882233373 ], [ -105.773937927716617, 37.294343119668895 ], [ -105.773877811790825, 37.294343268023781 ] ] ] } },
        { "type": "Feature", "properties": { "id": 6, "length": 39 }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -105.773261813460365, 37.293614750865039 ], [ -105.773159617434658, 37.293615002426293 ], [ -105.773075437488529, 37.29361040670576 ], [ -105.772985264529652, 37.293610628525037 ], [ -105.772931160754055, 37.293610761581427 ], [ -105.772895165571953, 37.29363006154319 ], [ -105.772859244362252, 37.293668572766258 ], [ -105.772859262860266, 37.293673375584483 ] ] ] } },
        { "type": "Feature", "properties": { "id": 7, "length": 24 }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -105.772812280262272, 37.293961662927011 ], [ -105.772752257111989, 37.293985824768505 ], [ -105.772674162255981, 37.294000425246644 ], [ -105.772620058182113, 37.294000558151438 ], [ -105.772559850155247, 37.293976691695747 ] ] ] } },
        { "type": "Feature", "properties": { "id": 8, "length": 42 }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -105.772306330764977, 37.29370835357431 ], [ -105.77219812306177, 37.293708618998856 ], [ -105.772071954518935, 37.293728139801523 ], [ -105.771999852909033, 37.293737922247757 ], [ -105.771933781256962, 37.293752492737461 ], [ -105.771891737321724, 37.293762201466748 ], [ -105.771849748663755, 37.293786318636442 ] ] ] } },
        { "type": "Feature", "properties": { "id": 9, "length": 24 }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -105.770467114030296, 37.295369839538317 ], [ -105.770383078818369, 37.295403664365686 ], [ -105.770316950301904, 37.295403825436452 ], [ -105.770244810101786, 37.295404001105084 ], [ -105.770208740001578, 37.295404088921835 ] ] ] } },
        { "type": "Feature", "properties": { "id": 11, "length": 40 }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -105.76978320906062, 37.295746127786742 ], [ -105.76975336995406, 37.295803834753961 ], [ -105.769717427648672, 37.295837542193439 ], [ -105.769675473585963, 37.295871264228516 ], [ -105.769627416359839, 37.295880986720753 ], [ -105.769567317395499, 37.295885935567448 ], [ -105.769519223600255, 37.295886052360302 ], [ -105.769434931593139, 37.295852636913757 ], [ -105.769434931593139, 37.295852636913757 ] ] ] } },
        { "type": "Feature", "properties": { "id": 12, "length": 26 }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -105.769096414344801, 37.295363565429781 ], [ -105.76895204285232, 37.295339901010635 ], [ -105.768861867679263, 37.295340119480208 ], [ -105.768807762575165, 37.295340250526777 ] ] ] } },
        { "type": "Feature", "properties": { "id": 15, "length": 34 }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -105.768641768331307, 37.294370473272394 ], [ -105.768587354421328, 37.294288956251748 ], [ -105.768551230268443, 37.294274635066749 ], [ -105.7684910597835, 37.294260372041151 ], [ -105.768430907520724, 37.294250911803992 ], [ -105.768358768489932, 37.294251086246661 ], [ -105.768322698974401, 37.294251173450412 ] ] ] } },
        { "type": "Feature", "properties": { "id": 16, "length": 29 }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -105.768031292990628, 37.295087576276266 ], [ -105.767965346429932, 37.295135764185197 ], [ -105.767935397112097, 37.295164653693732 ], [ -105.767863311628773, 37.29517923628692 ], [ -105.767833253304858, 37.295179308823393 ], [ -105.767749035541712, 37.295165103409715 ] ] ] } },
        { "type": "Feature", "properties": { "id": 23, "length": 216 }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -105.768548339628381, 37.296652525519733 ], [ -105.768606572006334, 37.296765270111912 ], [ -105.768613344926578, 37.296857614590031 ], [ -105.768684500892036, 37.296990852522185 ], [ -105.768787809810917, 37.297134274886361 ], [ -105.768891021768269, 37.297252041599535 ], [ -105.768987655432767, 37.297328774878231 ], [ -105.769103557632278, 37.297405461363965 ], [ -105.769206634017308, 37.29748731000327 ], [ -105.76943820547163, 37.297579109037301 ], [ -105.769772178712401, 37.29758565510128 ], [ -105.76983229739821, 37.297585508969753 ], [ -105.769976582243132, 37.297585158121279 ], [ -105.770060693474107, 37.297570544877104 ], [ -105.77014480467038, 37.297555931569313 ], [ -105.770198783233624, 37.297522180047984 ], [ -105.770246749885189, 37.297488443138576 ], [ -105.770294734816218, 37.297459509040806 ] ] ] } },
        { "type": "Feature", "properties": { "id": 21, "length": 37 }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -105.773814381498809, 37.29815210251607 ], [ -105.773693772066579, 37.298056342396812 ], [ -105.773621221055734, 37.297950857938012 ], [ -105.773572866200197, 37.297883736831821 ] ] ] } },
        { "type": "Feature", "properties": { "id": 22, "length": 34 }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -105.774984756268793, 37.296098381243517 ], [ -105.774984495270587, 37.296031141679308 ], [ -105.774954268826662, 37.295987990711836 ], [ -105.774936065876105, 37.295944809955706 ], [ -105.774887804324635, 37.295901703644915 ], [ -105.774863664253701, 37.295877749069433 ], [ -105.774833587008231, 37.295873020676325 ], [ -105.774791486323167, 37.295868322042459 ] ] ] } },
        { "type": "Feature", "properties": { "id": 20, "length": 28 }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -105.775328450877097, 37.297908213268094 ], [ -105.775382240537368, 37.297826430897302 ], [ -105.775399921445313, 37.297735132345785 ], [ -105.775423726217525, 37.297672635868068 ] ] ] } },
        { "type": "Feature", "properties": { "id": 18, "length": 36 }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -105.776038981805868, 37.296652897756303 ], [ -105.775930769619137, 37.29665316682042 ], [ -105.775846641987073, 37.296662981675375 ], [ -105.775702452507488, 37.296687354293951 ], [ -105.775636397553285, 37.296706729846306 ] ] ] } },
        { "type": "Feature", "properties": { "id": 17, "length": 36 }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -105.777218328312273, 37.298451037643368 ], [ -105.777122212417439, 37.298470489174264 ], [ -105.777044057169306, 37.298470684271898 ], [ -105.776965939476128, 37.298480484982271 ], [ -105.776905820045712, 37.298480634977629 ], [ -105.776821615306872, 37.298471239248599 ], [ -105.776821615306872, 37.298471239248599 ] ] ] } }
        ]
        }

    //  boundaryData
    var boundaryData = {
        "type": "FeatureCollection",
        "name": "project_bounds",
        "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
        "features": [
        { "type": "Feature", "properties": { "id": 1, "name": "big d fake ranch", "elevation": 1900.0, "acres": 140.0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -105.765229646779943, 37.291142220610872, 0.0 ], [ -105.778773575037249, 37.29114091623682, 0.0 ], [ -105.778841061864128, 37.298589286355245, 0.0 ], [ -105.765283871820756, 37.298258960042148, 0.0 ], [ -105.765229646779943, 37.291142220610872, 0.0 ] ] ] ] } }
        ]
        }
    // property bounds
    var boundaryLayer = L.geoJSON(boundaryData, {
      style: {
        color: 'red',  // Set the outline color to red
        weight: 5,           // Line thickness
        opacity: 0.5,
        fill: false     // Make sure the polygons are not filled
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

    // Create a new GeoJSON layer for banklineData
    var banklineLayer = L.geoJSON(banklineData, {
        style: {
            color: "#0077be",      // Line color
            weight: 12,       // Line thickness
            opacity: 0.5         // Line opacity (0 to 1)
        }
    }).addTo(map);

    // Function to handle marker click and open the popup
    function onMarkerClick(marker) {
        var point = marker.featureProperties.Point;
        initializeCurrentImageIndex(point);
        updatePopupImage(1, point);
    }

    map.on('zoomend', function () {
        var currentZoom = map.getZoom();

        console.log(currentZoom)

        // Adjust line weight based on the zoom level
        if (currentZoom >= 20) {
            banklineLayer.setStyle({ weight: 40 }); // Thick lines
        } else if (currentZoom >= 18) {
            banklineLayer.setStyle({ weight: 20 }); // Medium lines
        } else if (currentZoom >= 16) {
            banklineLayer.setStyle({ weight: 15 }); // Medium lines
        } else if (currentZoom >= 14) {
            banklineLayer.setStyle({ weight: 10 }); // Medium lines
        } else if (currentZoom >= 12) {
            banklineLayer.setStyle({ weight: 5 }); // Medium lines
        } else if (currentZoom >= 10) {
            banklineLayer.setStyle({ weight: 5 }); // Medium lines
        } else {
            banklineLayer.setStyle({ weight: 5 }); // Default (thin) lines
        }
    });

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

