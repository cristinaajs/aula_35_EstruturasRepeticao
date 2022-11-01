let usuarios = [
    {
        nome:"Cristina",
        sobrenome:"Jesus",
        idade:"272",
        email:"cristinaaajs@gmail.com"
    },
    {
        nome:"Elisete",
        sobrenome:"Araujo",
        idade:"56",
        email:"elisetepatrocinia@gmail.com"
    },
    {
        nome:"Gabriel",
        sobrenome:"Leandro",
        idade:"34",
        email:"galea.dev@gmail.com"
    }
];

//pega um objeto "usuário" dentro de um array de objetos
for (const usuario of usuarios) {

    //pega uma propriedade contida dentro do objeto chamado usuário
    for (const propriedade in usuario) {

        console.log(usuario[propriedade])
    }
}