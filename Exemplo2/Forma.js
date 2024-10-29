class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa;
        this.saborRecheio = saborRecheio;
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }
}

let boloFesta = new formaDeBolo("chocolate", "prestigio")

boloFesta.escrever();