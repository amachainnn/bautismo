// Menu hamburguesa
document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('nav-items').classList.toggle('show');
  });
  
  // Formulario - Envío de datos
  document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const comida = document.getElementById('comida').value;
    const invitado = document.getElementById('invitado').value;
  
    const mailto = `mailto:alejandro_machain@hotmail.com?subject=Confirmación Bautismo Isa&body=Nombre: ${nombre}%0AEmail: ${email}%0AComida: ${comida}%0AInvitado adicional: ${invitado}`;
  
    window.location.href = mailto;
  });
  