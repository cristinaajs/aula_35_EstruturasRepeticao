let revendaDeCarros = [ 
{
    marca: 'ford',
    modelo: 'fiesta',
    cor: 'prata',
},
{
    marca: 'chevrolet',
    modelo: 'Onix',
    cor: 'prata',
},
{
    marca: 'fiat',
    modelo: 'marea bomba',
    cor: 'prata',
}
];

    for (let carro of carros) {
        console.log(carro);
    }
    //fiesta, onix, fusca, saveiro

    {
        marca: 'chevrolet',
        modelo: 'Onix',
        cor: 'prata',
    },
    {
        marca: 'fiat',
        modelo: 'marea bomba',
        cor: 'prata',
    }

//for (let carro of carros, entries()) {
//    console.log(carros);
//}

for (let index = 0; index < carros.length; index++){
    const element = carros[index];
    console.log(index, carro)
}

