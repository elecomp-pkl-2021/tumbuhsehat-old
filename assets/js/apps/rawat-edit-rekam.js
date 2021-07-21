var table_user;

var formData;

var data_penyakit;

var data_edit = {};

app_rawat_edit = {
  init: function () {
    //loaded();
    odontogram_edit();
  },
};

var odontogram_edit = function () {
  var data = JSON.parse(odontogramData);
  ///console.log(data.sort(by('id')));

  allDental = data;
  // console('allDental', allDental);
  //hasil
  function parseSVG(s) {
    var div = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
    div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + s + "</svg>";
    var frag = document.createDocumentFragment();
    while (div.firstChild.firstChild)
      frag.appendChild(div.firstChild.firstChild);
    return frag;
  }

  var arrId4Sisi = [
    "dental13",
    "dental12",
    "dental11",
    "dental21",
    "dental22",
    "dental23",
    "dental53",
    "dental52",
    "dental51",
    "dental61",
    "dental62",
    "dental63",
    "dental83",
    "dental82",
    "dental81",
    "dental71",
    "dental72",
    "dental73",
    "dental43",
    "dental42",
    "dental41",
    "dental31",
    "dental32",
    "dental33",
  ];
  for (var i = 0; i < data.length; i++) {
    // console.log('data',data[i]);
    if (arrId4Sisi.indexOf(data[i].id) > -1) {
      //   console.log('arrId4Sisi', arrId4Sisieeeee);
      var svg =
        '<g id="' +
        data[i].id +
        '" class="' +
        data[i].id +
        '" transform="translate(' +
        data[i].transform1 +
        "," +
        data[i].transform2 +
        ')">' +
        '<polygon points="0,0   20,0    15,10    0,10" fill="' +
        data[i].data.F +
        '" value="6" stroke-width="0.5" opacity="1" class="ausente" id="F" onclick="clickSvg(this);"/></polygon>' +
        '<polygon points="20,0  20,0    20,20   15,10" fill="' +
        data[i].data.G +
        '" value="7" stroke-width="0.5" opacity="1" class="ausente" id="G" onclick="clickSvg(this);"/></polygon>' +
        '<polygon points="0,0   20,0    15,10    0,10" fill="' +
        data[i].data.T +
        '" stroke="navy" stroke-width="0.5" id="T" opacity="1" onclick="clickSvg(this);"></polygon>' +
        '<polygon points="5,10  15,10   20,20   0,20" fill="' +
        data[i].data.B +
        '" stroke="navy" stroke-width="0.5" id="B' +
        data[i].id +
        '" opacity="1" onclick="clickSvg(this);" class="B' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="20,0  20,0    20,20   15,10" fill="white" stroke="navy" stroke-width="0.5" id="RD" opacity="1" onclick="clickSvg(this);"></polygon>' +
        '<polygon points="0,0   5,10     5,10    0,20" fill="' +
        data[i].data.L +
        '" stroke="navy" stroke-width="0.5" id="L" opacity="1" onclick="clickSvg(this);"></polygon>' +
        '<polygon points="0,2 2,2 20,20 18,20" fill="' +
        data[i].data.H +
        '" stroke="' +
        data[i].data.H +
        '" stroke-width="0.5" id="H' +
        data[i].id +
        '" opacity="' +
        data[i].data.H_opacity +
        '" onclick="clickSvg(this);" class="ausente H' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,2 20,2 2,20 2,17" fill="' +
        data[i].data.H +
        '" stroke="' +
        data[i].data.H +
        '" stroke-width="0.5" id="H' +
        data[i].id +
        '" opacity="' +
        data[i].data.H_opacity +
        '" onclick="clickSvg(this);" class="ausente H' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="1,20   1,20     1,19    1,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="2,16   2,16     2,19    2,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="3,14   3,14     3,19    3,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="4,12   4,12     4,19    4,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,10   5,10     5,19    5,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="6,10   6,10     6,19    6,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="7,10   7,10     7,19    7,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="8,10   8,10     8,19    8,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="9,10   9,10     9,19    9,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="10,10   10,10     10,19    10,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="11,10   11,10     11,19    11,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="12,10   12,10     12,19    12,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="13,10   13,10     13,19    13,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="14,10   14,10     14,19    14,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,10   15,10     15,19    15,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,12   16,12     16,19    16,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,14   17,14     17,19    17,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,16   18,16     18,19    18,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="19,20   19,20     19,19    19,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,0   20,0     20,0    20,0" fill="' +
        data[i].data.P +
        '" stroke="' +
        data[i].data.P +
        '" stroke-width="2.5" id="P' +
        data[i].id +
        '" opacity="' +
        data[i].data.P_opacity +
        '" onclick="clickSvg(this);" class="ausente7 P' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,20   20,20     20,20    20,20" fill="' +
        data[i].data.P +
        '" stroke="' +
        data[i].data.P +
        '" stroke-width="2.5" id="P' +
        data[i].id +
        '" opacity="' +
        data[i].data.P_opacity +
        '" onclick="clickSvg(this);" class="ausente7 P' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,1   0,1     0,20    0,20" fill="' +
        data[i].data.P +
        '" stroke="' +
        data[i].data.P +
        '" stroke-width="2.5" id="P' +
        data[i].id +
        '" opacity="' +
        data[i].data.P_opacity +
        '" onclick="clickSvg(this);" class="ausente7 P' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="20,1   20,1     20,20    20,20" fill="' +
        data[i].data.P +
        '" stroke="' +
        data[i].data.P +
        '" stroke-width="2.5" id="P' +
        data[i].id +
        '" opacity="' +
        data[i].data.P_opacity +
        '" onclick="clickSvg(this);" class="ausente7 P' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,20   5,20     5,20    11,30" fill="' +
        data[i].data.Q +
        '" stroke="' +
        data[i].data.Q +
        '" stroke-width="2" id="Q' +
        data[i].id +
        '" opacity="' +
        data[i].data.Q_opacity +
        '" onclick="clickSvg(this);" class="ausente8 Q' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,20   15,20     15,20    11,30" fill="' +
        data[i].data.Q +
        '" stroke="' +
        data[i].data.Q +
        '" stroke-width="2" id="Q' +
        data[i].id +
        '" opacity="' +
        data[i].data.Q_opacity +
        '" onclick="clickSvg(this);" class="ausente8 Q' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,20   15,20    15,20   10,30" fill="' +
        data[i].data.R +
        '" stroke="navy" stroke-width="2" id="R' +
        data[i].id +
        '" opacity="' +
        data[i].data.R_opacity +
        '" onclick="clickSvg(this);" class="ausente9 R' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,2   5,2     5,2    11,20" fill="' +
        data[i].data.S +
        '" stroke="' +
        data[i].data.S +
        '" stroke-width="2" id="S' +
        data[i].id +
        '" opacity="' +
        data[i].data.S_opacity +
        '" onclick="clickSvg(this);" class="ausente10 S' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,2   15,2     15,2    11,20" fill="' +
        data[i].data.S +
        '" stroke="' +
        data[i].data.S +
        '" stroke-width="2" id="S' +
        data[i].id +
        '" opacity="' +
        data[i].data.S_opacity +
        '" onclick="clickSvg(this);" class="ausente10 S' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="1,2   1,2     1,0    1,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="2,4   2,4     2,0    2,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="3,6   3,6     3,0    3,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="4,8   4,8     4,0    4,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,10   5,10     5,0    5,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="6,10   6,10     6,0    6,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="7,10   7,10     7,0    7,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="8,10   8,10     8,0    8,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="9,10   9,10     9,0    9,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="10,10   10,10     10,0    10,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="11,10   11,10     11,0    11,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="12,10   12,10     12,0    12,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="13,10   13,10     13,0    13,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="14,10   14,10     14,0    14,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,10   15,10     15,0    15,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,8   16,8     16,0    16,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,6   17,6     17,0    17,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,4   18,4     18,0    18,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="19,2   19,2     19,0    19,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,2   1,2     1,2    1,2" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,3   1,3     1,3    1,3" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,4   2,4     2,4    2,4" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,5   2,5     2,5    2,5" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,6   3,6     3,6    3,6" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,7   3,7     3,7    3,7" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,8   4,8     4,8    4,8" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,9   4,9     2,9    2,9" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,10   5,10     5,10    5,10" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,11   4,11     4,11    4,11" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,12   4,12     4,12    4,12" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,13   3,13     3,13    3,13" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,14   3,14     3,14    3,14" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,15   2,15     2,15    2,15" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,16   2,16     2,16    2,16" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,17   1,17     1,17    1,17" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,18   1,18     1,18    1,18" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="19,2   20,2     20,2    20,2" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="19,3   20,3     20,3    20,3" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,4   20,4     20,4    20,4" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,5   20,5     20,5    20,5" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,6   20,6     20,6    20,6" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,7   20,7     20,7    20,7" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,8   20,8     20,8    20,8" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,9   20,9     20,9    20,9" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,10   20,10     20,10    20,10" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,11   20,11     20,11    20,11" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,12   20,12     20,12    20,12" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,13   20,13     20,13    20,13" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,14   20,14     20,14    20,14" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,15   20,15     20,15    20,15" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,16   20,16     20,16    20,16" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="19,17   20,17     20,17    20,17" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="19,18   20,18     20,18    20,18" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,10   15,10     20,20    20,20" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg(this);" class="ausente45"></polygon>' +
        '<polygon points="5,10   5,10     0,20    0,20" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg(this);" class="ausente45"></polygon>' +
        '<polygon points="15,10   15,10     20,0    20,0" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg(this);" class="ausente45"></polygon>' +
        '<polygon points="5,10   5,10     0,0    0,0" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg(this);" class="ausente45"></polygon>' +
        '<polygon points="5,10   5,10     15,10    15,10" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg(this);" class="ausente45"></polygon>' +
        // '<polygon points="5,10   5,10     0,0    0,0" fill="'+data[i].data.X+'" stroke="navy" stroke-width="1.5" id="X" opacity="1" onclick="clickSvg(this);" ></polygon>'+
        '<polygon points="20,0   20,0     0,0    0,0" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg(this);" class="ausente45"></polygon>' +
        '<polygon points="20,0   20,0     20,20    20,20" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg(this);" class="ausente45"></polygon>' +
        '<polygon points="20,20   20,20     0,20    0,20" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg(this);" class="ausente45"></polygon>' +
        '<polygon points="0,0   0,0     0,20    0,20" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg(this);" class="ausente45"></polygon>' +
        '<polygon points="3,0   3,0     3,19    3,20" fill="' +
        data[i].data.AB +
        '" stroke="navy" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,0   5,0     5,19    5,20" fill="' +
        data[i].data.AB +
        '" stroke="navy" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="7,0   7,10     7,19    7,20" fill="' +
        data[i].data.AB +
        '" stroke="navy" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="9,0   9,0     9,19    9,20" fill="' +
        data[i].data.AB +
        '" stroke="navy" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="11,0   11,0     11,19    11,20" fill="' +
        data[i].data.AB +
        '" stroke="navy" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="13,0   13,0     13,19    13,20" fill="' +
        data[i].data.AB +
        '" stroke="navy" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,0   15,0     15,19    15,20" fill="' +
        data[i].data.AB +
        '" stroke="navy" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,0   17,0     17,19    17,20" fill="' +
        data[i].data.AB +
        '" stroke="navy" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="25,35   25,35     0,35    0,35" fill="' +
        data[i].data.BA +
        '" stroke="' +
        data[i].data.BA +
        '" stroke-width="2" id="BA' +
        data[i].id +
        '" opacity="' +
        data[i].data.BA_opacity +
        '" onclick="clickSvg(this);" class="ausente60 BA' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="25,35   25,35     0,35    0,35" fill="' +
        data[i].data.BB +
        '" stroke="' +
        data[i].data.BB +
        '" stroke-width="2" id="BB' +
        data[i].id +
        '" opacity="' +
        data[i].data.BB_opacity +
        '" onclick="clickSvg(this);" class="ausente61 BB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="25,35   25,35     0,35    0,35" fill="' +
        data[i].data.BC +
        '" stroke="' +
        data[i].data.BC +
        '" stroke-width="2" id="BC' +
        data[i].id +
        '" opacity="' +
        data[i].data.BC_opacity +
        '" onclick="clickSvg(this);" class="ausente62 BC' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,30   0,35     0,20    0,20" fill="' +
        data[i].data.BD +
        '" stroke="' +
        data[i].data.BD +
        '" stroke-width="2" id="BD' +
        data[i].id +
        '" opacity="' +
        data[i].data.BD_opacity +
        '" onclick="clickSvg(this);" class=" BD' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="20,35   20,35     20,20    20,20" fill="' +
        data[i].data.BE +
        '" stroke="' +
        data[i].data.BE +
        '" stroke-width="2" id="BE' +
        data[i].id +
        '" opacity="' +
        data[i].data.BE_opacity +
        '" onclick="clickSvg(this);" class=" BE' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="3,0   3,0     3,19    3,20" fill="' +
        data[i].data.BF +
        '" stroke="navy" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,0   5,0     5,19    5,20" fill="' +
        data[i].data.BF +
        '" stroke="navy" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="7,0   7,10     7,19    7,20" fill="' +
        data[i].data.BF +
        '" stroke="navy" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="9,0   9,0     9,19    9,20" fill="' +
        data[i].data.BF +
        '" stroke="navy" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="11,0   11,0     11,19    11,20" fill="' +
        data[i].data.BF +
        '" stroke="navy" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="13,0   13,0     13,19    13,20" fill="' +
        data[i].data.BF +
        '" stroke="navy" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,0   15,0     15,19    15,20" fill="' +
        data[i].data.BF +
        '" stroke="navy" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,0   17,0     17,19    17,20" fill="' +
        data[i].data.BF +
        '" stroke="navy" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,0   0,0     0,20    0,20" fill="' +
        data[i].data.XA +
        '" stroke="' +
        data[i].data.XA +
        '" stroke-width="1.5" id="XA' +
        data[i].id +
        '" opacity="' +
        data[i].data.XA_opacity +
        '" onclick="clickSvg(this);" class="ausente45 XA' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="20,20   20,20     0,20    0,20" fill="' +
        data[i].data.XB +
        '" stroke="' +
        data[i].data.XB +
        '" stroke-width="1.5" id="XB' +
        data[i].id +
        '" opacity="' +
        data[i].data.XB_opacity +
        '" onclick="clickSvg(this);" class="ausente46 XB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="20,0   20,0     20,20    20,20" fill="' +
        data[i].data.XC +
        '" stroke="' +
        data[i].data.XC +
        '" stroke-width="1.5" id="XC' +
        data[i].id +
        '" opacity="' +
        data[i].data.XC_opacity +
        '" onclick="clickSvg(this);" class="ausente47 XC' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="20,0   20,0     0,0    0,0" fill="' +
        data[i].data.XD +
        '" stroke="' +
        data[i].data.XD +
        '" stroke-width="1.5" id="XD' +
        data[i].id +
        '" opacity="' +
        data[i].data.XD_opacity +
        '" onclick="clickSvg(this);" class="ausente48 XD' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,10   15,10     20,20    20,20" fill="' +
        data[i].data.XM +
        '" stroke="' +
        data[i].data.XM +
        '" stroke-width="1.5" id="XM' +
        data[i].id +
        '" opacity="' +
        data[i].data.XM_opacity +
        '" onclick="clickSvg(this);" class="ausente66 XM' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,10   5,10     0,20    0,20" fill="' +
        data[i].data.XN +
        '" stroke="' +
        data[i].data.XN +
        '" stroke-width="1.5" id="XN' +
        data[i].id +
        '" opacity="' +
        data[i].data.XN_opacity +
        '" onclick="clickSvg(this);" class="ausente67 XN' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,10   15,10     20,0    20,0" fill="' +
        data[i].data.XO +
        '" stroke="' +
        data[i].data.XO +
        '" stroke-width="1.5" id="XO' +
        data[i].id +
        '" opacity="' +
        data[i].data.XO_opacity +
        '" onclick="clickSvg(this);" class="ausente68 XO' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,10   5,10     0,0    0,0" fill="' +
        data[i].data.XP +
        '" stroke="' +
        data[i].data.XP +
        '" stroke-width="1.5" id="XP' +
        data[i].id +
        '" opacity="' +
        data[i].data.XP_opacity +
        '" onclick="clickSvg(this);" class="ausente69 XP' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,10   5,10     15,10    15,10" fill="' +
        data[i].data.XQ +
        '" stroke="' +
        data[i].data.XQ +
        '" stroke-width="1.5" id="XQ' +
        data[i].id +
        '" opacity="' +
        data[i].data.XQ_opacity +
        '" onclick="clickSvg(this);" class="ausente70 XQ' +
        data[i].id +
        '"></polygon>' +
        '<text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">' +
        data[i].title +
        "</text>" +
        '<text x="6" y="37" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">' +
        data[i].title_2 +
        "</text>" +
        '<text x="6" y="43" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">' +
        data[i].title_3 +
        "</text>" +
        '<text x="6" y="49" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">' +
        data[i].title_4 +
        "</text>" +
        "</g>";
    } else {
      var svg =
        ' <g id="' +
        data[i].id +
        '" class="' +
        data[i].id +
        '" transform="translate(' +
        data[i].transform1 +
        "," +
        data[i].transform2 +
        ')">' +
        '<polygon points="0,0   20,0    15,10    0,10" fill="' +
        data[i].data.F +
        '" stroke-width="0.5" opacity="1" id="F" class="ausente" onclick="clickSvg(this);"/></polygon>' +
        '<polygon points="20,0  20,0    20,20   15,10" fill="' +
        data[i].data.G +
        '" stroke-width="0.5" opacity="1" id="G" class="ausente" onclick="clickSvg(this);"/></polygon>' +
        '<polygon points="5,5   15,5    15,15   5,15" fill="' +
        data[i].data.C +
        '" stroke="navy" stroke-width="0.5" id="C" opacity="1" onclick="clickSvg(this);"></polygon>' +
        '<polygon points="0,0   20,0    15,5    5,5" fill="' +
        data[i].data.T +
        '" stroke="navy" stroke-width="0.5" id="T" opacity="1" onclick="clickSvg(this);"></polygon>' +
        '<polygon points="5,15  15,15   20,20   0,20" fill="' +
        data[i].data.B +
        '" stroke="navy" stroke-width="0.5" id="B" opacity="1" onclick="clickSvg(this);"></polygon>' +
        '<polygon points="15,5  20,0    20,20   15,15" fill="white" stroke="navy" stroke-width="0.5" id="RD" opacity="1" onclick="clickSvg(this);"></polygon>' +
        '<polygon points="0,0   5,5     5,15    0,20" fill="' +
        data[i].data.L +
        '" stroke="navy" stroke-width="0.5" id="L" opacity="1" onclick="clickSvg(this);"></polygon>' +
        '<polygon points="0,2 2,2 20,20 18,20" fill="' +
        data[i].data.H +
        '" stroke="' +
        data[i].data.H +
        '" stroke-width="0.5" id="H' +
        data[i].id +
        '" opacity="' +
        data[i].data.H_opacity +
        '" onclick="clickSvg(this);" class="ausente H' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,2 20,2 2,20 2,17" fill="' +
        data[i].data.H +
        '" stroke="' +
        data[i].data.H +
        '" stroke-width="0.5" id="H' +
        data[i].id +
        '" opacity="' +
        data[i].data.H_opacity +
        '" onclick="clickSvg(this);" class="ausente H' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,5   15,5    15,15   5,15" fill="' +
        data[i].data.J +
        '" stroke="navy" stroke-width="0.5" id="J' +
        data[i].id +
        '" opacity="' +
        data[i].data.J_opacity +
        '" onclick="clickSvg(this);" class="ausente2 J' +
        data[i].id +
        '"></polygon>' +
        // '<polygon points="5,5   15,5    15,15   5,15" fill="'+data[i].data.K+'" stroke="navy" stroke-width="0.5" id="K'+data[i].id+'" opacity="1" onclick="clickSvg(this);" class="ausente3 K'+data[i].id+'"></polygon>'+
        '<polygon points="5,5   15,5    15,15   5,15" fill="' +
        data[i].data.N +
        '" stroke="navy" stroke-width="0.5" id="N' +
        data[i].id +
        '" opacity="' +
        data[i].data.N_opacity +
        '" onclick="clickSvg(this);" class="ausente5 N' +
        data[i].id +
        '"></polygon>' +
        // '<polygon points="5,5   15,5    15,15   5,15" fill="'+data[i].data.O+'" stroke="navy" stroke-width="2" id="O'+data[i].id+'" opacity="1" onclick="clickSvg(this);" class="ausente6"></polygon>'+
        '<polygon points="5,1   5,1     5,19    5,20" fill="' +
        data[i].data.O +
        '" stroke="' +
        data[i].data.O +
        '" stroke-width="2" id="O' +
        data[i].id +
        '" opacity="' +
        data[i].data.O_opacity +
        '" onclick="clickSvg(this);" class="ausente6 O' +
        data[i].id +
        '" ></polygon>' +
        '<polygon points="15,1   15,1     15,19    15,20" fill="' +
        data[i].data.O +
        '" stroke="' +
        data[i].data.O +
        '" stroke-width="2" id="O' +
        data[i].id +
        '" opacity="' +
        data[i].data.O_opacity +
        '" onclick="clickSvg(this);" class="ausente6 O' +
        data[i].id +
        '" ></polygon>' +
        '<polygon points="0,15   20,15     20,15    20,15" fill="' +
        data[i].data.O +
        '" stroke="' +
        data[i].data.O +
        '" stroke-width="2" id="O' +
        data[i].id +
        '" opacity="' +
        data[i].data.O_opacity +
        '" onclick="clickSvg(this);" class="ausente6 O' +
        data[i].id +
        '" ></polygon>' +
        '<polygon points="0,5   20,5     20,5    20,5" fill="' +
        data[i].data.O +
        '" stroke="' +
        data[i].data.O +
        '" stroke-width="2" id="O' +
        data[i].id +
        '" opacity="' +
        data[i].data.O_opacity +
        '" onclick="clickSvg(this);" class="ausente6 O' +
        data[i].id +
        '" ></polygon>' +
        '<polygon points="0,0   20,0     20,0    20,0" fill="' +
        data[i].data.P +
        '" stroke="' +
        data[i].data.P +
        '" stroke-width="2.5" id="P' +
        data[i].id +
        '" opacity="' +
        data[i].data.P_opacity +
        '" onclick="clickSvg(this);" class="ausente7 P' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,20   20,20     20,20    20,20" fill="' +
        data[i].data.P +
        '" stroke="' +
        data[i].data.P +
        '" stroke-width="2.5" id="P' +
        data[i].id +
        '" opacity="' +
        data[i].data.P_opacity +
        '" onclick="clickSvg(this);" class="ausente7 P' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,1   0,1     0,20    0,20" fill="' +
        data[i].data.P +
        '" stroke="' +
        data[i].data.P +
        '" stroke-width="2.5" id="P' +
        data[i].id +
        '" opacity="' +
        data[i].data.P_opacity +
        '" onclick="clickSvg(this);" class="ausente7 P' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="20,1   20,1     20,20    20,20" fill="' +
        data[i].data.P +
        '" stroke="' +
        data[i].data.P +
        '" stroke-width="2.5" id="P' +
        data[i].id +
        '" opacity="' +
        data[i].data.P_opacity +
        '" onclick="clickSvg(this);" class="ausente7 P' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,20   5,20     5,20    11,30" fill="' +
        data[i].data.Q +
        '" stroke="' +
        data[i].data.Q +
        '" stroke-width="2" id="Q' +
        data[i].id +
        '" opacity="' +
        data[i].data.Q_opacity +
        '" onclick="clickSvg(this);" class="ausente8 Q' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,20   15,20     15,20    11,30" fill="' +
        data[i].data.Q +
        '" stroke="' +
        data[i].data.Q +
        '" stroke-width="2" id="Q' +
        data[i].id +
        '" opacity="' +
        data[i].data.Q_opacity +
        '" onclick="clickSvg(this);" class="ausente8 Q' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,20   15,20    15,20   10,30" fill="' +
        data[i].data.R +
        '" stroke="navy" stroke-width="2" id="R' +
        data[i].id +
        '" opacity="' +
        data[i].data.R_opacity +
        '" onclick="clickSvg(this);" class="ausente9 R' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,2   5,2     5,2    11,20" fill="' +
        data[i].data.S +
        '" stroke="' +
        data[i].data.S +
        '" stroke-width="2" id="S' +
        data[i].id +
        '" opacity="' +
        data[i].data.S_opacity +
        '" onclick="clickSvg(this);" class="ausente10 S' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,2   15,2     15,2    11,20" fill="' +
        data[i].data.S +
        '" stroke="' +
        data[i].data.S +
        '" stroke-width="2" id="S' +
        data[i].id +
        '" opacity="' +
        data[i].data.S_opacity +
        '" onclick="clickSvg(this);" class="ausente10 S' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,2   2,2     2,2    2,2" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,3   3,3     2,3    2,3" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,4   4,4     2,4    2,4" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,5   5,5     2,5    2,5" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,6   5,6     2,6    2,6" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,7   5,7     2,7    2,7" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,8   5,8     2,8    2,8" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,9   5,9     2,9    2,9" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,10   5,10     2,10    2,10" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,11   5,11     4,11    4,11" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,12   5,12     2,12    2,12" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,13   5,13     3,13    3,13" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,14   5,14     2,14    2,14" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,15   5,15     2,15    2,15" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,16   4,16     2,16    2,16" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,17   3,17     2,17    2,17" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,18   2,18     2,18    2,18" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,2   20,2     20,2    20,2" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,3   20,3     20,3    20,3" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,4   20,4     20,4    20,4" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,5   20,5     20,5    20,5" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,6   20,6     20,6    20,6" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,7   20,7     20,7    20,7" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,8   20,8     20,8    20,8" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,9   20,9     20,9    20,9" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,10   20,10     20,10    20,10" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,11   20,11     20,11    20,11" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,12   20,12     20,12    20,12" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,13   20,13     20,13    20,13" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,14   20,14     20,14    20,14" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,15   20,15     20,15    20,15" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,16   20,16     20,16    20,16" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,17   20,17     20,17    20,17" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,18   20,18     20,18    20,18" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="2,18   2,18     2,20    2,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="3,17   3,17     3,20    3,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="4,16   4,16     4,20    4,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,15   5,15     5,15    5,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="6,15   6,15     6,15    6,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="7,15   7,15     7,15    7,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="8,15   8,15     8,15    8,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="9,15   9,15     9,15    9,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="10,15   10,15     10,15    10,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="11,15   11,15     11,15    11,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="12,15   12,15     12,15    12,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="13,15  13,15     13,15    13,20" fill="' +
        data[i].data.M +
        '"  stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="14,15   14,15     14,15    14,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,15   15,15     15,15    15,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,16   16,16     16,20    16,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,17   17,17     17,20    17,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,18   18,18     18,20    18,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="1,1   1,1     1,0    1,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="2,2   2,2     2,0    2,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="3,3   3,3     3,0    3,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="4,4   4,4     4,0    4,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,5   5,5     5,0    5,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="6,5   6,5     6,0    6,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="7,5   7,5     7,0    7,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="8,5   8,5     8,0    8,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="9,5   9,5     9,0    9,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="10,5   10,5     10,0    10,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="11,5   11,5     11,0    11,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="12,5   12,5     12,0    12,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="13,5   13,5     13,0    13,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="14,5   14,5     14,0    14,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,5   15,5     15,0    15,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,4   16,4     16,0    16,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,3   17,3     17,0    17,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,2   18,2     18,0    18,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="19,1   19,1     19,0    19,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,5   5,5     5,0    5,0" fill="' +
        data[i].data.W +
        '" stroke="navy" stroke-width="0.5" id="W' +
        data[i].id +
        '" opacity="' +
        data[i].data.W_opacity +
        '" onclick="clickSvg(this);" class="ausente44 W' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="7,5   7,5     7,0    7,0" fill="' +
        data[i].data.W +
        '" stroke="navy" stroke-width="0.5" id="W' +
        data[i].id +
        '" opacity="' +
        data[i].data.W_opacity +
        '" onclick="clickSvg(this);" class="ausente44 W' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="9,5   9,5     9,0    9,0" fill="' +
        data[i].data.W +
        '" stroke="navy" stroke-width="0.5" id="W' +
        data[i].id +
        '" opacity="' +
        data[i].data.W_opacity +
        '" onclick="clickSvg(this);" class="ausente44 W' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="11,5   11,5     11,0    11,0" fill="' +
        data[i].data.W +
        '" stroke="navy" stroke-width="0.5" id="W' +
        data[i].id +
        '" opacity="' +
        data[i].data.W_opacity +
        '" onclick="clickSvg(this);" class="ausente44 W' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="13,5   13,5     13,0    13,0" fill="' +
        data[i].data.W +
        '" stroke="navy" stroke-width="0.5" id="W' +
        data[i].id +
        '" opacity="' +
        data[i].data.W_opacity +
        '" onclick="clickSvg(this);" class="ausente44 W' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,5   15,5     15,0    15,0" fill="' +
        data[i].data.W +
        '" stroke="navy" stroke-width="0.5" id="W' +
        data[i].id +
        '" opacity="' +
        data[i].data.W_opacity +
        '" onclick="clickSvg(this);" class="ausente44 W' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,0   0,0     0,20    0,20" fill="' +
        data[i].data.XA +
        '" stroke="' +
        data[i].data.XA +
        '" stroke-width="1.5" id="XA' +
        data[i].id +
        '" opacity="' +
        data[i].data.XA_opacity +
        '" onclick="clickSvg(this);" class="ausente45 XA' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="20,20   20,20     0,20    0,20" fill="' +
        data[i].data.XB +
        '" stroke="' +
        data[i].data.XB +
        '" stroke-width="1.5" id="XB' +
        data[i].id +
        '" opacity="' +
        data[i].data.XB_opacity +
        '" onclick="clickSvg(this);" class="ausente46 XB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="20,0   20,0     20,20    20,20" fill="' +
        data[i].data.XC +
        '" stroke="' +
        data[i].data.XC +
        '" stroke-width="1.5" id="XC' +
        data[i].id +
        '" opacity="' +
        data[i].data.XC_opacity +
        '" onclick="clickSvg(this);" class="ausente47 XC' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="20,0   20,0     0,0    0,0" fill="' +
        data[i].data.XD +
        '" stroke="' +
        data[i].data.XD +
        '" stroke-width="1.5" id="XD' +
        data[i].id +
        '" opacity="' +
        data[i].data.XD_opacity +
        '" onclick="clickSvg(this);" class="ausente48 XD' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,15   5,15     0,20    0,20" fill="' +
        data[i].data.XE +
        '" stroke="' +
        data[i].data.XE +
        '" stroke-width="1.5" id="XE' +
        data[i].id +
        '" opacity="' +
        data[i].data.XE_opacity +
        '" onclick="clickSvg(this);" class="ausente49 XE' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,15   15,15     20,20    20,20" fill="' +
        data[i].data.XF +
        '" stroke="' +
        data[i].data.XF +
        '" stroke-width="1.5" id="XF' +
        data[i].id +
        '" opacity="' +
        data[i].data.XF_opacity +
        '" onclick="clickSvg(this);" class="ausente50 XF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,5   5,5     0,0    0,0" fill="' +
        data[i].data.XG +
        '" stroke="' +
        data[i].data.XG +
        '" stroke-width="1.5" id="XG' +
        data[i].id +
        '" opacity="' +
        data[i].data.XG_opacity +
        '" onclick="clickSvg(this);" class="ausente51 XG' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,5   15,5     20,0    20,0" fill="' +
        data[i].data.XH +
        '" stroke="' +
        data[i].data.XH +
        '" stroke-width="1.5" id="XH' +
        data[i].id +
        '" opacity="' +
        data[i].data.XH_opacity +
        '" onclick="clickSvg(this);" class="ausente52 XH' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,15   15,15     5,15    5,15" fill="' +
        data[i].data.XI +
        '" stroke="' +
        data[i].data.XI +
        '" stroke-width="1.5" id="XI' +
        data[i].id +
        '" opacity="' +
        data[i].data.XI_opacity +
        '" onclick="clickSvg(this);" class="ausente53 XI' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,15   15,15     15,5    15,5" fill="' +
        data[i].data.XJ +
        '" stroke="' +
        data[i].data.XJ +
        '" stroke-width="1.5" id="XJ' +
        data[i].id +
        '" opacity="' +
        data[i].data.XJ_opacity +
        '" onclick="clickSvg(this);" class="ausente54 XJ' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,5   5,5     5,15    5,15" fill="' +
        data[i].data.XK +
        '" stroke="' +
        data[i].data.XK +
        '" stroke-width="1.5" id="XK' +
        data[i].id +
        '" opacity="' +
        data[i].data.XK_opacity +
        '" onclick="clickSvg(this);" class="ausente55 XK' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,5   5,5     15,5    15,5" fill="' +
        data[i].data.XL +
        '" stroke="' +
        data[i].data.XL +
        '" stroke-width="1.5" id="XL' +
        data[i].id +
        '" opacity="' +
        data[i].data.XL_opacity +
        '" onclick="clickSvg(this);" class="ausente56 XL' +
        data[i].id +
        '"></polygon>' +
        // '<polygon points="1,0   1,0     1,19    1,20" fill="'+data[i].data.AB+'" stroke="navy" stroke-width="0.5" id="AB'+data[i].id+'" opacity="1" onclick="clickSvg(this);" class="ausente59 AB'+data[i].id+'"></polygon>'+
        '<polygon points="3,0   3,0     3,19    3,20" fill="' +
        data[i].data.AB +
        '" stroke="navy" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,0   5,0     5,19    5,20" fill="' +
        data[i].data.AB +
        '" stroke="navy" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="7,0   7,10     7,19    7,20" fill="' +
        data[i].data.AB +
        '" stroke="navy" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="9,0   9,0     9,19    9,20" fill="' +
        data[i].data.AB +
        '" stroke="navy" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="11,0   11,0     11,19    11,20" fill="' +
        data[i].data.AB +
        '" stroke="navy" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="13,0   13,0     13,19    13,20" fill="' +
        data[i].data.AB +
        '" stroke="navy" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,0   15,0     15,19    15,20" fill="' +
        data[i].data.AB +
        '" stroke="navy" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,0   17,0     17,19    17,20" fill="' +
        data[i].data.AB +
        '" stroke="navy" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        // '<polygon points="5,20   5,20     5,20    11,30" fill="'+data[i].data.BA+'" stroke="navy" stroke-width="2" id="BA'+data[i].id+'" opacity="1" onclick="clickSvg(this);" class="ausente60 BA'+data[i].id+'"></polygon>'+
        '<polygon points="25,35   25,35     0,35    0,35" fill="' +
        data[i].data.BA +
        '" stroke="' +
        data[i].data.BA +
        '" stroke-width="2" id="BA' +
        data[i].id +
        '" opacity="' +
        data[i].data.BA_opacity +
        '" onclick="clickSvg(this);" class="ausente60 BA' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="25,35   25,35     0,35    0,35" fill="' +
        data[i].data.BB +
        '" stroke="' +
        data[i].data.BB +
        '" stroke-width="2" id="BB' +
        data[i].id +
        '" opacity="' +
        data[i].data.BB_opacity +
        '" onclick="clickSvg(this);" class="ausente61 BB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="25,35   25,35     0,35    0,35" fill="' +
        data[i].data.BC +
        '" stroke="' +
        data[i].data.BC +
        '" stroke-width="2" id="BC' +
        data[i].id +
        '" opacity="' +
        data[i].data.BC_opacity +
        '" onclick="clickSvg(this);" class="ausente62 BC' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,30   0,35     0,20    0,20" fill="' +
        data[i].data.BD +
        '" stroke="' +
        data[i].data.BD +
        '" stroke-width="2" id="BD' +
        data[i].id +
        '" opacity="' +
        data[i].data.BD_opacity +
        '" onclick="clickSvg(this);" class=" BD' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="20,35   20,35     20,20    20,20" fill="' +
        data[i].data.BE +
        '" stroke="' +
        data[i].data.BE +
        '" stroke-width="2" id="BE' +
        data[i].id +
        '" opacity="' +
        data[i].data.BE_opacity +
        '" onclick="clickSvg(this);" class=" BE' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="3,0   3,0     3,19    3,20" fill="' +
        data[i].data.BF +
        '" stroke="navy" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,0   5,0     5,19    5,20" fill="' +
        data[i].data.BF +
        '" stroke="navy" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="7,0   7,10     7,19    7,20" fill="' +
        data[i].data.BF +
        '" stroke="navy" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="9,0   9,0     9,19    9,20" fill="' +
        data[i].data.BF +
        '" stroke="navy" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="11,0   11,0     11,19    11,20" fill="' +
        data[i].data.BF +
        '" stroke="navy" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="13,0   13,0     13,19    13,20" fill="' +
        data[i].data.BF +
        '" stroke="navy" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,0   15,0     15,19    15,20" fill="' +
        data[i].data.BF +
        '" stroke="navy" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,0   17,0     17,19    17,20" fill="' +
        data[i].data.BF +
        '" stroke="navy" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">' +
        data[i].title +
        "</text>" +
        '<text x="6" y="37" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">' +
        data[i].title_2 +
        "</text>" +
        '<text x="6" y="43" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">' +
        data[i].title_3 +
        "</text>" +
        '<text x="6" y="49" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">' +
        data[i].title_4 +
        "</text>" +
        "</g>";
    }

    var parser = new DOMParser();
    var doc = parser.parseFromString(svg, "image/svg+xml");
    // var baru = document.importNode(svg,true);
    document.getElementById("odontograma_utama").appendChild(parseSVG(svg));
    // console.log("svg: " , doc);
    // $("#odontograma").append(svg);
  }
};
