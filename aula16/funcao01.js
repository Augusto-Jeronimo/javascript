function parimp(n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

function soma(n1 = 0, n2 = 0) {
    return n1+n2
}


let x = 5

console.log(`O numero ${x} é ${parimp(x)}`)
console.log(`A soma entre ${x} e ${x} é ${soma(x, x)}`)