function findMatching(col, str) {
  return col.filter(function(name) { return name.toLowerCase() === str.toLowerCase() });
}

function fuzzyMatch(col, str) {
  return col.filter(function(user) {return user.slice(0, str.length) === str});
}

function matchName(col, str) {
  console.log(col)
  return col.filter(function(user) {return user.name === str})
}
