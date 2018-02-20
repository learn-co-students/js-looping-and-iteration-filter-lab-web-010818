// Code your solution in this file
function findMatching(list, name) {
  return list.filter(driverName => driverName.toLowerCase() === name.toLowerCase());
}


function fuzzyMatch(list, letters) {
  return list.filter(name => name.slice(0, letters.length) === letters)
}

function matchName(list, name) {
  debugger
  return list.filter(driver => driver.name.toLowerCase() === name.toLowerCase() )
}
