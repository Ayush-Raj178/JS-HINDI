const marvel_heros = ["Ironman","Thor","Spiderman"]
const dc_heros =["Superman","flash","Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


const allnewHeros = [...marvel_heros, ...dc_heros]
// console.log(allnewHeros);


const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realanotherArray = anotherArray.flat(Infinity)
// console.log(realanotherArray);


// console.log(Array.isArray("Ayush Raj"));
// console.log(Array.from("Ayush Raj"));
// console.log(Array.from({name: "ayush"})) //interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
 

// IMP**   apply all string method and get output or you can study only string method which method what works perform.
// IMP**   More study (isArray,from,of) i insist.
