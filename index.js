function findMatching(drivers,name){
  array = [];
  for(let i = 0; i < drivers.length; i++) {
    if (drivers[i].toLowerCase() === name.toLowerCase()){
      array.push(drivers[i]);
    }
  }
  return array;
}

function fuzzyMatch(drivers, string){
  return drivers.filter(function (driver) {return driver.toLowerCase().slice(0,string.length) === string.toLowerCase()})
};

function matchName(drivers, string){
  return drivers.filter(function(driver) {return driver.name.toLowerCase() === string.toLowerCase()})
};
