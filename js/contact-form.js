$("#speak-us__form").validate({
    rules: {
        name: {
            required: true
        },

        email: {
            required: true,
            email: true
        },

        mensagem: {
            required: true,
            minlength: 10,
            maxlength: 200
        }
    },

    messages: {
        name: "Precisamos saber seu nome.",

        email: {
            required: 'Precisamos saber seu email.',
            email: 'Email inválido.'
        },

        mensagem: {
            required: "Por favor, escreva uma mensagem!",
            minlength: "Sua mensagem deve ter no mínimo 10 caracteres.",
            maxlength: "Sua mensagem deve ter no máximo 200 caracteres."
        }
    }
});

$("#speak-us__form").submit(function (e) {
    e.preventDefault();

    if ($("#speak-us__form").valid()) {
        const data = {
            name: $(this)
                .find('#inputName')
                .val(),
            email: $(this)
                .find('#inputEmail')
                .val(),
            mensagem: $(this)
                .find('#inputMensagem')
                .val()
        }

        fetch('/contato.php', {
            method: 'POST',
            body: JSON.stringify(data)

        }).then(res => {
            $(this)
                .find('#success-box')
                .fadeIn()
                .html('<p> Mensagem enviada com sucesso! Entraremos em contato o mais breve possível.</' +
                        'p>');

            $(this)
                .find('#inputName')
                .val('');

            $(this)
                .find('#inputMensagem')
                .val('');

            $(this)
                .find('#inputEmail')
                .val('');

        }).catch(err => {
            $(this)
                .find('.errors-box')
                .html('<p>' + err.message
                    ? err.message
                    : 'Erro ao enviar a mensagem. Verifique os dados ou tente novamente mais tarde!</p>');
        })
    }
});