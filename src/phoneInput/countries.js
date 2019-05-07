import React from "react";

export default class CountrySelect extends React.Component {
  dialCodes = {
    BD: "880",
    BE: "32",
    BF: "226",
    BG: "359",
    BA: "387",
    BB: "+1-246",
    WF: "681",
    BL: "590",
    BM: "+1-441",
    BN: "673",
    BO: "591",
    BH: "973",
    BI: "257",
    BJ: "229",
    BT: "975",
    JM: "+1-876",
    BV: "",
    BW: "267",
    WS: "685",
    BQ: "599",
    BR: "55",
    BS: "+1-242",
    JE: "+44-1534",
    BY: "375",
    BZ: "501",
    RU: "7",
    RW: "250",
    RS: "381",
    TL: "670",
    RE: "262",
    TM: "993",
    TJ: "992",
    RO: "40",
    TK: "690",
    GW: "245",
    GU: "+1-671",
    GT: "502",
    GS: "",
    GR: "30",
    GQ: "240",
    GP: "590",
    JP: "81",
    GY: "592",
    GG: "+44-1481",
    GF: "594",
    GE: "995",
    GD: "+1-473",
    GB: "44",
    GA: "241",
    SV: "503",
    GN: "224",
    GM: "220",
    GL: "299",
    GI: "350",
    GH: "233",
    OM: "968",
    TN: "216",
    JO: "962",
    HR: "385",
    HT: "509",
    HU: "36",
    HK: "852",
    HN: "504",
    HM: " ",
    VE: "58",
    PR: "+1-787 and 1-939",
    PS: "970",
    PW: "680",
    PT: "351",
    SJ: "47",
    PY: "595",
    IQ: "964",
    PA: "507",
    PF: "689",
    PG: "675",
    PE: "51",
    PK: "92",
    PH: "63",
    PN: "870",
    PL: "48",
    PM: "508",
    ZM: "260",
    EH: "212",
    EE: "372",
    EG: "20",
    ZA: "27",
    EC: "593",
    IT: "39",
    VN: "84",
    SB: "677",
    ET: "251",
    SO: "252",
    ZW: "263",
    SA: "966",
    ES: "34",
    ER: "291",
    ME: "382",
    MD: "373",
    MG: "261",
    MF: "590",
    MA: "212",
    MC: "377",
    UZ: "998",
    MM: "95",
    ML: "223",
    MO: "853",
    MN: "976",
    MH: "692",
    MK: "389",
    MU: "230",
    MT: "356",
    MW: "265",
    MV: "960",
    MQ: "596",
    MP: "+1-670",
    MS: "+1-664",
    MR: "222",
    IM: "+44-1624",
    UG: "256",
    TZ: "255",
    MY: "60",
    MX: "52",
    IL: "972",
    FR: "33",
    IO: "246",
    SH: "290",
    FI: "358",
    FJ: "679",
    FK: "500",
    FM: "691",
    FO: "298",
    NI: "505",
    NL: "31",
    NO: "47",
    NA: "264",
    VU: "678",
    NC: "687",
    NE: "227",
    NF: "672",
    NG: "234",
    NZ: "64",
    NP: "977",
    NR: "674",
    NU: "683",
    CK: "682",
    XK: "",
    CI: "225",
    CH: "41",
    CO: "57",
    CN: "86",
    CM: "237",
    CL: "56",
    CC: "61",
    CA: "1",
    CG: "242",
    CF: "236",
    CD: "243",
    CZ: "420",
    CY: "357",
    CX: "61",
    CR: "506",
    CW: "599",
    CV: "238",
    CU: "53",
    SZ: "268",
    SY: "963",
    SX: "599",
    KG: "996",
    KE: "254",
    SS: "211",
    SR: "597",
    KI: "686",
    KH: "855",
    KN: "+1-869",
    KM: "269",
    ST: "239",
    SK: "421",
    KR: "82",
    SI: "386",
    KP: "850",
    KW: "965",
    SN: "221",
    SM: "378",
    SL: "232",
    SC: "248",
    KZ: "7",
    KY: "+1-345",
    SG: "65",
    SE: "46",
    SD: "249",
    DO: "+1-809 and 1-829",
    DM: "+1-767",
    DJ: "253",
    DK: "45",
    VG: "+1-284",
    DE: "49",
    YE: "967",
    DZ: "213",
    US: "1",
    UY: "598",
    YT: "262",
    UM: "1",
    LB: "961",
    LC: "+1-758",
    LA: "856",
    TV: "688",
    TW: "886",
    TT: "+1-868",
    TR: "90",
    LK: "94",
    LI: "423",
    LV: "371",
    TO: "676",
    LT: "370",
    LU: "352",
    LR: "231",
    LS: "266",
    TH: "66",
    TF: "",
    TG: "228",
    TD: "235",
    TC: "+1-649",
    LY: "218",
    VA: "379",
    VC: "+1-784",
    AE: "971",
    AD: "376",
    AG: "+1-268",
    AF: "93",
    AI: "+1-264",
    VI: "+1-340",
    IS: "354",
    IR: "98",
    AM: "374",
    AL: "355",
    AO: "244",
    AQ: "",
    AS: "+1-684",
    AR: "54",
    AU: "61",
    AT: "43",
    AW: "297",
    IN: "91",
    AX: "+358-18",
    AZ: "994",
    IE: "353",
    ID: "62",
    UA: "380",
    QA: "974",
    MZ: "258"
  };
  countries = {
    AD: "Andorra",
    AE: "United Arab Emirates",
    AF: "Afghanistan",
    AG: "Antigua and Barbuda",
    AI: "Anguilla",
    AL: "Albania",
    AM: "Armenia",
    AO: "Angola",
    AQ: "Antarctica",
    AR: "Argentina",
    AS: "American Samoa",
    AT: "Austria",
    AU: "Australia",
    AW: "Aruba",
    AX: "Aland Islands",
    AZ: "Azerbaijan",
    BA: "Bosnia and Herzegovina",
    BB: "Barbados",
    BD: "Bangladesh",
    BE: "Belgium",
    BF: "Burkina Faso",
    BG: "Bulgaria",
    BH: "Bahrain",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Saint Barthelemy",
    BM: "Bermuda",
    BN: "Brunei",
    BO: "Bolivia",
    BQ: "Bonaire, Saint Eustatius and Saba ",
    BR: "Brazil",
    BS: "Bahamas",
    BT: "Bhutan",
    BV: "Bouvet Island",
    BW: "Botswana",
    BY: "Belarus",
    BZ: "Belize",
    CA: "Canada",
    CC: "Cocos Islands",
    CD: "Democratic Republic of the Congo",
    CF: "Central African Republic",
    CG: "Republic of the Congo",
    CH: "Switzerland",
    CI: "Ivory Coast",
    CK: "Cook Islands",
    CL: "Chile",
    CM: "Cameroon",
    CN: "China",
    CO: "Colombia",
    CR: "Costa Rica",
    CU: "Cuba",
    CV: "Cape Verde",
    CW: "Curacao",
    CX: "Christmas Island",
    CY: "Cyprus",
    CZ: "Czech Republic",
    DE: "Germany",
    DJ: "Djibouti",
    DK: "Denmark",
    DM: "Dominica",
    DO: "Dominican Republic",
    DZ: "Algeria",
    EC: "Ecuador",
    EE: "Estonia",
    EG: "Egypt",
    EH: "Western Sahara",
    ER: "Eritrea",
    ES: "Spain",
    ET: "Ethiopia",
    FI: "Finland",
    FJ: "Fiji",
    FK: "Falkland Islands",
    FM: "Micronesia",
    FO: "Faroe Islands",
    FR: "France",
    GA: "Gabon",
    GB: "United Kingdom",
    GD: "Grenada",
    GE: "Georgia",
    GF: "French Guiana",
    GG: "Guernsey",
    GH: "Ghana",
    GI: "Gibraltar",
    GL: "Greenland",
    GM: "Gambia",
    GN: "Guinea",
    GP: "Guadeloupe",
    GQ: "Equatorial Guinea",
    GR: "Greece",
    GS: "South Georgia and the South Sandwich Islands",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HK: "Hong Kong",
    HM: "Heard Island and McDonald Islands",
    HN: "Honduras",
    HR: "Croatia",
    HT: "Haiti",
    HU: "Hungary",
    ID: "Indonesia",
    IE: "Ireland",
    IL: "Israel",
    IM: "Isle of Man",
    IN: "India",
    IO: "British Indian Ocean Territory",
    IQ: "Iraq",
    IR: "Iran",
    IS: "Iceland",
    IT: "Italy",
    JE: "Jersey",
    JM: "Jamaica",
    JO: "Jordan",
    JP: "Japan",
    KE: "Kenya",
    KG: "Kyrgyzstan",
    KH: "Cambodia",
    KI: "Kiribati",
    KM: "Comoros",
    KN: "Saint Kitts and Nevis",
    KP: "North Korea",
    KR: "South Korea",
    KW: "Kuwait",
    KY: "Cayman Islands",
    KZ: "Kazakhstan",
    LA: "Laos",
    LB: "Lebanon",
    LC: "Saint Lucia",
    LI: "Liechtenstein",
    LK: "Sri Lanka",
    LR: "Liberia",
    LS: "Lesotho",
    LT: "Lithuania",
    LU: "Luxembourg",
    LV: "Latvia",
    LY: "Libya",
    MA: "Morocco",
    MC: "Monaco",
    MD: "Moldova",
    ME: "Montenegro",
    MF: "Saint Martin",
    MG: "Madagascar",
    MH: "Marshall Islands",
    MK: "Macedonia",
    ML: "Mali",
    MM: "Myanmar",
    MN: "Mongolia",
    MO: "Macao",
    MP: "Northern Mariana Islands",
    MQ: "Martinique",
    MR: "Mauritania",
    MS: "Montserrat",
    MT: "Malta",
    MU: "Mauritius",
    MV: "Maldives",
    MW: "Malawi",
    MX: "Mexico",
    MY: "Malaysia",
    MZ: "Mozambique",
    NA: "Namibia",
    NC: "New Caledonia",
    NE: "Niger",
    NF: "Norfolk Island",
    NG: "Nigeria",
    NI: "Nicaragua",
    NL: "Netherlands",
    NO: "Norway",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "New Zealand",
    OM: "Oman",
    PA: "Panama",
    PE: "Peru",
    PF: "French Polynesia",
    PG: "Papua New Guinea",
    PH: "Philippines",
    PK: "Pakistan",
    PL: "Poland",
    PM: "Saint Pierre and Miquelon",
    PN: "Pitcairn",
    PR: "Puerto Rico",
    PS: "Palestinian Territory",
    PT: "Portugal",
    PW: "Palau",
    PY: "Paraguay",
    QA: "Qatar",
    RE: "Reunion",
    RO: "Romania",
    RS: "Serbia",
    RU: "Russia",
    RW: "Rwanda",
    SA: "Saudi Arabia",
    SB: "Solomon Islands",
    SC: "Seychelles",
    SD: "Sudan",
    SE: "Sweden",
    SG: "Singapore",
    SH: "Saint Helena",
    SI: "Slovenia",
    SJ: "Svalbard and Jan Mayen",
    SK: "Slovakia",
    SL: "Sierra Leone",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somalia",
    SR: "Suriname",
    SS: "South Sudan",
    ST: "Sao Tome and Principe",
    SV: "El Salvador",
    SX: "Sint Maarten",
    SY: "Syria",
    SZ: "Swaziland",
    TC: "Turks and Caicos Islands",
    TD: "Chad",
    TF: "French Southern Territories",
    TG: "Togo",
    TH: "Thailand",
    TJ: "Tajikistan",
    TK: "Tokelau",
    TL: "East Timor",
    TM: "Turkmenistan",
    TN: "Tunisia",
    TO: "Tonga",
    TR: "Turkey",
    TT: "Trinidad and Tobago",
    TV: "Tuvalu",
    TW: "Taiwan",
    TZ: "Tanzania",
    UA: "Ukraine",
    UG: "Uganda",
    UM: "United States Minor Outlying Islands",
    US: "United States",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VA: "Vatican",
    VC: "Saint Vincent and the Grenadines",
    VE: "Venezuela",
    VG: "British Virgin Islands",
    VI: "U.S. Virgin Islands",
    VN: "Vietnam",
    VU: "Vanuatu",
    WF: "Wallis and Futuna",
    WS: "Samoa",
    XK: "Kosovo",
    YE: "Yemen",
    YT: "Mayotte",
    ZA: "South Africa",
    ZM: "Zambia",
    ZW: "Zimbabwe"
  };
  constructor(props) {
    super(props);
    this.state = {
      country: null
    };
    this.displayOptions = this.displayOptions.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  selectCountry(event) {
    const ISOCode = event.target.value;
    const dialCode = this.dialCodes[ISOCode];
    const name = this.countries[ISOCode];
    const country = {
      ISOCode: ISOCode,
      dialCode: `+${dialCode.replace(/\+/, "")}`,
      name: name
    };
    this.setState({
      country: country
    });
    this.props.onchange(country);
  }

  displayOptions() {
    return Object.keys(this.countries).map(key => {
      return (
        <option value={key} key={key}>
          {/* {`${this.countries[key]} (+${this.dialCodes[key]})`} */}
          {`${this.countries[key]}`}
        </option>
      );
    });
  }

  render() {
    return (
      <div className="accessible-form-group accessible-country-list">
        <label>Country</label>
        <select
          onChange={this.selectCountry}
          aria-required="true"
          aria-label="Select country"
        >
          <option>Select Country</option>
          {this.displayOptions()}
        </select>
      </div>
    );
  }
}