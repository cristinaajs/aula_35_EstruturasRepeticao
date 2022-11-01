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

//pega o índice do objeto "usuário" dentro de um array de objetos
for (const usuario of usuarios.entries()) {

    console.log(usuario[1])
}