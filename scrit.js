document.addEventListener('DOMContentLoaded', function() {
    const btnCrearRegistro = document.getElementById('btnCrearRegistro');
    const btnListarRegistros = document.getElementById('btnListarRegistros');
    const createForm = document.getElementById('create-form');
    const list = document.getElementById('list');
    const registroForm = document.getElementById('registroForm');
    const cards = document.getElementById('cards');
    const volverPanel1 = document.getElementById('volverPanel1');
    const volverPanel2 = document.getElementById('volverPanel2');
  
    let registros = [];
  
    btnCrearRegistro.addEventListener('click', () => {
      createForm.style.display = 'block';
      list.style.display = 'none';
    });
  
    btnListarRegistros.addEventListener('click', () => {
      createForm.style.display = 'none';
      list.style.display = 'block';
      listarRegistros();
    });
  
    volverPanel1.addEventListener('click', () => {
      createForm.style.display = 'none';
    });
  
    registroForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const telefono = document.getElementById('telefono').value;
  
      // Validación de campos usando expresiones regulares
      const nombreRegex = /^[a-zA-Z\s]+$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const telefonoRegex = /^\d{10}$/;
  
      if (!nombreRegex.test(nombre)) {
        alert('Nombre inválido. Solo se permiten letras y espacios.');
        return;
      }
  
      if (!emailRegex.test(email)) {
        alert('Email inválido.');
        return;
      }
  
      if (!telefonoRegex.test(telefono)) {
        alert('Teléfono inválido. Debe contener 10 dígitos.');
        return;
      }
  
      const registro = { nombre, email, telefono };
      registros.push(registro);
  
      alert('Registro creado con éxito');
      registroForm.reset();
    });
  
    function listarRegistros() {
      cards.innerHTML = '';
      registros.forEach((registro, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h3>Registro ${index + 1}</h3>
          <p><strong>Nombre:</strong> ${registro.nombre}</p>
          <p><strong>Email:</strong> ${registro.email}</p>
          <p><strong>Teléfono:</strong> ${registro.telefono}</p>
        `;
        cards.appendChild(card);
      });
    }
  });
  