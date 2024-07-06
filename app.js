
// DESAFÍO FINAL - Lógica de programación: sumérgete en la programación con JavaScript

let numeroMaximo = 100; // Dejar fijo el cambio del número máximo
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1; // Le agregamos para que sean 100 intentos
let numeroUsuario = 0;
let intentos = 0;
let maximosIntentos = 7; // Le agregamos algunos intentos extras dada la mayor dificultad

// Tomamos los elementos del Documento HTML para modificar al acertar el número secreto (aprendido en otro curso de JS)
const mensajeAzul = document.querySelector('.container__texto-azul');
const mensajeBlanco = document.querySelector('.container__texto-blanco');
const mensajeBlancoDos = document.querySelector('.container__texto-blanco-segundo');
const imagenTrofeo = document.querySelector('.container__informaciones-trofeo');


while(numeroSecreto != numeroUsuario){

    numeroUsuario = parseInt(prompt(`Indica un número del 1 al ${numeroMaximo} por favor:`)); // Pedimos ingresar un número de 1 a 100
    intentos ++;
    
    if (numeroUsuario == numeroSecreto) {
        
        // Modificamos los elementos HTML al acertar
        imagenTrofeo.
        mensajeAzul.innerHTML = 'Correcto!';
        mensajeBlanco.innerHTML = 'Descubriste el número secreto!';
        mensajeBlancoDos.innerHTML = `El número es ${numeroUsuario}! Lo lograste luego de ${intentos} ${intentos == 1 ? 'intento!' : 'intentos!'}`;
        
    } else {

        // Agregamos para que indique una orientación de qué tan lejos nos encontramos del número secreto
        if(numeroSecreto > numeroUsuario){
            
            if((numeroSecreto - numeroUsuario) > 50) {
                alert("Frío frío! El número secreto es mucho MAYOR al ingresado!");
            } else if((numeroSecreto - numeroUsuario) > 20) {
                alert("Tibio tibio! El número secreto es MAYOR al ingresado! Pero no tanto!");
            } else {
                alert("Caliente! El número secreto es un poco MAYOR al ingresado! Ya casi lo tienes!");
            }

        } else {
            
            if((numeroUsuario - numeroSecreto) > 50) {
                alert("Frío frío! El número secreto es mucho MENOR al ingresado!");
            } else if((numeroUsuario - numeroSecreto) > 20) {
                alert("Tibio tibio! El número secreto es MENOR al ingresado! Pero no tanto!");
            } else {
                alert("Caliente! El número secreto es un poco MENOR al ingresado! Ya casi lo tienes!");
            }
        }       
    }

    if (intentos >= maximosIntentos) {
        alert(`Llegaste a la cantidad máxima de ${intentos} intentos!`);
        break;
    }
}