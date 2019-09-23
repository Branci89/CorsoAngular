abstract class Animale {
 
    razza : string;
    eta : number; 
    specie: string;
    
    constructor(_razza:string, _eta: number, _specie: string){
        this.razza = _razza;
        this.eta = _eta;
        this.specie = _specie;
    }

    mangia(){
        console.log("Ho mangiato");
    }

    dorme(){
        console.log("Dormo.. ZzZz");
    }

    caccia(){
        console.log("Ho cacciato");
    }

    abstract emettiVerso(): void;
}


 class Leone extends Animale{
    criniere:string
    constructor(public _razza:string, _eta:number, _specie:string,_colore: string){
        super(_razza,_eta,_specie);
        this.criniere = _colore;
    }

    emettiVerso() {
        console.log("ROOOOAAAARRR");
    }
}


class Gatto extends Animale{
    coloreBaffi: string
    constructor(public _razza:string, _eta:number, _specie:string,_colore:string){
        super(_razza,_eta,_specie);
        this.coloreBaffi = _colore;
    }

    emettiVerso() {
        console.log("MEEEEOOOWWW");
    }
}

class Cane extends Animale{
    colGuinzagio: string;
    constructor(public _razza:string, _eta:number, _specie:string, _colore:string){
        super(_razza,_eta,_specie);
        this.colGuinzagio = _colore;
    }

    emettiVerso() {
        console.log("WOFF WOFF");
    }
}


let leo = new Leone("Bianco",17,"Leone","verde");
let gatto = new Gatto("Persiano",12,"Gatto","rosso");
let cane = new Cane("Cocker",120,"Cane","giallo");

let zoo: Array<Animale> = [leo,gatto,cane];

for(var i = 0; i< zoo.length ; i++){
    var anim = zoo[i];
    if(anim.eta != 15){
        anim.emettiVerso();
        

    }
}