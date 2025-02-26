const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

/*
//global variable
let marcoLanciClass 
students.forEach(element => {
  if (element.name == `Marco Lanci`) {
    marcoLanciClass=element.class
  }
})
*/

/*
//almost works, but returns undefined in the array when not found, would have to use .filter to remove undefined elements
const marcoLanciClass = students.map((element) => { if (element.name == `Marco Lanci`) { return element.class }})
*/


students.forEach(element => {
  if (element.name == `Marco Lanci`) {
    const marcoLanciClass = element.class
    console.log(marcoLanciClass);
  }
})




