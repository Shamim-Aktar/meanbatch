function repeatStringNumTimes(times, string) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
document.querySelector('p').innerHTML=repeatStringNumTimes(3, 'x');
document.querySelector('#abc').innerHTML=repeatStringNumTimes(7, '-');