let valores = [1, 4, 6, 3, 8, 9]

console.log(valores)

console.log('-------------------------')

for (let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log('-------------------------')

for (let pos in valores){
    console.log(valores[pos])
}