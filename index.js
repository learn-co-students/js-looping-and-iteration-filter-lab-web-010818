// Code your solution in this file

//drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (array, name){
  let result = [];
  for (const person of array){
    if (name.toLowerCase() === person.toLowerCase()) {
      result.push(person);
    }
  }
  return result;
}

// function fuzzyMatch (array, beginning){
//
//   return array.filter(function (name) { return name[0] + name[1] === beginning} )
//
// }

// function fuzzyMatch(array, beginning){
//   let result = [];
//
//     for (const name of array){
//       let match = ''
//         for (let i = 0; i < beginning.length; i++){
//           if (beginning[i] === name[i]){
//             match += name[i];
//       }
//         if (match === beginning){
//           result.push(name)
//         }
//     }
//   }
//   return result;
// }

function fuzzyMatch(array, beginning){
  let result = []
  let length = beginning.length

  for (const name of array){
    if (name.slice(0,length) === beginning){
      result.push(name)
    }
  }
  return result;
}

function matchName(object, name){
  let result = []
  for (const person of object){
    if(person.name === name){
      result.push(person)
    }
  }
  return result;
}
