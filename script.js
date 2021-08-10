let myVariable = false;

myVariable = true;
if (myVariable === true) {
    console.log("A feltétel igazra lett kiérétkelve.");
}

let a = 7;
a = 2;
if (a < 5) {
    console.log(a / 2);
} else {
    console.log(a * 2);
}

for (let i = 0; i < 10; i = i + 1) {
    console.log(i);
}
for (let i = 1; i <= 10; i = i + 1) {
    console.log(i);
}
for (let i = 0; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//-----
console.log("--Függvény: 1. feladat");
let printNumbersTill = (number) => {
    for (let i = 1; i <= number; i++) {
        console.log(`Az első ${number}-ból a ${i}-ik.`);
    }
};
printNumbersTill(10);
printNumbersTill(15);
//-----
console.log("--Függvény: 2. feladat");

function getGreetingTo(name) {
    return `Hello ${name}`;
}
getGreetingTo("Mark");
console.log("most újra");
console.log(getGreetingTo("Mark"));
//-----
console.log("--Ciklus és tömb: 1. feladat");
let printValues = [0, 3, 6, 7, 9];

function arrayElement(element) {
    console.log(element);
}
printValues.forEach(arrayElement);

function arrayList(anyArray) {
    anyArray.forEach(console.log);
    for (let i = 0; i < anyArray.length; i++) {
        console.log(anyArray[i]);
    }
    anyArray.forEach((xth) => {
        console.log(xth);
    });
}
arrayList(printValues);
let myNumbers = [10, 20, 30, 50, 12];

// itt kijelentjük, hogy a tömb minden elemén szeretnénk valamit végrehajtani
myNumbers.forEach((number) => {
    // a függvényen belül adhatjuk meg a végrehajtandó műveleteket
    console.log(number);
});
//-----
console.log("--Ciklus és tömb: 2. feladat - lásd fent");

//DOM és jquery
/* jQuery - 1. feladat */
$("#fox-1").text("Macrotis");
$("#fox-2").css("border-color", "purple");
$("#jq1 p").css("background-color", "yellow");

/* jQuery - 2. feladat */
let color = "purple";
let number = "10";
let word = "cool";

if (color === "purple") {
    $("#jq2 .north").css("background-color", color);
}

if (number > 100) {
    $("#jq2 .east").text("wow, de nagy szám");
} else {
    $("#jq2 .east").text("ez csak egy közönséges szám");
}

if (word === "cool") {
    $("#jq2 .south").text("A DOM Ereje");
} else {
    $("#jq2 .south").text(word);
}

/* jQuery DOM - 1. feladat */
let jq3Nevek = ["Pali", "Ákos", "Gyula", "Aranka", "Zsuzsanna"];
let myName = "Pali";
jq3Nevek.forEach((nev) => {
    if (nev === myName) {
        $("#jq3 ul").append(`<li><strong>${nev}</strong></li>`);
    } else {
        $("#jq3 ul").append(`<li>${nev}</li>`);
    }
});

function listaba(nev) {
    $("#jq3 ul").append(`<li>${nev}</li>`);
}

listaba("Egerben");

/* jQuery DOM - 2. feladat */
let additionalBlock = {
    title: "DOM - 2. feladat: Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!",
};
$('#jq3').append(`<h1>${additionalBlock.title}</h1>`)
$('#jq3').append(`<p>${additionalBlock.text}</p>`)

/* jQuery esemény - 1. feladat */
$('#jq4 .btn').click(() => { console.log('Igen, most rám kattintottál') })

/* jQuery esemény - 2. feladat */
eredetiSzoveg = $('#jq4 .btn').text()
$('#jq4 .btn2').click(() => {
        if (eredetiSzoveg === $('#jq4 .btn').text()) {
            $('#jq4 .btn').text('Ne nyomkodj!!')
        } else {
            $('#jq4 .btn').text(eredetiSzoveg)
        }
    })
    /* jQuery esemény - 3. feladat */
let jq4Szinek = ['black', 'white', 'yellow', 'green', 'blue', 'red', 'purple', 'grey', 'none']
let veletlen
$('#jq4 .btn3').click(() => {
    veletlen = Math.floor(Math.random() * jq4Szinek.length)
    $('#jq4 button').css('background-color', jq4Szinek[veletlen])
})

// jQuery plusz esemény - 1. feladat
let bgcolor
$('#jq5 .egyik').click(() => {
    bgcolor = $('#jq5 input').val()
    $('#jq5 .egyik').css('background-color', bgcolor)
})

// jQuery plusz esemény - 2. feladat
let mehet = true
$('#jq5 .masik').click(() => {
    bgcolor = $('#jq5 input').val()
    if (mehet) {
        $('#jq5 .masik').css('background-color', bgcolor)
        mehet = false
    }
})

// jQuery Számláló
let szamlalo = 0
$('#jq6 .novel').click(() => {
    szamlalo++
    $('#jq6 #ertek').text(szamlalo)
})
$('#jq6 .csokken').click(() => {
    szamlalo--
    $('#jq6 #ertek').text(szamlalo)
})

// jQuery Todo lista
let whatToDo
$('#jq6 button').click(() => {
    whatToDo = $('#jq6 input').val()
    if (whatToDo !== "") {
        $('#jq6 ul').append(`<li>${whatToDo}</li>`)
    }
})
$('#jq6 li').click(function() {
    $(this).slideUp();
})
$("p").click(function() {
    $(this).slideUp();
});