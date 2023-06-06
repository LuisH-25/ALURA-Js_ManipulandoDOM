const btn = document.querySelector('[data-form-btn]');

//Arrow functions o funciones anonimas
const createTask=(evento) =>{
  evento.preventDefault();      //evita que recargue la pagina
  const input = document.querySelector("[data-form-input]")
  const value = input.value;
  const list = document.querySelector('[data-list]');   //Capturo el elemento data-list
  const task = document.createElement('li');  //creando un elemento li
  task.classList.add('card');   //Añadiendo una clase a task que se creó
  input.value = "";
  //backticks
  const content = `<div>
      <i class="far fa-check-square icon"></i>
      <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
  task.innerHTML = content;     //Añado contenido html a task

  list.appendChild(task);     //Añadiendo un hijo a list
}  
console.log(btn);
btn.addEventListener("click", createTask)

//Arrow functions o funciones anonimas
// btn.addEventListener("click",(evento) =>{
//   evento.preventDefault();      //evita que recargue la pagina
//   const input = document.querySelector("[data-form-input]")
//   console.log(input.value);
// })  



