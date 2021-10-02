let groupColors = {
  income: '#fff2cc',
  age: '#d0e2f4',
  origin: '#ead1dc',
  employment: '#fce5cd',
  education: '#c9daf9',
  language: '#d0e0e3',
}

let groupCategories = {
  income: [
    'HIU Income < 100% FPL', 'HIU Income 100-138% FPL', 'HIU Income 139-249% FPL',
    'HIU Income 250-400% FPL', 'HIU Income 400% FPL'
  ],
  age: [
    'Age 0-18', 'Age 19-34', 'Age 35-49', 'Age 50-64'
  ],
  origin: [
    'Spanish/Hispanic/Latino Origin', 'White Non-Latino', 'Black Non-Latino',
    'Asian / Native-Hawaiian / Pac Islander', 'American Indian / Alaska Native',
    'Multi-racial or Other'
  ],
  employment: [
    'Employed in Agriculture Industry', 'Employed in Mining/Construction Industry',
    'Employed in Manufacturing Industry', 'Employed in Trade Industry',
    'Employed in Info/Finance Industry', 'Employed in Education/Health Industry',
    'Employed in Entertainment Industry', 'Employed in Service Industry',
    'Employed in Military/Public Industry'
  ],
  education: [
    'Less than High School', 'High School Diploma', 'College Grad'
  ],
  language: [
    'No English Speaking Adults in HH', 'English Spoken in HH', 'Spanish Spoken in HH',
    'Chinese Spoken in HH', 'Korean Spoken in HH', 'Vietnamese Spoken in HH',
    'Tagalog Spoken in HH', 'Russian Spoken in HH', 'Other Language Spoken in HH'
  ],
  total:[
    'Income','Age','Gender','Married','Child in Family','Origin','SNAP Recipient',
    'Disability','Full Time Worker in Family','Employment','Education','Spoken Language'
  ],
}

let groupData = {
  income: [
    [0.1570],
    [0.2112, 0.0003],
    [0.7425, 0.1344, 0.0841],
    [0.4772, 0.4701, 0.0187, 0.2287],
  ],
  age: [
    [0.1585],
    [0.3655, 0.0588],
    [0.1957, 0.2235, 0.1148],
  ],
  origin: [
    [0.4065],
    [0.0382, 0.1358],
    [0.0207, 0.1676, 0.0245],
    [0.0006, 0.0102, 0.1349, 0.0185],
    [0.0123, 0.0683, 0.0540, 0.4571, 0.0824],
  ],
  employment: [
    [0.1437],
    [0.0521, 0.0001],
    [0.0801, 0.0198, 0.0336],
    [0.0891, 0.1087, 0.0216, 0.0037],
    [0.0422, 0.0025, 0.0250, 0.0044, 0.0054],
    [0.0360, 0.0931, 0.0073, 0.0521, 0.0222, 0.0259],
    [0.0016, 0.0005, 0.0923, 0.0623, 0.0600, 0.0058, 0.0000],
    [0.0547, 0.2179, 0.2480, 0.0882, 0.0429, 0.0541, 0.0404, 0.1246],
  ],
  education: [
    [0.1115],
    [0.3613, 0.2972],
  ],
  language: [
    [0.9382],
    [0.8472, 0.8585],
    [0.1856, 0.2397, 0.1016],
    [0.2243, 0.2848, 0.2693, 0.0267],
    [0.0288, 0.0577, 0.0617, 0.0267, 0.4171],
    [0.0022, 0.0042, 0.0182, 0.0306, 0.0013, 0.0013],
    [0.1432, 0.1392, 0.0691, 0.4502, 0.0013, 0.0013, 0.0004],
    [0.2758, 0.3255, 0.0643, 0.1596, 0.0280, 0.0027, 0.1948, 0.0477],
  ],
  total:[
    [null,  0.1442,  0.0612,  0.0539,  0.0765,  0.2723,  0.2551,  0.1872,  0.3717,  0.3949,  0.3254,  0.2411],
    [0.1347,  null,  0.1436,  0.0291,  0.2899,  0.3344,  0.0459,  0.0104,  0.0946,  0.4411,  0.1254,  0.1739],
    [0.1739,  0.4623,  null,  0.3801,  0.4187,  0.1733,  0.0420,  0.0920,  0.0595,  0.4178,  0.1988,  0.2693],
    [0.2209,  0.4697,  0.4053,  null,  0.1569,  0.6469,  0.0142,  0.0024,  0.2525,  0.6013,  0.1315,  0.1466],
    [0.3419,  0.7788,  0.4190,  0.1569,  null,  0.3363,  0.0135,  0.0128,  0.2670,  0.5831,  0.1054,  0.1549],
    [0.1744,  0.1901,  0.0496,  0.1245,  0.0519,  null,  0.0272,  0.0601,  0.1355,  0.3959,  0.2097,  0.5020],
    [0.4818,  0.1270,  0.0465,  0.0142,  0.0135,  0.1521,  null,  0.2209,  0.2952,  0.2098,  0.1582,  0.1135],
    [0.3481,  0.0489,  0.0987,  0.0024,  0.0128,  0.2524,  0.2209,  null,  0.1106,  0.3541,  0.2647,  0.3915],
    [0.8477,  0.2559,  0.0615,  0.2525,  0.2670,  0.6259,  0.2952,  0.1106,  null,  0.4103,  0.1561,  0.1127],
    [0.1650,  0.1759,  0.0699,  0.1298,  0.0603,  0.2890,  0.0186,  0.0409,  0.0713,  null,  0.1885,  0.2214],
    [0.4155,  0.1883,  0.0951,  0.0598,  0.0470,  0.3390,  0.0854,  0.1281,  0.0721,  0.5291,  null,  0.3946],
    [0.1026,  0.0483,  0.0204,  0.0131,  0.0083,  0.4702,  0.0129,  0.1161,  0.0087,  0.2852,  0.2429,  null],
  ],
};

