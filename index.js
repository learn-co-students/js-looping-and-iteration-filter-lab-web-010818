function findMatching (drivers, str) {
  return drivers.filter (function (driver) {
    return driver.toLowerCase() === str.toLowerCase();
  });
}


function fuzzyMatch (drivers, str) {
  return drivers.filter (function (driver) {
    return driver.startsWith(str);
  });
}

function matchName (drivers, str) {
  return drivers.filter (function (driver) {
    return driver.name.toLowerCase() === str.toLowerCase();
  });
}
