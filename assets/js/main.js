
document.addEventListener('DOMContentLoaded', function () {
  const year = new Date().getFullYear();
  ['year','year2','year3','year4'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = year;
  });

  (function () {
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {

          if (form.id === 'contactForm') {
            event.preventDefault();
            const alertBox = document.getElementById('formAlert');
            alertBox.innerHTML = '<div class="alert alert-success" role="alert">Mensaje enviado correctamente .</div>';
            form.reset();
            form.classList.remove('was-validated');
            return;
          }
        }
        form.classList.add('was-validated');
      }, false);
    });
  })();
});
