/*var nome="Adilson Conceição";
var idade= 29;
var idade2= 10;
var frase="Angola é o mais lindo de africa";*/

//alert("Bem-Vindo Alsuoft " + nome );
//alert(nome + " tem " + idade+ " anos"); /*esta fazer concactenação*/
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);/*esta ser passado na consola*/
/*Esta linha concatena as variaveis que esta ser passado */

//console.log(frase.replace("Angola","Namibia")); /*Vai substituir angola para namibia*/

/*Aqui estar ser convertido para letras mausculas e menusculas */
//console.log(frase.toUpperCase());
//alert(frase.replace("Namibia","Angola"));

/*var lista=["moca", "pera","laranja"];
lista.push("uva");
//lista.pop("banana");*/ /*Criar listagem e sua posição*/

//console.log(lista.reverse());

//Definição de posição 
/*console.log(lista[0]);
console.log(lista.toString()[0]);*/

//console.log(lista);
/*console.log(lista.toString());
console.log(lista.join(" - "));*/ /*Permite adicionar espaço */

/*var fruta={nome: "moça", cor:"vermelho"}
console.log(fruta.nome);
alert(fruta.cor);*/ /*Criar um dicionario do array igual json */

/*var fruta=[{nome: "moça", cor:"vermelho"}, {nome: "uva", cor:"roxa"}]
console.log(fruta);
alert(fruta[1].nome);*/ /*criar a posicao do array usando um grupo de lista */

//condicionais e laços de repetição de date
/*var nome=prompt("Qual teu nome: ")
var idade=prompt("Qual é sua idade: ");
if(idade>= 18){
    alert("Ele é o " + nome + " é maior de idade com " +idade);
}else{
    alert("menor de idade")
}*/

/*Adicionar valor usando while na estrutura de repitição */
/*
var count= 0;
while (count <= 5){
    console.log(count);
    //count=count +1;
    alert(count);
    count++;
};*/ 

/*var count;
for (count=0; count <=5; count++)
{
    alert(count);
};*/
/*-----------------------------*/

/*var d =new Date();
console.log("HOJE É: " + d.getDate()+ "/" +(d.getMonth()+1));*/

//Funcoes que retonar suma dos valores
/*function soma (n1,n2) {
    return n1 +n2;
}
console.log(soma(5,10));
alert(soma(5, 10));*/

//passando replace para retornar primeiro valor 
/*function soma (n1,n2) {
    return n1 +n2;
}
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome,novo_nome)
}
//console.log(soma(5,10));
alert(soma(5, 10));
alert(setReplace("vai Japão","Angola","brasil"));*/

//validaçoes com variaveis global imprindo 0 e sem valor usando funcao
/*var validar=0;
function validadeIdade(idade){

    if(idade>=18){
        validar=true
    }else{
        validar=false
    }
    return validar;
}

var idade=prompt("Qual sua idade");
validadeIdade(idade);
console.log(validar);
//console.log(validadeIdade(idade));*/

// usando elemento e metodos
/*function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.google.com/");
}*/

//permite trocar de texto no maus
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML="Obrigado pr passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML ="Obrigado pr passar o mouse";
}

//permite remover text no cursor mousemove
function voltar(elemento){
  //document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
    elemento.innerHTML="Passe o mouse aqui";
  //alert("trocar texto");
}
//permite carregar pagina
function load()
{
    alert("pagina carregar");
}


function funcchange(elemento){
    console.log(elemento.value);
}
