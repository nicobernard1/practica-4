
const tareas = ["hacer la cama", "sacar la basura", "estudiar", "ir al gimnasio", "lavar los platos"];
    console.log(tareas);

const ultimoElemento = tareas.pop();
    console.log(`Se ha eliminado el elemento: ${ultimoElemento}`);
    console.log(tareas);

tareas.push("pasear al perro");
    console.log(tareas);

tareas.unshift("ir a comprar");
    console.log(tareas);


tareas.splice(1, 1, "lavarse los dientes");
console.log(tareas);


function recorrerArray(array) {
    console.log("Estas son las tareas del día:");
    for (const tarea of array) {
        console.log(`- ${tarea}`);
    }
}
recorrerArray(tareas);


let buscaElemento = prompt("¿Que tarea estás buscando?").toLowerCase();

if (tareas.includes(buscaElemento)) {
    console.log(`El elemento "${buscaElemento}" existe en el array.`);
    console.log(`Se encuentra en la posición: ${tareas.indexOf(buscaElemento)}`);
} else {
    console.log(`El elemento "${buscaElemento}" no existe en el array.`);
}

let continuar = true 

while(continuar) {
    let borrarElemento = prompt("¿Qué tarea ya ha sido completada?").toLowerCase();
    if(tareas.includes(borrarElemento)) {
        tareas.splice(tareas.indexOf(borrarElemento), 1);
        console.log(`El elemento "${borrarElemento}" ha sido eliminado del array.`);
    } else {
        console.log(`El elemento "${borrarElemento}" no se encuentra en el array.`);
    }
    continuar = confirm("¿Quieres eliminar otra tarea de la lista?");
    console.log(tareas);
}

if (tareas.length === 0) {
    console.log("¡Felicidades! No hay tareas pendientes.");
}

