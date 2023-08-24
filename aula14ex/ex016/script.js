function contar() {
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    
    var div = document.getElementById('resul')

    if (inicio == null || fim == null) {
        div.innerText = 'Inválido'
    }else if (passo == null || passo.value == 0) {
        alert('o passo deve ser diferênte de 0')
    }else {
        div.innerHTML = 'contando:<br>'

        for (let index = Number(inicio); index <= fim; index += Number(passo)) {
            if (index + Number(passo) > fim) {
                div.innerHTML += '&#127937;'
            }else {
                if (index < fim) {
                    div.innerHTML += '&#128073; '
                }

                div.innerHTML += `${index} `
            }
            

            
        }
    }
}