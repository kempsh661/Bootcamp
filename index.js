var opera;
var operb;
var operac;
var cadena;
var historial;
var resultado = document.getElementById("vnue");
var parci = document.getElementById("vant");
var reset = document.getElementById("reset");
var limp = document.getElementById("bor");
var sumar = document.getElementById("sumar");
var restar = document.getElementById("restar");
var multiplicar = document.getElementById("multiplicar");
var dividir = document.getElementById("dividir");
var igual = document.getElementById("igual");
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var cero = document.getElementById("cero");
var historial = document.getElementById("historial");
var panta = document.getElementById("panta");
var bh = document.getElementById("bh");
var min = document.getElementById("min");
var may = document.getElementById("may");
var text2 = document.getElementById("text2");
var texto = document.getElementById("texto");
var carat = document.getElementById("carat");
var borrar = document.getElementById("borrar");

uno.addEventListener("click", function () {
  resultado.textContent = resultado.textContent + "1";
});
dos.addEventListener("click", function () {
  resultado.textContent = resultado.textContent + "2";
});
tres.addEventListener("click", function () {
  resultado.textContent = resultado.textContent + "3";
});
cuatro.addEventListener("click", function () {
  resultado.textContent = resultado.textContent + "4";
});
cinco.addEventListener("click", function () {
  resultado.textContent = resultado.textContent + "5";
});
seis.addEventListener("click", function () {
  resultado.textContent = resultado.textContent + "6";
});
siete.addEventListener("click", function () {
  resultado.textContent = resultado.textContent + "7";
});
ocho.addEventListener("click", function () {
  resultado.textContent = resultado.textContent + "8";
});
nueve.addEventListener("click", function () {
  resultado.textContent = resultado.textContent + "9";
});
cero.addEventListener("click", function () {
  resultado.textContent = resultado.textContent + "0";
});
reset.addEventListener("click", function () {
  resetear();
});
limp.addEventListener("click", function () {
  limpiar();
});
sumar.addEventListener("click", function () {
  opera = resultado.textContent;
  operac = "+";
  parci.textContent = opera + "+";
  limpiar();
});
restar.addEventListener("click", function () {
  opera = resultado.textContent;
  operac = "-";
  parci.textContent = opera + "-";
  limpiar();
});
multiplicar.addEventListener("click", function () {
  opera = resultado.textContent;
  operac = "*";
  parci.textContent = opera + "*";
  limpiar();
});
dividir.addEventListener("click", function () {
  opera = resultado.textContent;
  operac = "/";
  parci.textContent = opera + "/";
  limpiar();
});

igual.addEventListener("click", function () {
  operb = resultado.textContent;
  parci.textContent = parci.textContent + operb;
  historial = historial + "<br>" + parci.textContent;
  localStorage.setItem("historial", historial);
  resolver();
  historial = historial + "<br>" + resultado.textContent;
  localStorage.setItem("historial", historial);
});
historial.addEventListener("click", function () {
  panta.innerHTML = localStorage.getItem("historial");
});
bh.addEventListener("click", function () {
  panta.innerHTML = "";
  historial = "";
  localStorage.removeItem("historial");
});
min.addEventListener("click", function(){
    cadena = texto.value;
    cadena = cadena.toLowerCase();
    text2.textContent = cadena;
})
may.addEventListener("click", function(){
    cadena = texto.value;
    cadena = cadena.toUpperCase();
    text2.textContent = cadena;
})
carat.addEventListener("click", function(){
    cadena=texto.value;
    text2.textContent = cadena.length;
})
borrar.addEventListener("click", function(){
    text2.textContent = "";
    texto.value = "";
})



function limpiar() {
  resultado.textContent = "";
}
function resetear() {
  resultado.textContent = "";
  opera = 0;
  operb = 0;
  operac = "";
  parci.textContent = "";
}
function resolver() {
  var res = 0;
  switch (operac) {
    case "+":
      res = parseFloat(opera) + parseFloat(operb);
      break;
    case "-":
      res = parseFloat(opera) - parseFloat(operb);
      break;
    case "*":
      res = parseFloat(opera) * parseFloat(operb);
      break;
    case "/":
      res = parseFloat(opera) / parseFloat(operb);
      break;
  }
  resultado.textContent = res;
}
