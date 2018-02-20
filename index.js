// Code your solution in this file

function findMatching(array, string) {
  const matched = array.filter(function (driver) {return driver.toLowerCase() === string.toLowerCase()});
  return matched;
}

function fuzzyMatch(array, string) {
  const beginning = string.length
  let matched;
  debugger;
  if (beginning !== 1) {
    matched = array.filter(function (driver) {return driver.toLowerCase().slice(0, beginning) === string.toLowerCase()});
  } else {
    matched = array.filter(function (driver) {return driver.toLowerCase()[0] === string.toLowerCase()});
  }
  return matched;
}

function matchName(array,string) {
  const matched = array.filter(function (driver) {return driver.name.toLowerCase() === string.toLowerCase()});
  return matched;
}
