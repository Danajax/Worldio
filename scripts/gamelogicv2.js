var nameInput = document.getElementById('myInput'); //lagrer input fra form som nameInput

//array for landene
let listCountry = ["Afghanistan", "African Republic", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri lanka", "St Kitts and Nevis", "St Lucia", "St vincent", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

//latitude og longtidude fra: https://developers.google.com/public-data/docs/canonical/countries_csv

let latlong = {
    Afghanistan: [33.93911, 67.709953],
    UnitedArabEmirates: [23.424076, 53.847818],
    AntiguaandBarbuda: [17.060816, -61.796428],
    Anguilla: [18.220554, -63.068615],
    Albania: [41.153332, 20.168331],
    Armenia: [40.069099, 45.038189],
    Angola: [-11.202692, 17.873887],
    Argentina: [-38.416097, -63.616672],
    AmericanSamoa: [-14.270972, -170.132217],
    Austria: [47.516231, 14.550072],
    Australia: [-25.274398, 133.775136],
    Aruba: [12.52111, -69.968338],
    Andorra: [42.546245, 1.601554],
    Azerbaijan: [40.143105, 47.576927],
    BosniaandHerzegovina: [43.915886, 17.679076],
    Barbados: [13.193887, -59.543198],
    Bangladesh: [23.684994, 90.356331],
    Belgium: [50.503887, 4.469936],
    BurkinaFaso: [12.238333, -1.561593],
    Bulgaria: [42.733883, 25.48583],
    Bahrain: [25.930414, 50.637772],
    Burundi: [-3.373056, 29.918886],
    Benin: [9.30769, 2.315834],
    Bermuda: [32.321384, -64.75737],
    Brunei: [4.535277, 114.727669],
    Bolivia: [-16.290154, -63.588653],
    Brazil: [-14.235004, -51.92528],
    Bahamas: [25.03428, -77.39628],
    Bhutan: [27.514162, 90.433601],
    BouvetIsland: [-54.423199, 3.413194],
    Botswana: [-22.328474, 24.684866],
    Belarus: [53.709807, 27.953389],
    Belize: [17.189877, -88.49765],
    Canada: [56.130366, -106.346771],
    DemocraticRepublicCongo: [-4.038333, 21.758664],
    AfricanRepublic: [6.611111, 20.939444],
    Congo: [0.228021, 15.827659],
    Switzerland: [46.818188, 8.227512],
    CookIslands: [-21.236736, -159.777671],
    Chile: [-35.675147, -71.542969],
    Cameroon: [7.369722, 12.354722],
    China: [35.86166, 104.195397],
    Colombia: [4.570868, -74.297333],
    CostaRica: [9.748917, -83.753428],
    Cuba: [21.521757, -77.781167],
    CapeVerde: [16.002082, -24.013197],
    ChristmasIsland: [-10.447525, 105.690449],
    Cyprus: [35.126413, 33.429859],
    CzechRepublic: [49.817492, 15.472962],
    Germany: [51.165691, 10.451526],
    Djibouti: [11.825138, 42.590275],
    Denmark: [56.26392, 9.501785],
    Dominica: [15.414999, -61.370976],
    DominicanRepublic: [18.735693, -70.162651],
    Algeria: [28.033886, 1.659626],
    Ecuador: [-1.831239, -78.183406],
    Estonia: [58.595272, 25.013607],
    Egypt: [26.820553, 30.802498],
    Eritrea: [15.179384, 39.782334],
    Spain: [40.463667, -3.74922],
    Ethiopia: [9.145, 40.489673],
    Finland: [61.92411, 25.748151],
    Fiji: [-16.578193, 179.414413],
    Micronesia: [7.425554, 150.550812],
    France: [46.227638, 2.213749],
    Gabon: [-0.803689, 11.609444],
    UnitedKingdom: [55.378051, -3.435973],
    Grenada: [12.262776, -61.604171],
    Georgia: [42.315407, 43.356892],
    FrenchGuiana: [3.933889, -53.125782],
    Ghana: [7.946527, -1.023194],
    Gibraltar: [36.137741, -5.345374],
    Greenland: [71.706936, -42.604303],
    Gambia: [13.443182, -15.310139],
    Guinea: [9.945587, -9.696645],
    Guadeloupe: [16.995971, -62.067641],
    EquatorialGuinea: [1.650801, 10.267895],
    Greece: [39.074208, 21.824312],
    Guatemala: [15.783471, -90.230759],
    Guam: [13.444304, 144.793731],
    GuineaBissau: [11.803749, -15.180413],
    Guyana: [4.860416, -58.93018],
    Honduras: [15.199999, -86.241905],
    Croatia: [45.1, 15.2],
    Haiti: [18.971187, -72.285215],
    Hungary: [47.162494, 19.503304],
    Indonesia: [-0.789275, 113.921327],
    Ireland: [53.41291, -8.24389],
    Israel: [31.046051, 34.851612],
    India: [20.593684, 78.96288],
    Iraq: [33.223191, 43.679291],
    Iran: [32.427908, 53.688046],
    Iceland: [64.963051, -19.020835],
    Italy: [41.87194, 12.56738],
    Jamaica: [18.109581, -77.297508],
    Jordan: [30.585164, 36.238414],
    Japan: [36.204824, 138.252924],
    Kenya: [-0.023559, 37.906193],
    Kyrgyzstan: [41.20438, 74.766098],
    Cambodia: [12.565679, 104.990963],
    Kiribati: [-3.370417, -168.734039],
    Comoros: [-11.875001, 43.872219],
    StKittsandNevis: [17.357822, -62.782998],
    NorthKorea: [40.339852, 127.510093],
    SouthKorea: [35.907757, 127.766922],
    Kuwait: [29.31166, 47.481766],
    CaymanIslands: [19.513469, -80.566956],
    Kazakhstan: [48.019573, 66.923684],
    Laos: [19.85627, 102.495496],
    Lebanon: [33.854721, 35.862285],
    StLucia: [13.909444, -60.978893],
    Liechtenstein: [47.166, 9.555373],
    SriLanka: [7.873054, 80.771797],
    Liberia: [6.428055, -9.429499],
    Lesotho: [-29.609988, 28.233608],
    Lithuania: [55.169438, 23.881275],
    Luxembourg: [49.815273, 6.129583],
    Latvia: [56.879635, 24.603189],
    Libya: [26.3351, 17.228331],
    Morocco: [31.791702, -7.09262],
    Monaco: [43.750298, 7.412841],
    Moldova: [47.411631, 28.369885],
    Montenegro: [42.708678, 19.37439],
    Madagascar: [-18.766947, 46.869107],
    MarshallIslands: [7.131474, 171.184478],
    Macedonia: [41.608635, 21.745275],
    Mali: [17.570692, -3.996166],
    Myanmar: [21.913965, 95.956223],
    Mongolia: [46.862496, 103.846656],
    Macau: [22.198745, 113.543873],
    Martinique: [14.641528, -61.024174],
    Mauritania: [21.00789, -10.940835],
    Montserrat: [16.742498, -62.187366],
    Malta: [35.937496, 14.375416],
    Mauritius: [-20.348404, 57.552152],
    Maldives: [3.202778, 73.22068],
    Malawi: [-13.254308, 34.301525],
    Mexico: [23.634501, -102.552784],
    Malaysia: [4.210484, 101.975766],
    Mozambique: [-18.665695, 35.529562],
    Namibia: [-22.95764, 18.49041],
    Caledonia: [-20.904305, 165.618042],
    Niger: [17.607789, 8.081666],
    Nigeria: [9.081999, 8.675277],
    Nicaragua: [12.865416, -85.207229],
    Netherlands: [52.132633, 5.291266],
    Norway: [60.472024, 8.468946],
    Nepal: [28.394857, 84.124008],
    Nauru: [-0.522778, 166.931503],
    Niue: [-19.054445, -169.867233],
    NewZealand: [-40.900557, 174.885971],
    Oman: [21.512583, 55.923255],
    Panama: [8.537981, -80.782127],
    Peru: [-9.189967, -75.015152],
    FrenchPolynesia: [-17.679742, -149.406843],
    PapuaNewGuinea: [-6.314993, 143.95555],
    Philippines: [12.879721, 121.774017],
    Pakistan: [30.375321, 69.345116],
    Poland: [51.919438, 19.145136],
    PuertoRico: [18.220833, -66.590149],
    Portugal: [39.399872, -8.224454],
    Palau: [7.51498, 134.58252],
    Paraguay: [-23.442503, -58.443832],
    Qatar: [25.354826, 51.183884],
    Romania: [45.943161, 24.96676],
    Serbia: [44.016521, 21.005859],
    Russia: [61.52401, 105.318756],
    Rwanda: [-1.940278, 29.873888],
    SaudiArabia: [23.885942, 45.079162],
    SolomonIslands: [-9.64571, 160.156194],
    Seychelles: [-4.679574, 55.491977],
    Sudan: [12.862807, 30.217636],
    Sweden: [60.128161, 18.643501],
    Singapore: [1.352083, 103.819836],
    Slovenia: [46.151241, 14.995463],
    Slovakia: [48.669026, 19.699024],
    SierraLeone: [8.460555, -11.779889],
    SanMarino: [43.94236, 12.457777],
    Senegal: [14.497401, -14.452362],
    Somalia: [5.152149, 46.199616],
    Suriname: [3.919305, -56.027783],
    SaoTomeandPrincipe: [0.18636, 6.613081],
    ElSalvador: [13.794185, -88.89653],
    Syria: [34.802075, 38.996815],
    Chad: [15.454166, 18.732207],
    Togo: [8.619543, 0.824782],
    Thailand: [15.870032, 100.992541],
    Tajikistan: [38.861034, 71.276093],
    EastTimor: [-8.874217, 125.727539],
    Turkmenistan: [38.969719, 59.556278],
    Tunisia: [33.886917, 9.537499],
    Tonga: [-21.178986, -175.198242],
    Turkey: [38.963745, 35.243322],
    TrinidadandTobago: [10.691803, -61.222503],
    Tuvalu: [-7.109535, 177.64933],
    Taiwan: [23.69781, 120.960515],
    Tanzania: [-6.369028, 34.888822],
    Ukraine: [48.379433, 31.16558],
    Uganda: [1.373333, 32.290275],
    UnitedStates: [37.09024, -95.712891],
    Uruguay: [-32.522779, -55.765835],
    Uzbekistan: [41.377491, 64.585262],
    VaticanCity: [41.902916, 12.453389],
    StVincent: [12.984305, -61.287228],
    Venezuela: [6.42375, -66.58973],
    Vietnam: [14.058324, 108.277199],
    Vanuatu: [-15.376706, 166.959158],
    Samoa: [-13.759029, -172.104629],
    Kosovo: [42.602636, 20.902977],
    Yemen: [15.552727, 48.516388],
    Mayotte: [-12.8275, 45.166244],
    SouthAfrica: [-30.559482, 22.937506],
    Zambia: [-13.133897, 27.849332],
    Zimbabwe: [-19.015438, 29.154857]
}


//calculate approx shortest distance with respect to their lat and longt
function haversine(lat1, long1, lat2, long2) {
    var R = 6371;
    var dLat = deg2rad(lat2 - lat1);
    var dLong = deg2rad(long2 - long1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);

    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
}
//simple conversion function deg to radians
function deg2rad(deg) {
    return deg * (Math.PI / 180)
}
// console.log(haversine(Afghanistan[0], Afghanistan[1], Andorra[0], Andorra[1]));

let random027; //declare a variable
//funksjon som generer ett tilfeldig bilde, og som skriver ut bildet i html
function writeimg() {
    random027 = Math.floor(Math.random() * (listCountry.length)); //lager et tilfeldig generert tall, for å indexere i arrayen
    document.getElementById("bildeavland").innerHTML = `<img src="./bilder/countshape/${listCountry[random027].replace(/\s+/g, '')}.png">`; //referer til bildene, som samsvarer med elementene i arrayen 
    console.log(listCountry[random027]);
}
writeimg(); //executer funksjonen

// let ans = listCountry[random027];

let wiper = document.getElementById('main');
function writehtml(){
    wiper.remove();
    document.getElementById('main2').innerHTML = `<p>Time is out! "cmd/ctrl + r" to play again.</p><p>Score: ${scr}</p>`
    localStorage.setItem('GameScore', scr);
    
    
}
setTimeout(writehtml, 602*1000); //10 min 2 secs which starts once window has loaded 

// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// let startgame = document.getElementById('Startgame');
// startgame.addEventListener('click', startTimer(60, document.querySelector('#time')));

let tryn = 20; // antall forsøk
let scr = 0; // antall riktige ved start 

function checkForMatch() {  //funksjon som ksal sjekke om input stemmer med fasit, altså array verdiene

    if (((nameInput.value)).split(' ').join('') == listCountry[random027].split(' ').join('')) {
        scr++;
        document.getElementById('torf').innerHTML = `<p>Correct ${listCountry[random027]} was the correct country </p>`;
        listCountry.splice(random027, 1);
        writeimg();
        nameInput.value = ''; //når formet er submittet, skal input veriden i placeholderen bli blank
        document.getElementById('score').innerHTML = `<p>${scr} / ${listCountry.length + scr} </p>`;
        //hvis svaret er riktig inkrementeres scoren, og vi bruker DOM for å gi tilbakemelding i html om at man har skrevet riktig svar. 
        if (listCountry.length == 0) {
            wiper.remove();
            document.getElementById('main2').innerHTML = `<p>You must be a true genius! "cmd/ctrl + r" to play again.</p><p>Score: ${scr}</p>`;
            localStorage.setItem('GameScore', scr);
            

        }
        //hvis listcountry er tom, er spillet ferdig
    }
    else if (listCountry.includes((nameInput.value)) == false) {
        document.getElementById('torf').innerHTML = `<p>Please enter a country</p>`
        nameInput.value = ''; 
        //elseif statement used, if the user has given an input which is not a country, i didn't want to deduce tries("tryn") due to spelling errors

    }
    else {
        if (tryn == 0) {
            document.getElementById('torf').innerHTML = `<p>You have lost! The correct answer was ${listCountry[random027]}. "cmd/ctrl + r" to play again. Score: ${scr}</p>`;
            localStorage.setItem('GameScore', scr);
            
        }
        //hvis brukeren har brukt opp forsøkene sine, får spilleren en beskjed om dette. 

        else {
            document.getElementById(`try${tryn}`).innerHTML = `${nameInput.value}`;
            document.getElementById(`dis${tryn}`).innerHTML = `${Math.floor(haversine(latlong[(nameInput.value).split(' ').join('')][0], latlong[(nameInput.value).split(' ').join('')][1], latlong[listCountry[random027].split(' ').join('')][0], latlong[listCountry[random027].split(' ').join('')][1]))} km`
            tryn--;
            document.getElementById('torf').innerHTML = `<p>${nameInput.value} is not correct, ${tryn + 1} tries left</p>`;
        } //hvis spilleren ikke har brukt opp forsøkene sine, skal den informeres om antall forsøk igjen, og at den har svart feil
    }
    nameInput.value = ''; //når formet er submittet, skal input veriden i placeholderen bli blank
}

checkForMatch(); //vi executer funksjonen, om input stemmer med fasit
nameInput.value = ''; //når formet er submittet, skal input veriden i placeholderen bli blank