function addTableHeader(dom, headerRow, headerColor) {
  if (!dom) return;
  let thead = dom.querySelector('thead');

  let cells = headerRow.map(text => `<th>${text}</td>`).join('');
  thead.innerHTML = `<tr style="background: ${headerColor}"><td></td>${cells}</tr>`;
}

function addTableBody(dom, columnNames, data, headerColor) {
  if (!dom) return;
  let tbody = dom.querySelector('tbody');

  let num = columnNames.length;
  let html = columnNames.map((value, index) => {
    let row = '';
    if (index == 0) {
      row = '<td style="background-color: #efefef"></td>'.repeat(num);
    } else {
      for (let i = 0; i < num; i++) {
        let value = data[index - 1][i] || '';
        let color = value == '' ? '#efefef' : `rgba(87, 187, 138, ${value})`;
        row += `<td class="text-center align-middle" style="background-color: ${color}">${value}</td>`
      }
    }
    row = `<td style="background: ${headerColor}">${value}</td>` + row;
    console.log(row);

    return `<tr>${row}</tr>`
  }).join('');
  tbody.innerHTML = html;
}

let tableGroupIncomeDom = document.getElementById('table-group-income');
addTableHeader(tableGroupIncomeDom, groupCategories.income, groupColors.income);
addTableBody(tableGroupIncomeDom, groupCategories.income, groupData.income, groupColors.income);

let tableGroupAgeDom = document.getElementById('table-group-age');
addTableHeader(tableGroupAgeDom, groupCategories.age, groupColors.age);
addTableBody(tableGroupAgeDom, groupCategories.age, groupData.age, groupColors.age);

let tableGroupGenderDom = document.getElementById('table-group-gender');
addTableHeader(tableGroupGenderDom, groupCategories.gender, groupColors.gender);
addTableBody(tableGroupGenderDom, groupCategories.gender, groupData.gender, groupColors.gender);

let tableGroupOriginDom = document.getElementById('table-group-origin');
addTableHeader(tableGroupOriginDom, groupCategories.origin, groupColors.origin);
addTableBody(tableGroupOriginDom, groupCategories.origin, groupData.origin, groupColors.origin);

let tableGroupEmploymentDom = document.getElementById('table-group-employment');
addTableHeader(tableGroupEmploymentDom, groupCategories.employment, groupColors.employment);
addTableBody(tableGroupEmploymentDom, groupCategories.employment, groupData.employment, groupColors.employment);

let tableGroupEducationDom = document.getElementById('table-group-education');
addTableHeader(tableGroupEducationDom, groupCategories.education, groupColors.education);
addTableBody(tableGroupEducationDom, groupCategories.education, groupData.education, groupColors.education);

let tableGroupLanguageDom = document.getElementById('table-group-language');
addTableHeader(tableGroupLanguageDom, groupCategories.language, groupColors.language);
addTableBody(tableGroupLanguageDom, groupCategories.language, groupData.language, groupColors.language);


