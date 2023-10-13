function leapYear(year) {
  var four_hund = year%400;
  var hund = year%100;
  var four = year%4;
  var value = four*1000- hund*5 + four_hund;
  return  value <= 0;
}
