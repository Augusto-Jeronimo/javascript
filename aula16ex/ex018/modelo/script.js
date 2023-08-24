let vet = []

function adicionar() {
    let res = document.getElementById('res')
    let lista = document.getElementById('sel')
    let campo = document.getElementById('txtnum')
    let val = campo.value
    
    if (val.length == 0) {
        alert('[ERRO] O campo não pode estar vazio!')
    }else if (vet.includes(val)) {
        alert('[ERRO] O valor já foi adicionado')
    }else if (val < 1 || val > 100) {
        alert('[ERRO] O número deve estar entre 1 e 100!')
    } else {
        vet.push(val)
        lista.innerHTML += `<option value="op${val}">${val} foi adicionado</option>`
    }

    campo.value = ''
    res.innerHTML = ''
    
}

function finalizar() {
    if (vet.length == 0) {
        alert('[ERRO] Adicione valores antes de finalizar!')
    } else {
        let res = document.getElementById('res')

        let soma = 0
        let maior = vet[0]
        let menor = vet[0]
        for (let i = 0; i < vet.length; i++) {
            soma += Number(vet[i])
            if (maior < vet[i]) {
                maior = vet[i]
            }
            if (menor > vet[i]) {
                menor = vet[i]
            }
        }

        let vetRes = [`Ao todo, temos ${vet.length} números cadastrados.`,
                        `O maior valor informado foi ${maior}`,
                        `O menor valor informado foi ${menor}`,
                        `Somando os valores temos ${soma}`,
                        `A média dos valores digitados é ${soma/vet.length}`]
    
        for (let i = 0; i < vetRes.length; i++) {
            let par = document.createElement('p')
            
            par.innerText = vetRes[i]
    
            res.appendChild(par)  
        }
    }

}