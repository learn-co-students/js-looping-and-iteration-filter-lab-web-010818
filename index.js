// Code your solution in this file

function findMatching(drivers, string){

  const newDrivers = drivers.filter(function (driver) {return string.toLowerCase() === driver.toLowerCase()});

  return newDrivers;
}

function fuzzyMatch(drivers, string) {
  let num = string.length

  const newDrivers = drivers.filter(
    function(driver){
      return string.toLowerCase() === driver.toLowerCase().substring(0,num)
    })

  return newDrivers;
}

function matchName(drivers, name){
  const newDrivers = drivers.filter(
    function(driver){
      return driver.name.toLowerCase() === name.toLowerCase();

    })
  return newDrivers;
}


//
// function filter (collection, cb) {
//   const newCollection = [];
//
//   for (const user of collection) {
//     if (cb(user)) {
//       newCollection.push(user);
//     }
//   }
//
//   return newCollection;
// }
//
// const bluePenguinUsers = filter(users, function(user){return user.favoriteColor === 'Blue' && user.favoriteAnimal === 'Penguin';});
//
// Collection.filter(function (num) {return num > 3;});
