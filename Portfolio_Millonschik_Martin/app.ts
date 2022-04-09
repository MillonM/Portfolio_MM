var saludo:string="Bienvenidos a Argentina Programa"
console.log(saludo);

function cambiarAcercaDe()
{
    let acercaDeInput:string=prompt("Ingrese el nuevo valor AcercaDe") as string;
    (document.getElementById("acercaDe") as HTMLParagraphElement) .innerHTML=acercaDeInput;
}

