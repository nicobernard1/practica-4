const tareas = ["hacer la cama", "sacar la basura", "estudiar", "ir al gimnasio", "lavar los platos"];
alert("Tareas del día: \n" + tareas.join('\n'));

const ultimoElemento = tareas.pop();
    alert("Se ha completado: " + ultimoElemento);

tareas.push(prompt("Agrega una nueva tarea."));

tareas.unshift(prompt("Agrega otra tarea."));
    
tareas.splice(1, 1, (prompt("Ya hiciste la cama, agrega una nueva tarea.")));

function recorrerArray(array) {
    console.log("Estas son las tareas pendientes del día:");
    for (const tarea of array) {
        console.log(`- ${tarea}`);
    }
}
recorrerArray(tareas);


let buscaElemento = prompt("¿Que tarea completaste?").toLowerCase();

if (tareas.includes(buscaElemento)) {
    console.log("La tarea " + buscaElemento + " ha sido completada.");
    console.log("Era la tarea número " + tareas.indexOf(buscaElemento) + " del día");
     tareas.splice(tareas.indexOf(buscaElemento), 1);

} else {
    console.log("La tarea " + buscaElemento + " no corresponde a este día.");
}

alert("Tareas pendientes del día: \n" + tareas.join('\n'));

let continuar = true;

while (continuar) {
  let borrarTarea = prompt("¿Completaste otra tarea?").toLowerCase();
  
  if (tareas.includes(borrarTarea)) {
    tareas.splice(tareas.indexOf(borrarTarea), 1);
    
    if (tareas.length === 0) {
      continuar = false;
    }
  } else {
    alert("La tarea " + borrarTarea + " no se encuentra en la lista");
    continuar = false;
  }
}
 if (tareas.length === 0) {
  alert("¡Completaste todas las tareas del día!");
} else {
    console.log("Tareas pendientes: \n" + tareas.join('\n'));
    alert("Tareas pendientes: \n" + tareas.join('\n'));
}
