function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = (`Agora são ${hora} horas.`)

    if (hora >= 0 && hora < 12){
        document.body.style.background = '#f0e15b'
        img.src = 'manhã.jpg'
    } else if (hora >= 12 && hora <18){
        document.body.style.background = '#e9895d'
        img.src = 'tarde.jpg'
    } else {
        document.body.style.background = '#5c5b5b'
        img.scr = 'noite.jpg'
    }
}                                           
    