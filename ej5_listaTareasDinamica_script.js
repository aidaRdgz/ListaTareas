// Seleccionar elementos del DOM
const newTaskInput = document.getElementById('newTaskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Función para agregar una nueva tarea
function addTask() {
  const taskText = newTaskInput.value;      // Obtener el valor del input

  // Verificar que el campo no esté vacío (para no poder insertar tareas vacias)
  if (taskText) {

    const taskItem = document.createElement('li');    // Crear un nuevo elemento de lista (li)
    taskItem.textContent = taskText;                  // Poner el texto recuperado del input en la etiqueta li que se acaba de crear

    const deleteButton = document.createElement('button');    // Crear botón para eliminar cada tarea
    deleteButton.textContent = 'X';

    // Agregar evento al botón para eliminar la tarea
    deleteButton.addEventListener('click', () => {
      taskItem.remove();
    });

    deleteButton.classList.add('deleteBtn');      // Agregar la clase deleteBtn al botón de eliminar para poder identificarlo (en este caso para estilos) 

    taskItem.appendChild(deleteButton);           // Agregar el botón al elemento de lista
    taskList.appendChild(taskItem);               // Agregar la tarea a la lista

    newTaskInput.value = '';                      // Limpiar el campo de texto después de agregar la tarea
  } 
}

// Agregar evento al botón de agregar tarea
addTaskBtn.addEventListener('click', addTask);      // El evento "submit" solo se puede usar dentro de formularios


/**
 * La lista <ul> es una rama principal - se encuentra creada en el html
 * 
 * 1. Crear una pieza suelta en este caso de tipo li-> const taskItem = document.createElement('li')
 * 2. Crear el botón y añadirlo en este caso dentro del li -> const deleteButton = document.createElement('button');  taskItem.appendChild(deleteButton);
 *          (li)
             |
             |-- "Comprar pan" (Texto)
             |-- [X] (Botón de borrar) <-- appendChild(deleteButton)

 * 3. Poner la pieza compuesta (tarea + boton) dentro de la rama principal -> taskList.appendChild(taskItem);
           ÁRBOL HTML (DOM)
              |
              └── (ul) id="taskList"  <-- La rama principal
                    |
                    ├── (li) Tarea antigua 1
                    ├── (li) Tarea antigua 2
                    └── (li) ¡NUEVA TAREA!  <-- AQUÍ se engancha el appendChild final
                          |
                          |-- "Texto de la tarea"
                          └── [X] (Botón)


  HTML VITUAL RESULTANTE (se puede ver en el inspector de tareas)
  <ul id="taskList">
    <li>
        Comprar pan
        <button class="deleteBtn">X</button>
    </li>
    <li>
        Ir al gimnasio
        <button class="deleteBtn">X</button>
    </li>
  </ul>

**/