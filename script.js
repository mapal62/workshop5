let myVariable = false

myVariable = true
if (myVariable === true) {
    console.log('A feltétel igazra lett kiérétkelve.')
}

let a = 7;
a = 2
if (a < 5) {
    console.log(a / 2);
} else {
    console.log(a * 2);
}

for (let i = 0; i < 10; i=i+1) {
    console.log(i)
}
for (let i = 1; i <= 10; i=i+1) {
    console.log(i)
}
for (let i=0; i<21; i++) {
    if ((i % 2) === 0) {
        console.log(i)
    }
}
//-----
console.log('--Függvény: 1. feladat')
let printNumbersTill = (number) => {
    for (let i=1; i<=number; i++) {
        console.log(`Az első ${number}-ból a ${i}-ik.`)
    }
}
printNumbersTill(10)
printNumbersTill(15)
//-----
console.log('--Függvény: 2. feladat')
function getGreetingTo (name) {
    return `Hello ${name}`
}
getGreetingTo('Mark')
console.log('most újra')
console.log(getGreetingTo('Mark'))
//-----
console.log('--Ciklus és tömb: 1. feladat')
let printValues = [0,3,6,7,9]
function arrayElement(element) {
    console.log(element)
}
printValues.forEach(arrayElement)
function arrayList(anyArray) {
    anyArray.forEach(console.log)
    for (let i = 0; i < anyArray.length; i++) {
        console.log(anyArray[i])
    }
    anyArray.forEach((xth) => {
        console.log(xth)
    })
}
arrayList(printValues)
let myNumbers = [10, 20, 30, 50, 12];

// itt kijelentjük, hogy a tömb minden elemén szeretnénk valamit végrehajtani
myNumbers.forEach((number) => {
  // a függvényen belül adhatjuk meg a végrehajtandó műveleteket
  console.log(number);
});
//-----
console.log('--Ciklus és tömb: 2. feladat - lásd fent')