// Code your solution in this file
function findMatching(arr, name) {
  return arr.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  })
}

function fuzzyMatch (arr, name) {
  var lengthOfName = name.length;
  return arr.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === name;
  })
}

function matchName (arr, name) {
  return arr.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  })
}
