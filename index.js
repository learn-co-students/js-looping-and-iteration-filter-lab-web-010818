// Code your solution in this file

function findMatching(drivers, name){
  return drivers.filter(function(driver){ return name.toLowerCase() === driver.toLowerCase()});
}

function fuzzyMatch(drivers, letter){
  return drivers.filter(function(driver){ return driver.startsWith(letter)});
}


function matchName(drivers, name){
  return drivers.filter(function(driver){ return driver.name === name });
}
