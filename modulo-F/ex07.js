let amg = {
    nome: 'vitor', 
    sexo: 'M', 
    idade: 20,
    peso: 70.0,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}

amg.engordar(3)

console.log(`${amg.nome} pesa ${amg.peso}kg`)