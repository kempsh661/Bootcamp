let n = parseInt(prompt ("Digita el limite de la Sucesión de Fibonacci"));
a=1;
b=1;
let fibo =[];
for(let i = 0; i<n; i++){
    fibo[i]=a
    let c=a+b;
    a=b;
    b=c;
}
console.log(fibo);