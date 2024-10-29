class Heroi{
    constructor(nomeHeroi, idadeHeroi, tipoHeroi){
        this.nomeHeroi = nomeHeroi;
        this.idadeHeroi = idadeHeroi;
        this.tipoHeroi = tipoHeroi;
        this.AtaqueHeroi(tipoHeroi);
    }

    AtaqueHeroi(tipoHeroi){
        switch(tipoHeroi){
            case "guerreiro":
                this.ataqueHeroi = "espada";
                break;
            case "mago":
                this.ataqueHeroi = "magia";
                break;
            case "monge":
                this.ataqueHeroi = "artes marciais";
                break;
            case "ninja":
                this.ataqueHeroi = "shuriken";
                break;
            default:
                this.ataqueHeroi = "";
                break;
        }
    }

    Atacar(){
        console.log(` ${this.tipoHeroi} atacou usando ${this.ataqueHeroi}`);
    }
}

let Heroi1 = new Heroi("João", 32, "guerreiro");
Heroi1.Atacar();

let Heroi2 = new Heroi("Maria", 18, "mago");
Heroi2.Atacar();