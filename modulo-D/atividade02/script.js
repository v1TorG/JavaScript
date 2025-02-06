function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 4){
               img.setAttribute('src', 'bbM.jpg') 
            } else if (idade < 11){
                img.setAttribute('src', 'garotoM.jpg') 
            } else if (idade < 24){
                img.setAttribute('src', 'jovemM.jpg') 
            } else if (idade < 55){
                img.setAttribute('src', 'homemM.jpg') 
            } else {
                img.setAttribute('src', 'velhoM.jpeg') 
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 4){
                img.setAttribute('src', 'bbF.jpg') 
            } else if (idade < 11){
                img.setAttribute('src', 'garotaF.jpg') 
            } else if (idade < 24){
                img.setAttribute('src', 'jovemF.jpg') 
            } else if (idade < 55){
                img.setAttribute('src', 'mulherF.jpg') 
            } else {
                img.setAttribute('src', 'idosaF.jpg') 
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}                                          
    