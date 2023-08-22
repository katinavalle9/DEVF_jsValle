//Recopilar texto del input
//cuando de click agregar el texto a inbox
//cuando le de al boton equis se elimine

const input = document.getElementById('task-content');
const addButton= document.querySelector("#add-button");
const inboxSection=document.querySelector("#inbox")

addButton.addEventListener("click",function(e){
    //si esta vacio
    const valor= input.value
    //validar si esta vacio o no 
    if(valor !==""){
        console.log(valor)
        let task= document.createElement("p");
        //agregarle el contenido de texto
        // task.textContent=valor;
        //creo un boton con el valor que se escriba en el input
        task.innerHTML=`<span>${valor}</span><button class="delete-button">x</button>`;
        //agregarla al inbox
        inboxSection.appendChild(task);
        //esto es para borrar o limpiar para que se vuelva a escribir y se pone aqui para despues de escribir lo haga
        input.value="";

        //esto es para eliminar y se tiene que crear un evento del click para poder eliminar 
        task.addEventListener("click",function(e){
            // console.log(e.target)
            // let boton = e.target;
            const span = e.target.parentNode;
            //esto es para que desaparezca el boton
            // boton.style.display = "none";
            span.style.display = "none";
        });
    }else{
        alert("Ingresa una tarea valida")
    }
   
});

// const deleteButton = document.getElementsByClassName("delete-button");
// for(let i=0; i<deleteButton.length; i++){
//     deleteButton[i].addEventListener("click",function(e){
//         console.log(e.target)
//     })
// }