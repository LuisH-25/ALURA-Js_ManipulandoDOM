const btn = document.querySelector('[data-form-btn]');

//Arrow functions o funciones anonimas
const createTask=(evento) =>{
  evento.preventDefault();      //evita que recargue la pagina
  const input = document.querySelector("[data-form-input]")
  console.log(input.value);
}  

btn.addEventListener("click", createTask)

//Arrow functions o funciones anonimas
// btn.addEventListener("click",(evento) =>{
//   evento.preventDefault();      //evita que recargue la pagina
//   const input = document.querySelector("[data-form-input]")
//   console.log(input.value);
// })  



