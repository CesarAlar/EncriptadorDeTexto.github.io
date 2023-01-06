const msn = document.querySelector('.alerta');
export function Alerta(tipo, mensaje) {

    if (tipo != 'error') {
        if(msn.firstElementChild) {
            msn.firstChild.removeChild()
        }
        const p = document.createElement('p');
        p.classList.add(tipo);
        p.textContent = `${mensaje}`;
        msn.appendChild(p)

        setTimeout(() => {
            p.remove()
        }, 2000);
    }else{
        if(msn.firstElementChild) {
            msn.firstChild.removeChild()
        }

        const p = document.createElement('p');
        p.classList.add(tipo);
        p.textContent = `${mensaje}`;
        msn.appendChild(p)

        setTimeout(() => {
            p.remove()
        }, 2000);
    }
}