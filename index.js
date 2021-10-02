

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
  income: {x: 0.5, y: 0.2},
  age: {x: 0.6, y: 0.25},
  gender: {x: 1, y: 0.5},
  married: {x: 0.6, y: 0.25},
  origin: {x: 0.6, y: 0.25},
  snap: {x: 0.6, y: 0.25},
  disability: {x: 0.6, y: 0.5},
  employment: {x: 0.5, y: 0.25},
  education: {x: 0.6, y: 0.25},
  language: {x: 0.6, y: 0.25},
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
  series: [
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateIncomeData(linear_regression_income_100)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateIncomeData(linear_regression_income_100_138)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateIncomeData(linear_regression_income_139_249)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateIncomeData(linear_regression_income_250_400)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateIncomeData(linear_regression_income_400)
    },
  ]
};

let ageOption = {
  animation: true,
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
  series: [
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateAgeData(linear_regression_age_0_18)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateAgeData(linear_regression_age_19_34)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateAgeData(linear_regression_age_35_49)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateAgeData(linear_regression_age_50_54)
    }
  ]
};

let genderOption = {
  animation: true,
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
  series: [
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateGenderData(linear_regression_gender_male)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateGenderData(linear_regression_gender_female)
    },
  ]
};

let marriedOption = {
  animation: true,
  grid: {
    top: 100,
    left: 100,
    right: 200,
    bottom: 100,
    containLabel: true
  },
  xAxis: {
    name: 'Percentage of Married',
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
  series: [
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateOriginData(linear_regression_origin_spanish)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateOriginData(linear_regression_origin_white_non_latino)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateOriginData(linear_regression_origin_black_non_latino)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateOriginData(linear_regression_origin_asian_hawaiian_pac)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateOriginData(linear_regression_origin_native)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateOriginData(linear_regression_origin_multi_other)
    },
  ]
};

let snapOption = {
  animation: true,
  grid: {
    top: 100,
    left: 100,
    right: 200,
    bottom: 100,
    containLabel: true
  },
  xAxis: {
    name: 'Percentage in SNAP Group',
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
  grid: {
    top: 100,
    left: 100,
    right: 200,
    bottom: 100,
    containLabel: true
  },
  xAxis: {
    name: 'Percentage in Disability Group',
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
  series: [
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEmploymentData(linear_regression_employment_agriculture)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEmploymentData(linear_regression_employment_agriculture)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEmploymentData(linear_regression_employment_mining_construction)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEmploymentData(linear_regression_employment_manufacturing)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEmploymentData(linear_regression_employment_trade)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEmploymentData(linear_regression_employment_info_finance)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEmploymentData(linear_regression_employment_education_health)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEmploymentData(linear_regression_employment_entertainment)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEmploymentData(linear_regression_employment_service)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEmploymentData(linear_regression_employment_military_public)
    },
    
  ]
};

let educationOption = {
  animation: true,
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
  series: [
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEducationData(linear_regression_education_lt_high_school)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEducationData(linear_regression_education_high_school)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateEducationData(linear_regression_education_college)
    },
  ]
};

let languageOption = {
  animation: true,
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
  series: [
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateLanguageData(linear_regression_language_english)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateLanguageData(linear_regression_language_spanish)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateLanguageData(linear_regression_language_chinese)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateLanguageData(linear_regression_language_korean)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateLanguageData(linear_regression_language_vietnamese)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateLanguageData(linear_regression_language_tagalog)
    },
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateLanguageData(linear_regression_language_russian)
    },
    {
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
