function gerar() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('tab')

    if(num.value.length == 0) {
        alert('Por favor, digite um número!')
    }else {
        let n = num.value
        tab.innerHTML = ''

        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')

            item.value = `tab${c}`
            item.text = `${n} x ${c} = ${n*c}`

            tab.appendChild(item)
        }
    }
}