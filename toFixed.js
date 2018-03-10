
function toFixed (numberAsString, precision) {
  
  // string to store the result of toFixed   
  var resultString;  

  // if first argument is of type number, then convert to string
  // else, assume it is already a string  
  if  (typeof numberAsString === 'number') { numberAsString = String(numberAsString);}

  // moving decimal as per precision
  // ('1.615', 2) -> '161.5' 
  var regex = new RegExp ("(\\.)" + "(\\d{" + precision + "})" , 'g');
  var stringWithDecimalMoved = numberAsString.replace(regex, "$2$1");

  // if total digits in decimal place is lesser than precision count, then calculate the difference and add corresponding zeroes at the end
  // toFixed(0.615, 4) -> '0.6150'   
  if (numberAsString.split('.')[1] && (numberAsString.split('.'))[1].length < precision) {
    var zeroString = '';
    var zeroCount = precision - (stringWithDecimalMoved.split('.'))[1].length;
    
    for (var i = 0; i < zeroCount; i++) {
      zeroString = '0' + zeroString;    
    }
    return stringWithDecimalMoved + zeroString;
  }
  
  // convert stringWithDecimalMoved into type Number to convert to nearest integer
  var numberWithDecimalMoved = Number(stringWithDecimalMoved);
  
  // 161.5 -> 162
  var numberRoundedToNearestInteger = Math.round(numberWithDecimalMoved);
  
  // convert back the rounded number to string 
  var stringFormOfRoundedNumber = String(numberRoundedToNearestInteger);

  // if numberAsString has decimal
  if (numberAsString.split('.')[1]) {
    
    // add decimal as per precision
    // '(162, 2)' -> '1.62'
    var regexToAddDecimal = new RegExp ("(\\d{" + precision + "})(?!\\d)", 'g');
    resultString = stringFormOfRoundedNumber.replace(regexToAddDecimal, '.$1');
    
    // check to see if resultString has decimal in the beginning, then add 0 before the decimal
    if (resultString.charAt(0) === '.') {return '0' + resultString}
    
    // if decimal is not the first character, then return the string
    return resultString;
  } 
    // if numberAsString has no decimal, add decimal and zeroes as per precision 
    // toFixed('100', 4) -> '100.0000'
    else {
      var zeroString = '';
      for (var i = 0; i < precision; i++) {
        zeroString = '0' + zeroString;
      }
      resultString = stringFormOfRoundedNumber.replace(/(\d{1})(?!\d)/g,'$1' + '.' + zeroString);
      return resultString;   
  }
   
};
