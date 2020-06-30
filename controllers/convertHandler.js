/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    
    
    var result = input.match(/.*[0-9](?=[a-z]*$)/i);
    let testRegex = /[^0-9./]/
    if (!result) {
      return 1
    }else if (testRegex.test(result)[0]) {
      return false
    } else {
      try {
        Math.round(eval(result[0])*100000)/100000
      }
      catch(e) {
        return false
      };
      return Math.round(eval(result[0])*100000)/100000
    }
  };
  
  this.getUnit = function(input) {
    var result = input.match(/[^0-9]+$/i)[0].toLowerCase();
    
    switch(result) {
      case "l":
        return "l";
      case "gal":
        return "gal";
      case "lbs":
        return "lbs";
      case "kg": 
        return "kg";
      case "mi":
        return "mi";
      case "km":
        return "km";
      default:
        return false  
    }
  };
  
  this.getReturnUnit = function(initUnit) {

    switch(initUnit){
      case "l":
        return "gal";
      case "gal":
        return "l";
      case "lbs":
        return "kg";
      case "kg": 
        return "lbs";
      case "mi":
        return "km";
      case "km":
        return "mi";
    }

  };

  this.spellOutUnit = function(unit) {
    
    switch(unit){
      case "l":
        return "liters";
      case "gal":
        return "gallons";
      case "lbs":
        return "pounds";
      case "kg": 
        return "kilograms";
      case "mi":
        return "miles";
      case "km":
        return "kilometers";
    }

  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    switch(initUnit){
      case "l":
        return Math.round(initNum/galToL*100000)/100000;
      case "gal":
        return Math.round(initNum*galToL*100000)/100000;
      case "lbs":
        return Math.round(initNum*lbsToKg*100000)/100000;
      case "kg": 
        return Math.round(initNum/lbsToKg*100000)/100000;
      case "mi":
        return Math.round(initNum*miToKm*100000)/100000;
      case "km":
        return Math.round(initNum/miToKm*100000)/100000;
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
    
    return result;
  };
  
}

module.exports = ConvertHandler;
