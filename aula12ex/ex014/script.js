function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora < 5 || hora > 18) {
        img.src = 'imagens/fotonoite.jpg'
        document.body.style.backgroundColor = '#222222'
    }else if (hora < 12) {
        img.src = 'imagens/fotomanha.jpg'
        document.body.style.backgroundColor = '#ffdc67'
    }else {
        img.src = 'imagens/fototarde.jpg'
        document.body.style.backgroundColor = '#ff6600'
    }
}