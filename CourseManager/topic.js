var topic=[
    "＠Zepp Fukuoka",
    "＠Zepp Nagoya",
    "＠Zepp Osaka Bayside",
    "＠Zepp DiverCity TOKYO",
    "＠Zepp DiverCity TOKYO"
];

var startDate = new Date();

function setmonthAndDay(startMonth, startDay)
{
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setmonthAndDay(8,24);