let regressionIncomeDom = document.getElementById('linear-regression-income');
let regressionIncomeChart = echarts.init(regressionIncomeDom);

let regressionAgeDom = document.getElementById('linear-regression-age');
let regressionAgeChart = echarts.init(regressionAgeDom);

let regressionGenderDom = document.getElementById('linear-regression-gender');
let regressionGenderChart = echarts.init(regressionGenderDom);

let regressionMarriedDom = document.getElementById('linear-regression-married');
let regressionMarriedChart = echarts.init(regressionMarriedDom);

let regressionOriginDom = document.getElementById('linear-regression-origin');
let regressionOriginChart = echarts.init(regressionOriginDom);

let regressionSNAPDom = document.getElementById('linear-regression-snap');
let regressionSNAPChart = echarts.init(regressionSNAPDom);

let regressionDisabilityDom = document.getElementById('linear-regression-disability');
let regressionDisabilityChart = echarts.init(regressionDisabilityDom);

let regressionEmploymentDom = document.getElementById('linear-regression-employment');
let regressionEmploymentChart = echarts.init(regressionEmploymentDom);

let regressionEducationDom = document.getElementById('linear-regression-education');
let regressionEducationChart = echarts.init(regressionEducationDom);

let regressionLanguageDom = document.getElementById('linear-regression-language');
let regressionLanguageChart = echarts.init(regressionLanguageDom);


var dimension = {
  income: { x: 0.5, y: 0.2 },
  age: { x: 0.6, y: 0.25 },
  gender: { x: 1, y: 0.5 },
  married: { x: 0.6, y: 0.25 },
  origin: { x: 0.6, y: 0.25 },
  snap: { x: 0.6, y: 0.25 },
  disability: { x: 0.6, y: 0.5 },
  employment: { x: 0.5, y: 0.25 },
  education: { x: 0.6, y: 0.25 },
  language: { x: 0.6, y: 0.25 },
}

function linear_regression_income_100(x) {
  return 0.24179486253397153 * x + 0.016530268574615037;
}

function linear_regression_income_100_138(x) {
  return 0.9561028390170999 * x + 0.006473941400930813;
}

function linear_regression_income_139_249(x) {
  return 0.1650057814732367 * x + 0.04876809427079716;
}

function linear_regression_income_250_400(x) {
  return -0.4118704994062763 * x + 0.16609747426306304;
}

function linear_regression_income_400(x) {
  return -0.48366663700083606 * x + 0.16764038689890193;
}

function linear_regression_age_0_18(x) {
  return 0.14236917838181506 * x + 0.07035416744887213;
}

function linear_regression_age_19_34(x) {
  return -0.28766240454926956 * x + 0.2023441811676271;
}

function linear_regression_age_35_49(x) {
  return 0.29932227961219043 * x + 0.014254373067035975;
}

function linear_regression_age_50_54(x) {
  return -0.12369966324348983 * x + 0.11733134219758472;
}

function linear_regression_gender_male(x) {
  return -0.6285769105059232 * x + 0.4539471313582184;
}

function linear_regression_gender_female(x) {
  return 0.6285770057074016 * x + -0.17462981474923994;
}

function linear_regression_married(x) {
  return 0.22815075656093656 * x + 0.030896904989426953;
}

function linear_regression_origin_spanish(x) {
  return 0.023843552607438017 * x + 0.0877484230681932;
}

function linear_regression_origin_white_non_latino(x) {
  return -0.013293551293223769 * x + 0.09948076355079162;
}

function linear_regression_origin_black_non_latino(x) {
  return 0.007568302099691593 * x + 0.09067383630544129;
}

function linear_regression_origin_asian_hawaiian_pac(x) {
  return -0.1784967384042788 * x + 0.10023752160681877;
}

function linear_regression_origin_native(x) {
  return 0.0946136891530409 * x + 0.09275596721655087;
}

function linear_regression_origin_multi_other(x) {
  return -0.13264735101803793 * x + 0.09653841800272789;
}

function linear_regression_snap(x) {
  return 0.2494479374173274 * x + 0.05527726398509809;
}

function linear_regression_disability(x) {
  return 0.637148511683133 * x + 0.031119347593504244;
}

function linear_regression_employment_agriculture(x) {
  return -0.3122476381843794 * x + 0.1003903090290143;
}

function linear_regression_employment_mining_construction(x) {
  return 0.6176548379594503 * x + 0.031890822928208815;
}

