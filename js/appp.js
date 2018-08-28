
var operandoA;
var operandoB;
var operacion;
var resultado;

var display = document.getElementById('display');
var resetear = document.getElementById('on');
var sign = document.getElementById('sign');
var raiz = document.getElementById('raiz');
var division = document.getElementById('dividido');
var siete = document.getElementById('7');
var ocho = document.getElementById('8');
var nueve = document.getElementById('9');
var multiplicacion = document.getElementById('por');
var cuatro = document.getElementById('4');
var cinco = document.getElementById('5');
var seis = document.getElementById('6');
var resta = document.getElementById('menos');
var uno = document.getElementById('1');
var dos = document.getElementById('2');
var tres = document.getElementById('3');
var cero = document.getElementById('0');
var punto = document.getElementById('punto');
var igual = document.getElementById('igual');
var suma = document.getElementById('mas');




function escribir(numero){
if (display.textContent == "0") {
display.textContent = numero;
}
else {
display.textContent = display.textContent + numero;
}
};

uno.addEventListener("click", function(){
  if (display.textContent.length >=8 ) {
    display.textContent = display.textContent;
  }
  else {
    escribir(1);
  }

});

dos.addEventListener("click", function(){
  if (display.textContent.length >=8 ) {
    display.textContent = display.textContent;
  }
  else {
    escribir(2);
  }

});

tres.addEventListener("click", function(){
  if (display.textContent.length >=8 ) {
    display.textContent = display.textContent;
  }
  else {
    escribir(3);
  }

});

cuatro.addEventListener("click", function(){
  if (display.textContent.length >=8 ) {
    display.textContent = display.textContent;
  }
  else {
    escribir(4);
  }

});

cinco.addEventListener("click", function(){
  if (display.textContent.length >=8 ) {
    display.textContent = display.textContent;
  }
  else {
    escribir(5);
  }

});

seis.addEventListener("click", function(){
  if (display.textContent.length >=8 ) {
    display.textContent = display.textContent;
  }
  else {
    escribir(6);
  }

});

siete.addEventListener("click", function(){
  if (display.textContent.length >=8 ) {
    display.textContent = display.textContent;
  }
  else {
    escribir(7);
  }

});

ocho.addEventListener("click", function(){
  if (display.textContent.length >=8 ) {
    display.textContent = display.textContent;
  }
  else {
    escribir(8);
  }

});

nueve.addEventListener("click", function(){
  if (display.textContent.length >=8 ) {
    display.textContent = display.textContent;
  }
  else {
    escribir(9);
  }

});

cero.addEventListener("click", function(){
  if (display.textContent.length >=8 ) {
    display.textContent = display.textContent;
  }
  else {
    escribir(0);
  }

});




uno.onmousedown = function(){
uno.style.transform="scale(0.8,0.8)";
};
uno.onmouseup = function(){
uno.style.transform="scale(1,1)";
};

dos.onmousedown = function(){
dos.style.transform="scale(0.8,0.8)";
};
dos.onmouseup = function(){
dos.style.transform="scale(1,1)";
};

tres.onmousedown = function(){
tres.style.transform="scale(0.8,0.8)";
};
tres.onmouseup = function(){
tres.style.transform="scale(1,1)";
};

cuatro.onmousedown = function(){
cuatro.style.transform="scale(0.8,0.8)";
};
cuatro.onmouseup = function(){
cuatro.style.transform="scale(1,1)";
};

cinco.onmousedown = function(){
cinco.style.transform="scale(0.8,0.8)";
};
cinco.onmouseup = function(){
cinco.style.transform="scale(1,1)";
};

seis.onmousedown = function(){
seis.style.transform="scale(0.8,0.8)";
};
seis.onmouseup = function(){
seis.style.transform="scale(1,1)";
};

siete.onmousedown = function(){
siete.style.transform="scale(0.8,0.8)";
};
siete.onmouseup = function(){
siete.style.transform="scale(1,1)";
};

ocho.onmousedown = function(){
ocho.style.transform="scale(0.8,0.8)";
};
ocho.onmouseup = function(){
ocho.style.transform="scale(1,1)";
};

nueve.onmousedown = function(){
nueve.style.transform="scale(0.8,0.8)";
};
nueve.onmouseup = function(){
nueve.style.transform="scale(1,1)";
};

resta.onmousedown = function(){
resta.style.transform="scale(0.8,0.8)";
};
resta.onmouseup = function(){
resta.style.transform="scale(1,1)";
};

suma.onmousedown = function(){
suma.style.transform="scale(0.8,0.8)";
};
suma.onmouseup = function(){
suma.style.transform="scale(1,1)";
};

multiplicacion.onmousedown = function(){
multiplicacion.style.transform="scale(0.8,0.8)";
};
multiplicacion.onmouseup = function(){
multiplicacion.style.transform="scale(1,1)";
};

igual.onmousedown = function(){
igual.style.transform="scale(0.8,0.8)";
};
igual.onmouseup = function(){
igual.style.transform="scale(1,1)";
};

division.onmousedown = function(){
division.style.transform="scale(0.8,0.8)";
};
division.onmouseup = function(){
division.style.transform="scale(1,1)";
};

punto.onmousedown = function(){
punto.style.transform="scale(0.8,0.8)";
};
punto.onmouseup = function(){
punto.style.transform="scale(1,1)";
};

cero.onmousedown = function(){
cero.style.transform="scale(0.8,0.8)";
};
cero.onmouseup = function(){
cero.style.transform="scale(1,1)";
};

resetear.onmousedown = function(){
resetear.style.transform="scale(0.8,0.8)";
};
resetear.onmouseup = function(){
resetear.style.transform="scale(1,1)";
};

sign.onmousedown = function(){
sign.style.transform="scale(0.8,0.8)";
};
sign.onmouseup = function(){
sign.style.transform="scale(1,1)";
};

raiz.onmousedown = function(){
raiz.style.transform="scale(0.8,0.8)";
};
raiz.onmouseup = function(){
raiz.style.transform="scale(1,1)";
};


sign.onclick = function(e){
  if (display.textContent == '0') {
    display.textContent =  "0";
  }

  else if (display.textContent.includes('-')){
    display.textContent = display.textContent.slice(1);
  }

  else  {
display.textContent = "-" + display.textContent;
  }
}

punto.onclick = function(e){
Display = display.textContent;

  if (display.textContent == '0') {
    display.textContent = '0.'
  }
  else if (display.textContent.includes('.')) {
    display.textContent = Display;

  }
  else {
    display.textContent =  display.textContent + '.';
  }

}

resetear.onclick = function(e){
    display.textContent = "0";
}


function limpiar(){
  display.textContent = "";

}

function reset (){
  display.textContent = "";
  operandoA = "";
  operandoB = "";
  operacion = "";
}


suma.onclick = function(e){
    operandoA = display.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoA = display.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoA = display.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoA = display.textContent;
    operacion = "/";
    limpiar();

}
igual.onclick = function(e){
    operandoB = display.textContent;
    resolver();


}

function resultado() {
  if (display.textContent.length >= 8) {
    display.textContent = display.textContent.slice(0, 8) + "e";

}
}

function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(operandoA) + parseFloat(operandoB);

      break;
    case "-":
        res = parseFloat(operandoA) - parseFloat(operandoB);
        break;
    case "*":
      res = parseFloat(operandoA) * parseFloat(operandoB);
      break;
    case "/":
      res = parseFloat(operandoA) / parseFloat(operandoB);
      break;
  }

  display.textContent =res;
  resultado();
}
