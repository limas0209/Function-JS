//Chamar uma Função de calcular raio
function calcular(raio){
    return `Perímetro: ${Math.PI * raio} Área: ${Math.PI * raio}`

}
console.log(calcular(20));

//função normal
function exemplo(num){
    return num * num
}
console.log(exemplo(4))

//Arrow Function
const exemplo1=(num)=>{
    return  num * num
}
console.log(exemplo1(5))

//Arrow Function Simplificado
const exemplo2=(num)=>{return num * num}
console.log(exemplo2(20))


function inserir(){
    let numero = document.getElementById('posicao').value -1
    let novo = document.getElementById('novo').value
    document.getElementsByClassName('colocado')[numero].innerHTML=novo
}

function mostrar(){
    let numero= document.getElementById("numero").value -1
    let mes= document.getElementsByTagName("li")[numero].innerHTML;
    document.getElementById("resultado").innerHTML = mes;
}