function linear_regression_employment_manufacturing(x) {
  return -0.2641509354876654 * x + 0.10884905574028338;
}

function linear_regression_employment_trade(x) {
  return -0.30961637058284835 * x + 0.13949600347493082;
}

function linear_regression_employment_info_finance(x) {
  return -0.7903519601929067 * x + 0.182308860713083;
}

function linear_regression_employment_education_health(x) {
  return -0.8407216967304662 * x + 0.1793299017726056;
}

function linear_regression_employment_entertainment(x) {
  return 0.3273500250262741 * x + 0.05165180086460196;
}

function linear_regression_employment_service(x) {
  return 0.1300389892937543 * x + 0.08596879138258957;
}

function linear_regression_employment_military_public(x) {
  return -0.3428208928455548 * x + 0.1009010149762006;
}

function linear_regression_education_lt_high_school(x) {
  return 0.2435606482509234 * x + 0.053373136040627774;
}

function linear_regression_education_high_school(x) {
  return 0.4177138966285943 * x + -0.1943779967175528;
}

function linear_regression_education_college(x) {
  return -0.491002150856268 * x + 0.16830680436137097;
}

function linear_regression_language_english(x) {
  return 0.1383682757708563 * x + -0.03495819578459175;
}

function linear_regression_language_spanish(x) {
  return -0.0019457346001981201 * x + 0.09206608258917727;
}

function linear_regression_language_chinese(x) {
  return -2.6003490528173057 * x + 0.09973821933356879;
}

function linear_regression_language_korean(x) {
  return -2.811594256888266 * x + 0.09478260835875635;
}

function linear_regression_language_vietnamese(x) {
  return -1.7261904761904763 * x + 0.09392857119174941;
}

function linear_regression_language_tagalog(x) {
  return -4.9230769230769225 * x + 0.09923076887543385;
}

function linear_regression_language_russian(x) {
  return -4.562499953433868 * x + 0.09562499925959855;
}

function linear_regression_language_other(x) {
  return -1.1233766314740554 * x + 0.11794990664477707;
}

function generateData(func, width) {
  let data = [];
  for (let i = 0; i <= width; i += 0.01) {
    data.push([i, func(i)]);
  }
  return data;
}

function generateIncomeData(func) {
  return generateData(func, dimension.income.x);
}

function generateAgeData(func) {
  return generateData(func, dimension.age.x);
}

function generateGenderData(func) {
  return generateData(func, dimension.gender.x);
}

function generateMarriedData(func) {
  return generateData(func, dimension.married.x);
}

function generateOriginData(func) {
  return generateData(func, dimension.origin.x);
}

function generateSNAPData(func) {
  return generateData(func, dimension.snap.x);
}

function generateDisabilityData(func) {
  return generateData(func, dimension.disability.x);
}

function generateEmploymentData(func) {
  return generateData(func, dimension.employment.x);
}

function generateEducationData(func) {
  return generateData(func, dimension.education.x);
}


function generateLanguageData(func) {
  return generateData(func, dimension.language.x);
}

let incomeOption = {
  animation: true,
  animationDuration: 100,
  grid: {
    top: 100,
    left: 100,
    right: 200,
    bottom: 100,
    containLabel: true
  },
  xAxis: {
    name: 'Percentage in Each Income Group',
    minorTick: {
      show: true
    },
  },
  yAxis: {
    name: 'Uninsured Percentage',
    min: 0,
    max: dimension.income.y,
    minorTick: {
      show: true
    },
  },
  legend: {
    show: true,
  },
  series: [
    {
      name: 'HIU Income < 100% FPL',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateIncomeData(linear_regression_income_100)
    },
    {
      name: 'HIU Income 100-138% FPL',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateIncomeData(linear_regression_income_100_138)
    },
    {
      name: 'HIU Income 139-249% FPL',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateIncomeData(linear_regression_income_139_249)
    },
    // {
    //   name: 'HIU Income 250-400% FPL',
    //   type: 'line',
    //   showSymbol: false,
    //   clip: true,
    //   data: generateIncomeData(linear_regression_income_250_400)
    // },
    {
      name: 'HIU Income 400% FPL',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateIncomeData(linear_regression_income_400)
    },
  ]
};

