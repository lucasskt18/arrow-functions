// Primeira forma de fazer
const marcas = [
       {id:1, nome:'a'},
       {id:2, nome:'b'},
];

marcas.find(function(marcas) {
    return marcas.nome === 'a';
});

// Forma mais simples de fazer

const marcas = [
    {id:1, nome:'a'},
    {id:2, nome:'b'},
];

(marcas.find((marca) => marca.nome === 'a'));