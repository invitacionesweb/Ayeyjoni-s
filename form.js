

const scriptUrl = 'https://script.google.com/macros/s/AKfycbxu36mrTE5d31s0AwY5_Uw1Wd13wvxRPKCH7-9u6fk3wqTpfR9-v0g4bXfO1xPFBM4J3g/exec';
const form = document.forms['asistenciaform'];

form.addEventListener('submit', e => {
  e.preventDefault();

  Swal.fire({
    title: 'Enviando...',
    text: 'Por favor, esperá un momento',
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading()
  });

  fetch(scriptUrl, { method: 'POST', body: new FormData(form) })
    .then(res => {
      if (!res.ok) throw new Error('Error de red');
      Swal.fire('¡MUCHAS GRACIAS!', 'Formulario enviado', 'success');
    })
    .then(() => setTimeout(() => location.reload(), 1500))
    .catch(() =>
      Swal.fire('Error', 'No se pudo enviar el formulario', 'error')
    );
});
