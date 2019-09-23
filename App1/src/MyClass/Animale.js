class Animale {
    constructor(_razza, _eta, _specie) {
        this.razza = _razza;
        this.eta = _eta;
        this.specie = _specie;
    }
    mangia() {
        console.log("Ho mangiato");
    }
    dorme() {
        console.log("Dormo.. ZzZz");
    }
    caccia() {
        console.log("Ho cacciato");
    }
}
class Leone extends Animale {
    constructor(_razza, _eta, _specie, _colore) {
        super(_razza, _eta, _specie);
        this._razza = _razza;
        this.criniere = _colore;
    }
    emettiVerso() {
        console.log("ROOOOAAAARRR");
    }
}
class Gatto extends Animale {
    constructor(_razza, _eta, _specie, _colore) {
        super(_razza, _eta, _specie);
        this._razza = _razza;
        this.coloreBaffi = _colore;
    }
    emettiVerso() {
        console.log("MEEEEOOOWWW");
    }
}
class Cane extends Animale {
    constructor(_razza, _eta, _specie, _colore) {
        super(_razza, _eta, _specie);
        this._razza = _razza;
        this.colGuinzagio = _colore;
    }
    emettiVerso() {
        console.log("WOFF WOFF");
    }
}
let leo = new Leone("Bianco", 17, "Leone", "verde");
let gatto = new Gatto("Persiano", 12, "Gatto", "rosso");
let cane = new Cane("Cocker", 120, "Cane", "giallo");
let zoo = [leo, gatto, cane];
for (var i = 0; i < zoo.length; i++) {
    var anim = zoo[i];
    if (anim.eta != 15) {
        anim.emettiVerso();
        console.log(anim);
    }
}
