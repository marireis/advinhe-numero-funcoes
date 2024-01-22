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