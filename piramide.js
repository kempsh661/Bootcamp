let a =  parseInt(prompt ("Digita el limite de la Piramide"));
let b=("*");
let figu=[];
for(let i=0; i<a; i++){
figu[i]=b;
console.log(figu[i]);
b=("**")+b;
}
let c=a-2;
for(let i=c;i>-1;i--){
	console.log(figu[i]);
}