
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());
  alert("Registro exitoso")    
});