let ageOption = {
  animation: true,
  animationDuration: 100,
  grid: {
    top: 100,
    left: 100,
    right: 200,
    bottom: 100,
    containLabel: true
  },
  xAxis: {
    name: 'Percentage in Each Age Group',
    minorTick: {
      show: true
    },
  },
  yAxis: {
    name: 'Uninsured Percentage',
    min: 0,
    max: dimension.age.y,
    minorTick: {
      show: true
    },
  },
  legend: {
    show: true,
  },
  series: [
    {
      name: 'Age 0-18',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateAgeData(linear_regression_age_0_18)
    },
    {
      name: 'Age 19-34',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateAgeData(linear_regression_age_19_34)
    },
    {
      name: 'Age 35-49',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateAgeData(linear_regression_age_35_49)
    },
    {
      name: 'Age 50-54',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateAgeData(linear_regression_age_50_54)
    }
  ]
};

let genderOption = {
  animation: true,
  animationDuration: 100,
  grid: {
    top: 100,
    left: 100,
    right: 200,
    bottom: 100,
    containLabel: true
  },
  xAxis: {
    name: 'Percentage in Each Gender Group',
    minorTick: {
      show: true
    },
  },
  yAxis: {
    name: 'Uninsured Percentage',
    min: 0,
    max: dimension.gender.y,
    minorTick: {
      show: true
    },
  },
  legend: {
    show: true,
  },
  series: [
    // {
    //   name: 'Male',
    //   type: 'line',
    //   showSymbol: false,
    //   clip: true,
    //   data: generateGenderData(linear_regression_gender_male)
    // },
    {
      name: 'Female',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateGenderData(linear_regression_gender_female)
    },
  ]
};

let marriedOption = {
  animation: true,
  animationDuration: 100,
  grid: {
    top: 100,
    left: 100,
    right: 200,
    bottom: 100,
    containLabel: true
  },
  xAxis: {
    name: 'Married Percantage',
    minorTick: {
      show: true
    },
  },
  yAxis: {
    name: 'Uninsured Percentage',
    min: 0,
    max: dimension.married.y,
    minorTick: {
      show: true
    },
  },
  legend: {
    show: true,
  },
  series: [
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateMarriedData(linear_regression_married)
    },
  ]
};

let originOption = {
  animation: true,
  animationDuration: 100,
  grid: {
    top: 100,
    left: 100,
    right: 200,
    bottom: 100,
    containLabel: true
  },
  xAxis: {
    name: 'Percentage in Each Origin Group',
    minorTick: {
      show: true
    },
  },
  yAxis: {
    name: 'Uninsured Percentage',
    min: 0,
    max: dimension.origin.y,
    minorTick: {
      show: true
    },
  },
  legend: {
    show: true,
  },
  series: [
    {
      name: 'Spanish/Hispanic/Latino Origin',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateOriginData(linear_regression_origin_spanish)
    },
    {
      name: 'White Non-Latino',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateOriginData(linear_regression_origin_white_non_latino)
    },
    {
      name: 'Black Non-Latino',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateOriginData(linear_regression_origin_black_non_latino)
    },
    {
      name: 'Asian / Native-Hawaiian / Pac Islander',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateOriginData(linear_regression_origin_asian_hawaiian_pac)
    },
    {
      name: 'American Indian / Alaska Native',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateOriginData(linear_regression_origin_native)
    },
    {
      name: 'Multi-racial or Other',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateOriginData(linear_regression_origin_multi_other)
    },
  ]
};

let snapOption = {
  animation: true,
  animationDuration: 100,
  grid: {
    top: 100,
    left: 100,
    right: 200,
    bottom: 100,
    containLabel: true
  },
  xAxis: {
    name: 'Percentage Receiving SNAP',
    minorTick: {
      show: true
    },
  },
  yAxis: {
    name: 'Uninsured Percentage',
    min: 0,
    max: dimension.snap.y,
    minorTick: {
      show: true
    },
  },
  legend: {
    show: true,
  },
  series: [
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateSNAPData(linear_regression_snap)
    },
  ]
};

let disabilityOption = {
  animation: true,
  animationDuration: 100,
  grid: {
    top: 100,
    left: 100,
    right: 200,
    bottom: 100,
    containLabel: true
  },
  xAxis: {
    name: 'Percentage with Disability',
    minorTick: {
      show: true
    },
  },
  yAxis: {
    name: 'Uninsured Percentage',
    min: 0,
    max: dimension.disability.y,
    minorTick: {
      show: true
    },
  },
  legend: {
    show: true,
  },
  series: [
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateDisabilityData(linear_regression_disability)
    },
  ]
};

