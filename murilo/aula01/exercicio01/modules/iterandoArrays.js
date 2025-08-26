export default function() {

    let carros = ['palio', 'celta', 'corola', 'onix']; 
    //copiando a variavel carros para manter continuidade do ultimo arquivo

    console.log('forEach de imprimeCarros: ');
    carros.forEach(imprimeCarros);
    function imprimeCarros(car) {
        console.log(car)
    }

    let num = [1, 3, 4];
    console.log(num.find(encontraPar));
    function encontraPar(n) {
        if(n%2==0) return true;
    }

    console.table(carros);
}