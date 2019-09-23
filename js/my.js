//Esercizio 1 

function prova(){
    let provaVar = 1; //mi definisce la variabile locale, significache la seconda provaVar sarà solo nel contesto del for
    const provaConst = 5;

    for(var i= 0; i<5; i++){
       let provaVar = i;
       console.log(provaVar); //sta roba consuma tantissimo in termini di tempi di caricamento della pagina.
    }

    console.log(provaVar + " qualcosa non va");
}

prova();


var x = 4;
var y = -x;

console.log("value of x:"+x);
console.log("value of x:"+y);

var msg ="hello"+"world";

console.log(msg);

/* operatore ternario */
var num = -2;
var res = num > 0 ? "positive": "negative";
console.log(res);
console.log(typeof(num));

/* lamba function ecma script 6
    formata da tre parti: parametri, freccia, funzione
*/

var foo = (x) => 10+x
console.log(foo(10));

var msg = () =>{
    console.log("funzione senza parametri");
}

msg();

// collections

var roles = new Map();
roles.set('r1','user');
roles.set('r2','guest');
roles.set('r3','admin');

console.log(roles.has('r1'));
console.log(roles.has('r7'));

//backtick : alt+96
console.log(`value of key r1  : ${roles.get('r1')}`);
console.log(roles.get('r1'));

for(let r of roles.entries()){
    console.log(`$r[0]: $r[1]`);
}

// i SET

var sets = new Set([1,5,6,8,9]);
console.log(sets.size);
console.log(sets.has(1));

//usiamo un iteratore
var iter = sets.keys();
console.log(iter.next);
