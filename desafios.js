1. Criar uma função que exibe "Olá, mundo!" no console.

    function saudacao(){
        console.log('Olá mundo!')
    }
    saudacao()

2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

    function saudacao(nome){
        console.log(`Olá, ${nome}`)
    }
    saudacao("Maria")

3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
    
    function calculaDobro(num){
       return 2*num;
    }
    let resultado = calculaDobro(5)
    console.log(resultado)

4. Criar uma função que recebe três números como parâmetros e retorna a média deles.

    function calculaMedia(num1, num2, num3){
        return (num1+num2+num3)/3
    }
    let resultado = calculaMedia(5,5,5)
    console.log(resultado)

5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

    function maiorNumero(num1, num2){
        return num1 > num2 ? num1 : num2;
    }
    let resultado =  maiorNumero(4,5)
    console.log(resultado)

6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

    function multiplicaNumero(num){
        return num * num
    }
    let resultado =  multiplicaNumero(4)
    console.log(resultado)


    Desafios
1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

    function calculoImc(altura, peso) {
        let imc = peso/ (altura*altura)
        
    }

2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

    function fatorial(num1) {
        if(num === 0 || num === 1){
            return 1;
        }

        let fat = 1;
        for(let i = 2; i<= num; i++){
            fat*=i;
        }
        return fatorial;
    }

    let num = 5
    let resultado = fatorial(num);
    console.log(`Resultado é ${resultado}`)

3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

    function converteEMReais(dolar) {
        let valorReal = dolar * 5
        return valorReal.toFixed(2);
    }

    let valor = 100
    let resultado = converteEMReais(valor);
    console.log(`Resultado é ${resultado}`)

4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

    function calcularAreaPerimetroSalaRetangular(altura, largura) {
        let area = altura * largura;
        let perimetro = 2 * (altura + largura);
        
        console.log(`Área da sala: ${area} metros quadrados`);
        console.log(`Perímetro da sala: ${perimetro} metros`);
    }
    
    // Exemplo de uso
    let altura = 3; // em metros
    let largura = 5; // em metros
    calcularAreaPerimetroSalaRetangular(altura, largura);

5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

    function calcularAreaPerimetroSalaCircular(raio) {
        let area = Math.PI * raio * raio;
        let perimetro = 2 * Math.PI * raio;
        
        console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
        console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
    }
    
    // Exemplo de uso
    let raio = 4; // em metros
    calcularAreaPerimetroSalaCircular(raio);
  
6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

    function mostrarTabuada(numero) {
        for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
        }
    }
    
    // Exemplo de uso
    let numero = 7;
    mostrarTabuada(numero);
