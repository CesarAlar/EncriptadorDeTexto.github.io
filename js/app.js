import { Alerta } from "./Alerta.js";
import { AreaTexto } from "./Textos.js"; 

const area = document.querySelector('.textarea');
const texto = document.getElementById('texto');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn = document.querySelector('.btn');

btn1.addEventListener('click', Encriptar);
btn2.addEventListener('click', DesEncriptar);
btn.addEventListener("click", Copiar);


let re =new RegExp("^[a-z0-9\\s]+$");
let re1 = /[a-zA-Z]+$/

function Encriptar(e) {
    e.preventDefault();
    let palabra = texto.value;
    let final = [];
    let arreglo = palabra.split('');
    
    if (!re.test(palabra) || !re1.test(palabra) ) {
        console.log(re.test(palabra));
        console.log(re1.test(palabra));
        Alerta('error', 'NO SE PERMITEN MAYUSCULAS, ACENTOS, ESPACIOS AL FINAL DEL TEXTO O NO HAS INTRODUCIDO TEXTO');
        return;
    }else{
        arreglo.forEach(letra => {
            switch (letra) {
                case 'a':
                    final.push('ai');
                    break;
                case 'e':
                    final.push('enter');
                    break;
                case 'i':
                    final.push('imes');
                    break;
                case 'o':
                    final.push('ober');
                    break;
                case 'u':
                    final.push('ufat');
                    break;
                default:
                    final.push(letra);
                    break;       
            }  
        });
        let newWord = final.join('')
        AreaTexto(newWord);
    }
}

function DesEncriptar(e) {
    e.preventDefault();
    let palabra = texto.value;
    let final = ' ';
    
    if (!re.test(palabra) || !re1.test(palabra)) {
        Alerta('error', 'NO SE PERMITEN MAYUSCULAS O NO HAS INTRODUCIDO TEXTO');
        return;
    }else{
        final += palabra.replace(/ai/g, 'a')
        let f1 = final.replace(/enter/g, 'e')
        let f2 = f1.replace(/imes/g, 'i')
        let f3 = f2.replace(/ober/g, 'o')
        let f4 = f3.replace(/ufat/g, 'u')
        AreaTexto(f4);
    }
    
}

function Copiar(e) {
    e.preventDefault();
    area.select();
    document.execCommand('copy');
    Alerta('success', 'Se ha copiado con exito');
}