// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (driver){
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (drivers, partialName) {
  let lengthOfName = partialName.length;
  return drivers.filter(function (driver) {
    return driver.slice(0, lengthOfName) === partialName;
  });
}

function matchName(drivers,name) {
  return drivers.filter(function (driver){
    if (driver[name] === name){
      return driver.name;
    }
  })
}

function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
