// Criar tag <ul>
// Pegar cada integrante da array
// Colocar cada integrante dentro de <li>
// Colocar cada <li> dentro da <ul>

// const abba = ['Bjorn', 'Benny', 'Anni-frid', 'Agnetha'];
// let liContent = '';

// abba.forEach(member => {
//   liContent += `<li>${member}</li>`
// });

// const ulContent = `<ul>${liContent}</ul>`

// document.body.insertAdjacentHTML('beforeend', ulContent);

// const elements = document.querySelectorAll("li");

// elements.forEach(element => {
//   element.innerText += '🎵';
// });

// const instrument = document.querySelector("#agnetha");
// console.log(instrument.dataset.instrument);

// const abba = document.querySelectorAll(".abba");

// abba.forEach((member) => {
//   console.log(member.dataset.instrument);
//   member.innerHTML += `: ${member.dataset.instrument}`;
// });

// const romain = document.querySelector("#romain");

// romain.addEventListener("click", (event) => {
//   console.log(event.currentTarget);
// });

// document.querySelectorAll("img").forEach((img) => {
//   img.addEventListener("click", (event) => {
//     event.currentTarget.classList.toggle("img-circle");
//   });
// });

const button = document.querySelector(".btn-light");

button.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll(".form-check-input");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = !checkbox.checked;
  })
});