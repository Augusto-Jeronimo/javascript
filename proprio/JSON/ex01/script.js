const objs = [
    {
        nome: "Augusto Jerônimo",
        idade: 19,
        trabalhando: true,
        detalhes_trabalho: {
            trabalho: "Tutor de PEOO",
            local: "IFRN - NC"
        },
        hobbies: ["programar", "correr", "Jogar"]
    },
    {
        nome: "Genérico",
        idade: 30,
        trabalhando: false,
        detalhes_trabalho: {
            trabalho: null,
            local: null
        },
        hobbies: ["Caminhar", "Jogar", "Cozinhar"]
    }
]

// JSON

// Converter objeto para JSON
const jsonData = JSON.stringify(objs)

console.log(jsonData)

// Converter JSON para objeto

const objData = JSON.parse(jsonData)

console.log(objData);

