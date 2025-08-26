export default function() {

const carros = ['gol', 'palio', 'celta'];
let frutas = Array("Laranja", "Maçã", "Uva");
let nuns = Array("Laranja", "Maçã", "Uva");

console.log(`Carros: ${carros} \nFrutas: ${frutas}`);

carros.push('clio');
let carroRetirado = carros.shift();
console.log(`Carro retirado: ${carroRetirado}\n\n Novo array carros: ${carros}`);

let frutaRetirada = frutas.pop();
frutas.unshift('Limão')
console.log(`Fruta retirada: ${frutaRetirada}\n\n Novo array frutas: ${frutas}`);

carros.splice(2, 1, "corola", "onix");
console.log('Splice feito. Novo array carros: ' + carros);

let numeros = [10, 30, 20, 15, 50, 45];
console.log(`Numeros: ${numeros}`);

let numerosOrd = numeros.sort((a,b) => b-a);
console.log(`NumerosOrd: ${numerosOrd}`);

let numerosOrdRev = numerosOrd.reverse();
console.log(`NumerosOrdRev: ${numerosOrdRev}`);

}