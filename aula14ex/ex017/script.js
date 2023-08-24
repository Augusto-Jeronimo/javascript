function gerar() {
    let num = document.getElementById('txtnum').value
    let res = document.getElementById('tab')

    if(num.length == 0) {
        alert('Por favor, digite um número!')
    }else {
        res.innerHTML = ''
        for(let c = 1;c <= 10; c++) {

            let opt = document.createElement('option')
            opt.setAttribute('value', `v${c}`)
            opt.innerText = `${num} x ${c} = ${num*c}`

            res.appendChild(opt)

            res.innerHTML += `<option value="v${c}">${num} x ${c} = ${num*c}</option>`
        }
    }
    
}