let employmentOption = {
  animation: true,
  animationDuration: 100,
  grid: {
    top: 100,
    left: 100,
    right: 200,
    bottom: 100,
    containLabel: true
  },
  xAxis: {
    name: 'Percentage in Each Gender Group',
    minorTick: {
      show: true
    },
  },
  yAxis: {
    name: 'Uninsured Percentage',
    min: 0,
    max: dimension.employment.y,
    minorTick: {
      show: true
    },
  },
  legend: {
    show: true,
  },
  series: [
    {
      name: 'Employed in Agriculture Industry',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEmploymentData(linear_regression_employment_agriculture)
    },
    {
      name: 'Employed in Mining/Construction Industry',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEmploymentData(linear_regression_employment_agriculture)
    },
    {
      name: 'Employed in Manufacturing Industry',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEmploymentData(linear_regression_employment_mining_construction)
    },
    {
      name: 'Employed in Manufacturing Industry',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEmploymentData(linear_regression_employment_manufacturing)
    },
    {
      name: 'Employed in Trade Industry',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEmploymentData(linear_regression_employment_trade)
    },
    {
      name: 'Employed in Info/Finance Industry',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEmploymentData(linear_regression_employment_info_finance)
    },
    {
      name: 'Employed in Education/Health Industry',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEmploymentData(linear_regression_employment_education_health)
    },
    {
      name: 'Employed in Entertainment Industry',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEmploymentData(linear_regression_employment_entertainment)
    },
    {
      name: 'Employed in Service Industry',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEmploymentData(linear_regression_employment_service)
    },
    {
      name: 'Employed in Military/Public Industry',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEmploymentData(linear_regression_employment_military_public)
    },

  ]
};

let educationOption = {
  animation: true,
  animationDuration: 100,
  grid: {
    top: 100,
    left: 100,
    right: 215,
    bottom: 100,
    containLabel: true
  },
  xAxis: {
    name: 'Percentage in Each Education Group',
    minorTick: {
      show: true
    },
  },
  yAxis: {
    name: 'Uninsured Percentage',
    min: 0,
    max: dimension.education.y,
    minorTick: {
      show: true
    },
  },
  legend: {
    show: true,
  },
  series: [
    {
      name: 'Less than High School',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEducationData(linear_regression_education_lt_high_school)
    },
    {
      name: 'High School Diploma',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEducationData(linear_regression_education_high_school)
    },
    {
      name: 'College Grad',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEducationData(linear_regression_education_college)
    },
  ]
};

let languageOption = {
  animation: true,
  animationDuration: 100,
  grid: {
    top: 100,
    left: 100,
    right: 215,
    bottom: 100,
    containLabel: true
  },
  xAxis: {
    name: 'Percentage in Each Language Group',
    minorTick: {
      show: true
    },
  },
  yAxis: {
    name: 'Uninsured Percentage',
    min: 0,
    max: dimension.language.y,
    minorTick: {
      show: true
    },
  },
  legend: {
    show: true,
  },
  series: [
    {
      name: 'English Spoken in HH',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateLanguageData(linear_regression_language_english)
    },
    {
      name: 'Spanish Spoken in HH',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateLanguageData(linear_regression_language_spanish)
    },
    {
      name: 'Chinese Spoken in HH',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateLanguageData(linear_regression_language_chinese)
    },
    {
      name: 'Korean Spoken in HH',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateLanguageData(linear_regression_language_korean)
    },
    {
      name: 'Vietnamese Spoken in HH',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateLanguageData(linear_regression_language_vietnamese)
    },
    {
      name: 'Tagalog Spoken in HH',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateLanguageData(linear_regression_language_tagalog)
    },
    {
      name: 'Russian Spoken in HH',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateLanguageData(linear_regression_language_russian)
    },
    {
      name: 'Other Language Spoken in HH',
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateLanguageData(linear_regression_language_other)
    },
  ]
};


regressionIncomeChart.setOption(incomeOption);
regressionAgeChart.setOption(ageOption);
regressionGenderChart.setOption(genderOption);
regressionMarriedChart.setOption(marriedOption);
regressionOriginChart.setOption(originOption);
regressionSNAPChart.setOption(snapOption);
regressionDisabilityChart.setOption(disabilityOption);
regressionEmploymentChart.setOption(employmentOption);
regressionEducationChart.setOption(educationOption);
regressionLanguageChart.setOption(languageOption);
