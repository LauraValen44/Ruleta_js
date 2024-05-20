//Requeridas
//Recibir un máximo de elementos para el sorteo de manera manual
//Ingresar elementos de a uno
//Acción de seleccionar un elemento al azar
//Acción de eliminar todos los elementos
//Ingresar la cantidad de elementos por grupo
//Mostrar los elementos que no han sido seleccionadas


const btnEnviar = document.getElementById("btn-submit");
btnEnviar.addEventListener("click", function(event){

    let numMaxBox = document.getElementById("quantity").value;
        if(numMaxBox>1){
            console.log(numMaxBox);
            createParticipants(numMaxBox);
        } else {
            console.log("Por favor ingresar un número mayor a uno")
        }    
})

function createParticipants(participants){
    const participantsList = document.getElementById('participants-list');

    // limpio el contenedor
    participantsList.innerHTML = '';
    
    // itero la cantidad de veces el input y label
    for(let i=0;i<participants;i++){
        // creo el nuevo label
        let labelName = document.createElement("label")
        // lleno el label
        labelName.textContent = "Nombre del Participante #"+ (i+1) ;
        // creo el input
        let inputName = document.createElement("input");
        // le doy el tipo
        inputName.type = "text";
        // agrego label e input
        participantsList.appendChild(labelName);
        participantsList.appendChild(inputName);
        participantsList.appendChild(document.createElement("br"));
    }

}

let participants = [];






