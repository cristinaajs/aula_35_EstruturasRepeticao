let carros = [ 'fiesta', 'onix', 'fusca', 'saveiro'];

for (let carro of carros) {
    console.log(carro);
}
//fiesta, onix, fusca, saveiro

let carrosObj = [ {
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
}];

//obtemtodos os objetos dentro do array carrosObj
for (let carro of carrosObj) {
    //console.log(carro);

    //obtem uma propriedade especifica
    console.log(carro.cor);

    //obtem todas as propriedades do objeto
    for (propriedade in carro)
    console.log(propriedade +" : "+carro[propriedade])
}
//fiesta, onix, fusca, saveiro