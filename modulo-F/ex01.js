let num = [1, 3, 5, 8, 9]

num.sort()//coloca o vetor em ordem crescente
num.push(2)//adiciona mais um valor ao vetor - o numero dentro é o valor que vc escolhe

console.log(num)
console.log(`O vetor tem ${num.length} posições`)//length = quantidade de numeros dentro do vetor
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(9) // indexOf serve pra mostra onde ta o valor dentro das ( )
if ( pos == -1){
    console.log('Não tem esse valor')
} else {
console.log(`O valor está na posição ${pos}`)
}