document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('#formContacto');
    const inputNombre = document.querySelector('#nombre');
    const inputCorreo = document.querySelector('#correo');
    const selectMotivo = document.querySelector('#motivo');
    const inputMensaje = document.querySelector('#mensaje');
    const feedbackDiv = document.querySelector('#formFeedback');

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nombreValor = inputNombre.value.trim();
        const correoValor = inputCorreo.value.trim();
        const motivoValor = selectMotivo.value;
        const mensajeValor = inputMensaje.value.trim();

        if (nombreValor === '' || correoValor === '' || motivoValor === '' || mensajeValor === '') {
            mostrarMensaje('Por favor, completa todos los campos obligatorios.', 'error');
            return;
        }

        const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formatoCorreo.test(correoValor)) {
            mostrarMensaje('Por favor, ingresa un correo electrónico válido.', 'error');
            inputCorreo.focus();
            return;
        }

        mostrarMensaje(`¡Gracias, ${nombreValor}! Tu mensaje sobre "${motivoValor}" ha sido enviado con éxito. Te contactaremos pronto.`, 'exito');
        formulario.reset();
    });

    function mostrarMensaje(texto, tipo) {
        feedbackDiv.textContent = texto;
        feedbackDiv.classList.remove('hidden', 'feedback-error', 'feedback-exito');
        if (tipo === 'error') {
            feedbackDiv.classList.add('feedback-error');
        } else {
            feedbackDiv.classList.add('feedback-exito');
        }
    }
});