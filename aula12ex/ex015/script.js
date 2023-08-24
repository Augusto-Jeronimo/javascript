function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente...')
    }else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gen = 'Homem'

            if (idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/h-crianca.jpg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/h-jovem.jpg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/h-adulto.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/h-idoso.jpg')
            }

        } else if (fsex[1].checked) {
            gen = 'Mulher'

            if (idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/m-crianca.jpg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/m-jovem.jpg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/m-adulta.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/m-idosa.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${gen} com ${idade} anos</p>`
        res.appendChild(img)
    }
    
}