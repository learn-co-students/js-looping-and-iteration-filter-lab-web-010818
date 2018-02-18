function findMatching(drivers, string) {
  return drivers.filter((e) => { return e.toLowerCase() === string.toLowerCase(); });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter((e) => { return e.startsWith(string) });
}

function matchName(drivers, string) {
  return drivers.filter((e) => { return e.name === string; });
}
