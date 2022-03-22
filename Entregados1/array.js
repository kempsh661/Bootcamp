let numeros = [1,2,3,4,5,6];
let i = 0;
console.log("Numeros por medio del While")
while(i<numeros.length){
    console.log(numeros[i]);
    i++;
}
console.log("Numeros por medio del For")
for(let i=0; i<numeros.length; i++){
    console.log(numeros[i]);
}
for(let i=0; i<numeros.length; i++){
    console.log(numeros[i]+1);
}
let numeros2 =[];
for(let i=0; i<numeros.length; i++){
    numeros[i]=numeros[i]+12;
    numeros2[i]=numeros[i];
}
console.log(numeros2);
let suma=0
for(let i=0; i<numeros2.length; i++){
    suma=suma+numeros2[i]
}
let promedio = suma/numeros2.length;
console.log("El promedio de la seuma de la copia es: " + promedio);